import { NextRequest, NextResponse } from "next/server";
import { auth, db } from "@/firebase/admin";
import { FieldValue } from "firebase-admin/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase/client";

async function getUidFromRequest(req: NextRequest): Promise<string | null> {
  const authHeader = req.headers.get("authorization");
  console.log("Auth header:", authHeader ? "Present" : "Missing");
  
  if (!authHeader) return null;
  
  const token = authHeader.split(" ")[1];
  console.log("Token extracted:", token ? "Present" : "Missing");
  
  if (!token) return null;
  
  try {
    const decoded = await auth.verifyIdToken(token);
    console.log("Token decoded successfully, UID:", decoded.uid);
    return decoded.uid;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const uid = await getUidFromRequest(req);
    console.log("POST /api/user/skills - UID:", uid);
    
    if (!uid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const { skill, domain } = await req.json();
    console.log("POST /api/user/skills - Data:", { skill, domain });
    
    if (!skill || typeof skill !== "string" || !domain) {
      return NextResponse.json({ error: "Invalid skill or domain" }, { status: 400 });
    }
    
    const skillObj = { name: skill, domain };
    console.log("POST /api/user/skills - Skill object:", skillObj);
    
    const userRef = db.collection("users").doc(uid);
    const userDoc = await userRef.get();
    
    console.log("POST /api/user/skills - User exists:", userDoc.exists);
    
    if (!userDoc.exists) {
      await userRef.set({ skills: [skillObj] }, { merge: true });
      console.log("POST /api/user/skills - Created new user with skills");
      return NextResponse.json({ success: true, created: true });
    } else {
      const data = userDoc.data();
      console.log("POST /api/user/skills - Existing skills:", data?.skills);
      
      if (!Array.isArray(data?.skills)) {
        await userRef.update({ skills: [skillObj] });
        console.log("POST /api/user/skills - Initialized skills array");
        return NextResponse.json({ success: true, initialized: true });
      }
      
      await userRef.update({ skills: FieldValue.arrayUnion(skillObj) });
      console.log("POST /api/user/skills - Added skill to existing array");
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error("Error adding skill:", error);
    return NextResponse.json({ error: "Failed to add skill", details: String(error) }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const uid = await getUidFromRequest(req);
    if (!uid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { skill, domain } = await req.json();
    if (!skill || typeof skill !== "string" || !domain) {
      return NextResponse.json({ error: "Invalid skill or domain" }, { status: 400 });
    }
    
    const skillObj = { name: skill, domain };
    const userRef = db.collection("users").doc(uid);
    await userRef.update({ skills: FieldValue.arrayRemove(skillObj) });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error removing skill:", error);
    return NextResponse.json({ error: "Failed to remove skill", details: String(error) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const uid = await getUidFromRequest(req);
    console.log("GET /api/user/skills - UID:", uid);
    
    if (!uid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const userRef = db.collection("users").doc(uid);
    const userDoc = await userRef.get();
    
    console.log("GET /api/user/skills - User exists:", userDoc.exists);
    
    if (!userDoc.exists) {
      console.log("GET /api/user/skills - No user document, returning empty skills");
      return NextResponse.json({ skills: [] });
    }
    
    const data = userDoc.data();
    console.log("GET /api/user/skills - User data:", data);
    console.log("GET /api/user/skills - Skills:", data?.skills);
    
    return NextResponse.json({ skills: data?.skills || [] });
  } catch (error) {
    console.error("Error fetching skills:", error);
    return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 });
  }
}
