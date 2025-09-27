import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { db } from "@/firebase/admin";

export async function GET(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userDoc = await db.collection("users").doc(user.id).get();
  if (!userDoc.exists) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const userData = userDoc.data();

  // Dossiers: either as array or subcollection
  let dossiers = [];
  if (userData?.dossiers) {
    dossiers = userData.dossiers;
  } else {
    // Try to fetch from subcollection if not in main doc
    const dossiersSnap = await db.collection("users").doc(user.id).collection("dossiers").get();
    dossiers = dossiersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  return NextResponse.json({
    ...userData,
    id: user.id,
    skills: userData?.skills || [],
    dossiers: dossiers || [],
  });
}
