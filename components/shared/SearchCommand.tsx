"use client";

import { useState, useEffect } from "react";
import { File } from "lucide-react";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

type Props = {};

const SearchCommand = (props: Props) => {
  const { user } = useUser();
  const router = useRouter();

  return <div>SearchCommand</div>;
};

export default SearchCommand;
