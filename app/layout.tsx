import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Notion - The all-in-one workspace for your notes, tasks, wikis, and databases.",
  description: "All your notes in one place, wherever you are. 📝",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/images/logo.svg",
        href: "/assets/images/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/images/logo-dark.svg",
        href: "/assets/images/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
