"use client";

import { useEffect } from "react";

export default function AntiInspect() {
  useEffect(() => {
    
    const handleContext = (e: MouseEvent) => e.preventDefault();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "F12") e.preventDefault();
      if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) e.preventDefault();
      if (e.ctrlKey && e.key.toLowerCase() === "u") e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContext);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("contextmenu", handleContext);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return null;
}
