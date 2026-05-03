"use client";

import dynamic from "next/dynamic";
import React from "react";

const ThemeProvider = dynamic(
  () => import("@/components/ThemeProvider").then(mod => ({ default: mod.ThemeProvider })),
  { ssr: false }
);

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
