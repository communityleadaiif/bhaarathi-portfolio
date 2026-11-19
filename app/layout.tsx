import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#101827",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Prof. Bhaarathi Ilango | Institution Builder & Venture Architect",
  description:
    "Official executive platform of Prof. Bhaarathi Ilango: Institution Builder, Venture Architect, and Growth Strategist. Architecting sustainable innovation ecosystems, deeptech ventures, and non-grant-dependent university incubation.",
  keywords: [
    "Prof. Bhaarathi Ilango",
    "Bhaarathi Ilango",
    "Institution Builder",
    "Venture Architect",
    "Growth Strategist",
    "AJK Innovation Incubator Foundation",
    "AIIF CEO",
    "ACTIEV",
    "GoAlong",
    "4-Readiness Level Model",
    "StartupTN Multiplier",
    "Ecosystem Leadership",
    "Coimbatore Startups",
    "Deeptech Incubation"
  ],
  authors: [{ name: "Prof. Bhaarathi Ilango" }],
  creator: "Prof. Bhaarathi Ilango",
  publisher: "Executive Office of Prof. Bhaarathi Ilango",
  metadataBase: new URL("https://bhaarathi.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Prof. Bhaarathi Ilango | Institution Builder & Venture Architect",
    description:
      "Building institutions, enabling ventures, architecting innovation ecosystems and translating ambitious ideas into scalable outcomes.",
    url: "https://bhaarathi.com",
    siteName: "Prof. Bhaarathi Ilango Executive Platform",
    images: [
      {
        url: "/images/og-executive.png",
        width: 1200,
        height: 630,
        alt: "Prof. Bhaarathi Ilango – Institution Builder | Venture Architect | Growth Strategist"
      }
    ],
    locale: "en_US",
    type: "profile"
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Bhaarathi Ilango | Institution Builder & Venture Architect",
    description:
      "Building institutions, enabling ventures, architecting innovation ecosystems and translating ambitious ideas into scalable outcomes.",
    images: ["/images/og-executive.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://bhaarathi.com/#person",
        "name": "Prof. Bhaarathi Ilango",
        "jobTitle": "Chief Executive Officer & Venture Architect",
        "worksFor": {
          "@type": "Organization",
          "name": "AJK Innovation Incubator Foundation (AIIF)",
          "url": "https://aiif-ams.vercel.app"
        },
        "description": "Institution Builder, Venture Architect, and Growth Strategist architecting university incubation engines and deeptech venture studios.",
        "url": "https://bhaarathi.com",
        "sameAs": [
          "https://www.linkedin.com/in/bhaarathi-ilango",
          "https://aiif-ams.vercel.app"
        ],
        "knowsAbout": [
          "Institutional Transformation",
          "Startup Ecosystem Development",
          "Venture Building",
          "4-Readiness Level Model",
          "GTM Strategy",
          "AI Transformation"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://bhaarathi.com/#service",
        "name": "Prof. Bhaarathi Ilango Executive Advisory",
        "url": "https://bhaarathi.com",
        "provider": {
          "@id": "https://bhaarathi.com/#person"
        },
        "areaServed": "India",
        "serviceType": [
          "Growth Consulting",
          "Venture Partnership",
          "Institutional Leadership",
          "Strategic Advisory",
          "CSR & Funding",
          "Speaking Engagements",
          "Mentorship",
          "AI Transformation"
        ]
      }
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0F1D] text-ivory antialiased">
        {children}
      </body>
    </html>
  );
}
