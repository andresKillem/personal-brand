import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrés Muñoz | AI Engineer & LLM Systems — Agentic Operations",
  description: "AI Engineer building production agent systems — multi-provider routing, RAG, and evals — on a deep Cloud/Platform & SRE foundation. Head of Infrastructure & SRE running operations with AI agents.",
  keywords: [
    "Andrés Muñoz",
    "AI Engineer",
    "LLM Systems",
    "Agentic AI",
    "RAG",
    "LLM Evals",
    "Multi-Agent Orchestration",
    "Head of Infrastructure SRE",
    "FastAPI",
    "AWS"
  ],
  authors: [{ name: "Andrés Muñoz" }],
  creator: "Andrés Muñoz",
  publisher: "Andrés Muñoz",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andresmunoz.tech",
    title: "Andrés Muñoz — AI Engineer & LLM Systems",
    description: "Production agent systems — multi-provider routing, RAG, evals — on a deep Cloud/Platform & SRE foundation. Head of Infrastructure & SRE running ops with AI agents.",
    siteName: "Andrés Muñoz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Muñoz — AI Engineer & LLM Systems",
    description: "Production agent systems — multi-provider routing, RAG, and evals — on a deep Cloud/Platform & SRE foundation.",
  },
  alternates: {
    canonical: "https://andresmunoz.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Andrés Muñoz",
    "jobTitle": "AI Engineer & Head of Infrastructure / SRE",
    "url": "https://andresmunoz.tech",
    "sameAs": [
      "https://www.linkedin.com/in/andres-munoz/",
      "https://github.com/andresKillem"
    ],
    "description": "AI Engineer building production LLM agent systems (multi-provider routing, RAG, evals) on a deep Cloud/Platform and SRE foundation."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
