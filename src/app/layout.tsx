import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Drew Waterstreet | Personal Finance Content Writer & Ghostwriter",
  description: "Content writer with 5+ years experience at Bankrate, FOX Money, and The New York Post. Specializing in personal finance, insurance, and fintech content that converts.",
  keywords: ["content writer", "personal finance writer", "insurance copywriter", "fintech content", "ghostwriter", "freelance writer"],
  openGraph: {
    title: "Drew Waterstreet | Personal Finance Content Writer",
    description: "Making unexpected connections that turn forgettable topics into standout reads.",
    type: "website",
    url: "https://drewwaterstreet.com",
    siteName: "Drew Waterstreet Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drew Waterstreet | Content Writer & Ghostwriter",
    description: "I turn dry finance topics into standout reads through unexpected connections.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="f202a8b9-d7a3-48fb-b107-60fe43f356d3"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <ThemeProvider defaultTheme="system" storageKey="drew-theme">
          {children}
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
