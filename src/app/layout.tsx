import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KokoMate - BNPL Calculator",
  description: "A Mobile-First BNPL Calculator Web App for Sri Lankan consumers",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#FF007A",
}

import StatusBarEnforcer from "@/components/StatusBarEnforcer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <StatusBarEnforcer />
        {children}
      </body>
    </html>
  );
}
