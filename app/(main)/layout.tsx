"use client";

import React from "react";
import { redirect } from "next/navigation";

import { useConvexAuth } from "convex/react";

import { Navigation } from "./_components/navigation";
import { Spinner } from "@/components/shared/spinner";
import SearchCommand from "@/components/shared/search-command";

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
    <div className="flex h-full dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="h-full flex-1 overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
}
