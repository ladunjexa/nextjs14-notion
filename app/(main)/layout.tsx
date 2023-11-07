"use client";

import React from "react";
import { useConvexAuth } from "convex/react";
import Spinner from "@/components/shared/Spinner";
import { redirect } from "next/navigation";
import Navigation from "./_components/Navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="dar:bg-[#1F1F1F] flex h-full">
      <Navigation />
      <main className="h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
