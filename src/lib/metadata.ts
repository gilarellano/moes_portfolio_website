// src/lib/metadata.ts
import type { Metadata, Viewport } from "next";

const siteUrl = process.env.BASE_URL || " https://www.marisamini.com/";
const imageUrl = process.env.BASE_IMAGE_URL || "http://marisamini.com/opengraph.png";

export const metadataConfig: Metadata = {
  title: {
    default: "Marisa Mini",
    template: "%s | Technology Consultant Portfolio",
  },
  description:
    "Explore the professional journey of a Technology Consultant specializing in Microsoft Dynamics 365 implementations, with expertise in CRM systems, data analysis, and project management.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Technology Consultant | Microsoft Dynamics 365 Specialist",
    description:
      "Technology Consultant specializing in Microsoft Dynamics 365 implementations, with expertise in CRM systems, data analysis, and project management. Former figure skater bringing unique perspective to technical solutions.",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Technology Consultant Portfolio Preview",
      },
    ],
    siteName: "Technology Consultant Portfolio",
  },
  // twitter section commented out as in original
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "portfolio",
    "technology consultant",
    "Microsoft Dynamics 365",
    "CRM implementation",
    "data science",
    "project management",
    "RSM US LLP",
    "Power Platform",
    "data analysis",
    "predictive modeling",
    "machine learning",
    "Power Pages",
    "customer relationship management",
    "business solutions",
  ],
  authors: [{ name: "Your Name" }],
  alternates: {
    canonical: siteUrl,
  },
};

export const viewportConfig: Viewport = {
  themeColor: "#202020",
  width: "device-width",
  initialScale: 1,
};