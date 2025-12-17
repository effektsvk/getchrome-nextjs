import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { PostHogProvider } from "./providers";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "getchro.me",
  description: "Install Chrome with a single PowerShell command",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>
          {/* TODO: Disable PostHog for now */}
          {/* <PostHogProvider> */}
            {children}
          {/* </PostHogProvider> */}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
