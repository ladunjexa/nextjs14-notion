import { useEffect, useState } from "react";

export default function useOrigin(): string {
  const [mounted, setMounted] = useState<boolean>(false);
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  useEffect(() => setMounted(true), []);

  if (!mounted) return "";

  return origin;
}
