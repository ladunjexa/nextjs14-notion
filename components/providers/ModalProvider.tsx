"use client";

import { useState, useEffect } from "react";

import SettingsModal from "@/components/modals/SettingsModal";
import { CoverImageModal } from "../modals/CoverImageModal";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
}
