import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

import { EdgeStoreProvider } from "@/lib/edgestore";

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
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="notion-theme"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
