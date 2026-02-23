import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrés Muñoz | Principal Solutions Architect & AI Expert",
  description: "Architecting high-scale cloud platforms, FinTech ecosystems (PilasFi, Deuna), and AI-driven solutions. 10+ years of technical leadership in AWS, Kubernetes, and DevOps.",
  keywords: [
    "Andrés Muñoz",
    "PilasFi",
    "Solutions Architect",
    "DevOps Architect",
    "Cloud Expert",
    "FinTech Infrastructure",
    "AWS Professional",
    "Kubernetes at Scale"
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
    title: "Andrés Muñoz - Principal DevOps Architect & SRE",
    description: "10+ years architecting cloud-native platforms for high-growth companies. Specialized in AWS multi-account architectures, Kubernetes at scale, DevOps transformation, and SRE practices.",
    siteName: "Andrés Muñoz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Muñoz - Principal DevOps Architect & SRE",
    description: "10+ years architecting cloud-native platforms for high-growth companies. Expert in DevOps, SRE, and Cloud Architecture.",
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
    "jobTitle": "Principal Solutions Architect",
    "url": "https://andresmunoz.tech",
    "sameAs": [
      "https://www.linkedin.com/in/andres-munoz/",
      "https://github.com/andresKillem"
    ],
    "description": "Expert Solutions Architect and DevOps leader specializing in Cloud Architecture and FinTech."
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
