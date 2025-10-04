import { NextRequest, NextResponse } from "next/server";
import { auth, adminDb } from "@/firebase/admin";
import { FieldValue } from "firebase-admin/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase/client";

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

export async function POST(req: NextRequest) {
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
    
    const userRef = adminDb.collection("users").doc(uid);
    const userDoc = await userRef.get();
    
    if (!userDoc.exists) {
      await userRef.set({ skills: [skillObj] }, { merge: true });
      return NextResponse.json({ success: true, created: true });
    } else {
      const data = userDoc.data();
      
      if (!Array.isArray(data?.skills)) {
        await userRef.update({ skills: [skillObj] });
        return NextResponse.json({ success: true, initialized: true });
      }
      
      await userRef.update({ skills: FieldValue.arrayUnion(skillObj) });
      return NextResponse.json({ success: true });
    }
  } catch (error) {
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
    const userRef = adminDb.collection("users").doc(uid);
    await userRef.update({ skills: FieldValue.arrayRemove(skillObj) });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to remove skill", details: String(error) }, { status: 500 });
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
      return NextResponse.json({ skills: [] });
    }
    
    const data = userDoc.data();
    
    return NextResponse.json({ skills: data?.skills || [] });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 });
  }
}