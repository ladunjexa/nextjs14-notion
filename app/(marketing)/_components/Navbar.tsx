"use client";

import Link from "next/link";

import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { Spinner } from "@/components/shared/spinner";
import { Logo } from "./logo";

import useScrollTop from "@/hooks/use-scroll-top";

import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-4",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button size="sm">Get Notion free</Button>
            </SignUpButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href={"/documents"}>Enter Notion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
