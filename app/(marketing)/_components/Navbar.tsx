"use client";

import useScrollTop from "@/hooks/useScrollTop";
import React from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { ModeToggle } from "@/components/shared/ModeToggle";

type Props = {};

const Navbar = (props: Props) => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        Login
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
