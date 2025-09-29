import { NextRequest, NextResponse } from "next/server";
import { auth, db } from "@/firebase/admin";

async function getUidFromRequest(req: NextRequest): Promise<string | null> {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) return null;
  const token = authHeader.split(" ")[1];
  if (!token) return null;
  try {
    const decoded = await auth.verifyIdToken(token);
    return decoded.uid;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const uid = await getUidFromRequest(req);
  if (!uid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userDoc = await db.collection("users").doc(uid).get();
  if (!userDoc.exists) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const userData = userDoc.data();

  // Dossiers: either as array or subcollection
  let dossiers = [];
  if (userData?.dossiers) {
    dossiers = userData.dossiers;
  } else {
    const dossiersSnap = await db.collection("users").doc(uid).collection("dossiers").get();
    dossiers = dossiersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  return NextResponse.json({
    ...userData,
    id: uid,
    skills: userData?.skills || [],
    dossiers: dossiers || [],
  });
}
