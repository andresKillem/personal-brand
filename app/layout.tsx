import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrés Muñoz - Principal DevOps Architect | Cloud Solutions Expert",
  description: "10+ years of experience architecting cloud-native platforms. Expert in AWS, Kubernetes, DevOps transformation, and cloud cost optimization. Available for new opportunities.",
  keywords: [
    "DevOps Architect",
    "Cloud Solutions Architect",
    "AWS Expert",
    "Kubernetes",
    "DevOps Transformation",
    "Site Reliability Engineering",
    "FinTech DevOps",
    "Cloud Native",
    "Terraform",
    "CI/CD",
    "Andrés Muñoz"
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
    title: "Andrés Muñoz - Principal DevOps Architect",
    description: "10+ years architecting cloud-native platforms for high-growth companies. Specialized in AWS multi-account architectures, Kubernetes at scale, and DevOps transformation.",
    siteName: "Andrés Muñoz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Muñoz - Principal DevOps Architect",
    description: "10+ years architecting cloud-native platforms for high-growth companies.",
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
