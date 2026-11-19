import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhaarathi | Innovation Leader & CEO, AIIF Incubator",
  description: "Executive portfolio of Bhaarathi - Chief Executive Officer at AJK Innovation Incubator Foundation (AIIF). Building purpose-driven, execution-first startup ecosystems in Coimbatore, Tamil Nadu.",
  keywords: ["Bhaarathi", "CEO AIIF", "AJK Innovation Incubator Foundation", "Startup Incubator", "Coimbatore Startups", "StartupTN", "Innovation Leader"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
