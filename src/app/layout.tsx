import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { ThemeProviderWrapper } from "@/components/ThemeProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satakshi Roy | Portfolio",
  description: "Computer Science Student | AI Automation Developer | Full-stack apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-foreground selection:text-background min-h-screen flex flex-col`}>
        <ThemeProviderWrapper>
          <CustomCursor />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
