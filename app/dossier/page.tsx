"use client";
import InterviewStrategist from "@/components/InterviewStrategist";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

const page = () => {
    const { currentUser } = useAuth();

    return (
        <ProtectedRoute>
            {currentUser && (
                <InterviewStrategist
                    userName={currentUser.displayName || currentUser.email || "User"}
                    userId={currentUser.uid}
                />
            )}
        </ProtectedRoute>
    );
};

export default page;