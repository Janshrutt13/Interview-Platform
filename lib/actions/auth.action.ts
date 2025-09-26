'use server';

import { db, auth } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7; // seconds in a week

export async function signUp(params: SignUpParams) {
    const { uid, name, email } = params;

    try {
        const userRecord = await db.collection("users").doc(uid).get();

        if (userRecord.exists) {
            return {
                success: false,
                message: "User already exists, please Sign Up",
            };
        }

        await db.collection("users").doc(uid).set({
            name,
            email,
        });

        return {
            success: true,
            message: "User created successfully",
        };
    } catch (e: any) {
        console.error("Error creating user", e);

        if (e.code === "auth/email-already-exists") {
            return {
                success: false,
                message: "Email already exists",
            };
        }

        return {
            success: false,
            message: "Failed to create user",
        };
    }
}

export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies();

    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: ONE_WEEK * 1000, // ms
    });

    cookieStore.set("session", sessionCookie, {
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
    });
}

export async function signIn(params: SignInParams) {
    const { email, idToken } = params;

    try {
        const userRecord = await auth.getUserByEmail(email);
        if (!userRecord) {
            return {
                success: false,
                message: "User does not exist. Create an account.",
            };
        }

        await setSessionCookie(idToken);

        return {
            success: true,
            message: "Login successful",
        };
    } catch (error: any) {
        console.log("", error);

        return {
            success: false,
            message: "Failed to log into account. Please try again.",
        };
    }
}

// Sign out user by clearing the session cookie
export async function signOut() {
    const cookieStore = await cookies();

    cookieStore.delete("session");
}

//Get current user from session cookie
export async function getCurrentUser() : Promise<User | null> {
    const cookieStore = await cookies();

    const sessionCookie = cookieStore.get("session")?.value;
    if (!sessionCookie) return null;

    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
        const userRecord = await db
            .collection("users")
            .doc(decodedClaims.uid)
            .get()

        if (!userRecord) return null;

        return {
            ...userRecord.data(),
            id: userRecord.id,
        } as User;
    } catch (err) {
        console.log(err);

        // Invalid or expired session
        return null;
    }
}

//Check if user is authenticated
export async function isAuthenticated(){
    const user = await getCurrentUser();
    return !!user;
}

