"use client";
import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const { currentUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && currentUser) {
      router.replace("/");
    }
  }, [loading, currentUser, router]);

  if (loading) return null;

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
