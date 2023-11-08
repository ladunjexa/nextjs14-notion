"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image
        src="/assets/images/documents.png"
        height={300}
        width={300}
        alt="error"
        className="dark:hidden"
      />
      <Image
        src="/assets/images/documents-dark.png"
        height={300}
        width={300}
        alt="error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">Page not found!</h2>
      <Button asChild>
        <Link href="/documents">Go home</Link>
      </Button>
    </div>
  );
}
