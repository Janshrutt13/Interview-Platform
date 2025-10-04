import { NextRequest, NextResponse } from "next/server";
import { auth, adminDb } from "@/firebase/admin";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";

async function getUidFromRequest(req: NextRequest): Promise<string | null> {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) return null;
  
  const token = authHeader.split(" ")[1];
  if (!token) return null;
  
  try {
    const decoded = await auth.verifyIdToken(token);
    return decoded.uid;
  } catch (error) {
    return null;
  }
}

export async function GET(req: NextRequest) {
  try {
    const uid = await getUidFromRequest(req);
    if (!uid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const userRef = adminDb.collection("users").doc(uid);
    const userDoc = await userRef.get();
    
    if (!userDoc.exists) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    const userData = userDoc.data();
    const skills = userData?.skills || [];
    
    if (skills.length === 0) {
      return NextResponse.json({ error: "No skills found. Please add skills first." }, { status: 400 });
    }

    const skillNames = skills.map((skill: any) => skill.name);
    const domains = [...new Set(skills.map((skill: any) => skill.domain))];

    const { text: recommendationsText } = await generateText({
      model: google("gemini-2.0-flash-001"),
      system: "You are a learning recommendation expert. Provide high-quality, specific learning resources.",
      prompt: `Based on these user skills: ${skillNames.join(", ")} in domains: ${domains.join(", ")}

Generate personalized learning recommendations in JSON format:
{
  "courses": [
    {
      "title": "Course Title",
      "provider": "Platform Name",
      "description": "Brief description",
      "level": "Beginner/Intermediate/Advanced",
      "estimatedHours": "X hours",
      "skills": ["skill1", "skill2"]
    }
  ],
  "blogs": [
    {
      "title": "Blog Title",
      "author": "Author Name",
      "description": "Brief description",
      "readTime": "X min read",
      "skills": ["skill1", "skill2"]
    }
  ],
  "videos": [
    {
      "title": "Video Title",
      "creator": "Creator Name",
      "description": "Brief description",
      "duration": "X minutes",
      "skills": ["skill1", "skill2"]
    }
  ],
  "books": [
    {
      "title": "Book Title",
      "author": "Author Name",
      "description": "Brief description",
      "level": "Beginner/Intermediate/Advanced",
      "skills": ["skill1", "skill2"]
    }
  ]
}

Provide 3-5 items per category. Focus on current, relevant, and high-quality resources.`
    });

    let recommendations;
    try {
      let jsonText = recommendationsText.trim();
      if (jsonText.startsWith('```json')) {
        jsonText = jsonText.replace(/```json\s*/, '').replace(/\s*```$/, '');
      } else if (jsonText.startsWith('```')) {
        jsonText = jsonText.replace(/```\s*/, '').replace(/\s*```$/, '');
      }
      recommendations = JSON.parse(jsonText);
    } catch (parseError) {
      return NextResponse.json({ error: "Failed to generate recommendations" }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      recommendations,
      userSkills: skillNames,
      domains 
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch recommendations" }, { status: 500 });
  }
}