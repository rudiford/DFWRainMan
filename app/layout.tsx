import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rain Man Irrigation | Dallas-Fort Worth Landscaping & Sprinkler Experts",
  description:
    "Rain Man Irrigation serves the DFW area with professional sprinkler installation, landscape design, drainage solutions, outdoor lighting, and hardscape. Family-owned, serving Dallas, Plano, Frisco, McKinney & more. Call 214.333.xxxx for a free estimate.",
  keywords:
    "irrigation DFW, sprinkler installation Dallas, landscape design Plano, drainage solutions Frisco, outdoor lighting McKinney, hardscape DFW, lawn irrigation Texas",
  openGraph: {
    title: "Rain Man Irrigation | DFW's Outdoor Experts",
    description:
      "Professional sprinkler systems, landscape design, drainage, lighting & hardscape for the Dallas-Fort Worth area. Get your free estimate today.",
    type: "website",
    url: "https://dfwrainman.com",
    siteName: "Rain Man Irrigation",
    images: [
      {
        url: "https://dfwrainman.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rain Man Irrigation - DFW Landscaping Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rain Man Irrigation | DFW's Outdoor Experts",
    description: "Professional irrigation, landscaping & hardscape for the Dallas-Fort Worth area.",
  },
  metadataBase: new URL("https://dfwrainman.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
