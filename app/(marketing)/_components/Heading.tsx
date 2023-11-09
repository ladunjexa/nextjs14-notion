"use client";

import Link from "next/link";
import Image from "next/image";

import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/shared/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Your
        <Image
          src="/assets/icons/wikis.png"
          width={42}
          height={42}
          alt="wikis"
          className="m-2 inline-flex"
        />
        <span className="underline decoration-from-font underline-offset-4">
          wiki
        </span>
        ,
        <Image
          src="/assets/icons/docs.png"
          width={38}
          height={38}
          alt="docs"
          className="m-2 inline-flex"
        />
        <span className="underline decoration-from-font underline-offset-4">
          docs
        </span>
        ,
        <br /> &amp;
        <Image
          src="/assets/icons/projects.png"
          width={52}
          height={52}
          alt="projects"
          className="m-2 inline-flex"
        />
        <span className="underline decoration-from-font underline-offset-4">
          projects
        </span>
        . Together.
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        Notion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Notion
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Notion
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
