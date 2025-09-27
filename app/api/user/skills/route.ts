import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { db } from "@/firebase/admin";

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { skill } = await req.json();
  if (!skill || typeof skill !== "string") {
    return NextResponse.json({ error: "Invalid skill" }, { status: 400 });
  }
  const userRef = db.collection("users").doc(user.id);
  await userRef.update({ skills: db.FieldValue.arrayUnion(skill) });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { skill } = await req.json();
  if (!skill || typeof skill !== "string") {
    return NextResponse.json({ error: "Invalid skill" }, { status: 400 });
  }
  const userRef = db.collection("users").doc(user.id);
  await userRef.update({ skills: db.FieldValue.arrayRemove(skill) });
  return NextResponse.json({ success: true });
}
