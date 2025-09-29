"use client";

import { useAuth } from "@/context/AuthContext";
import AxonInterviewPractice from "@/components/AxonInterviewPractice";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AxonPage() {
  const { currentUser } = useAuth();

  return (
    <ProtectedRoute>
      <div className="root-layout">
        {currentUser && (
          <AxonInterviewPractice 
            userName={currentUser.displayName || currentUser.email || "User"} 
            userId={currentUser.uid} 
          />
        )}
      </div>
    </ProtectedRoute>
  );
}