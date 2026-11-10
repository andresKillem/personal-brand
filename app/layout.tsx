import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrés Muñoz | Sr Staff Software Engineer — Agent Systems & Platform",
  description: "Sr Staff Software Engineer at Accordion. Production agent systems — multi-provider routing, RAG, and evals — on a deep Cloud/Platform & SRE foundation.",
  keywords: [
    "Andrés Muñoz",
    "Sr Staff Software Engineer",
    "Accordion",
    "AI Engineer",
    "LLM Systems",
    "Agentic AI",
    "RAG",
    "LLM Evals",
    "Multi-Agent Orchestration",
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
    title: "Andrés Muñoz — Sr Staff Software Engineer",
    description: "Sr Staff Software Engineer at Accordion. Production agent systems — multi-provider routing, RAG, evals — on a deep Cloud/Platform & SRE foundation.",
    siteName: "Andrés Muñoz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Muñoz — Sr Staff Software Engineer",
    description: "Sr Staff Software Engineer at Accordion. Production agent systems — multi-provider routing, RAG, and evals.",
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
    "jobTitle": "Sr Staff Software Engineer",
    "worksFor": { "@type": "Organization", "name": "Accordion" },
    "url": "https://andresmunoz.tech",
    "sameAs": [
      "https://www.linkedin.com/in/andres-munoz/",
      "https://github.com/andresKillem"
    ],
    "description": "Sr Staff Software Engineer building production LLM agent systems (multi-provider routing, RAG, evals) on a deep Cloud/Platform and SRE foundation."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
