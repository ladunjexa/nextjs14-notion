"use client";

import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

type Props = {};

const Page = (props: Props) => {
  const { user } = useUser();

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image
        src="/assets/images/empty.png"
        height={300}
        width={300}
        alt="empty"
        className="dark:hidden"
      />
      <Image
        src="/assets/images/empty-dark.png"
        height={300}
        width={300}
        alt="empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Notion
      </h2>
      <Button>
        <PlusCircle className="mr-2 h-4 w-4" /> Create a note
      </Button>
    </div>
  );
};

export default Page;
