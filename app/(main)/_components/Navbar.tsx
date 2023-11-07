"use client";

import React from "react";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
  return <div>Navbar</div>;
};

export default Navbar;
