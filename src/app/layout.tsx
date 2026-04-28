import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { DM_Serif_Display, Averia_Serif_Libre } from "next/font/google";

const dmserifdisplay = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif-display",
  weight: ["400"],
});

const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-averia-serif-libre",
  weight: ["300", "400"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const SITE_URL = "https://hackprinceton-demo-fall-2025.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HackPrinceton Fall 2025 Demo",
    template: "%s | HackPrinceton",
  },
  description:
    "HackPrinceton Fall 2025 hackathon demo project — built at Princeton University's premier hackathon.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "HackPrinceton",
    title: "HackPrinceton Fall 2025 Demo",
    description:
      "HackPrinceton Fall 2025 hackathon demo project — built at Princeton University's premier hackathon.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HackPrinceton Fall 2025 Demo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hackprinceton",
    creator: "@kevskgs",
    title: "HackPrinceton Fall 2025 Demo",
    description:
      "HackPrinceton Fall 2025 hackathon demo project — built at Princeton University's premier hackathon.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://use.typekit.net/vxq6req.css"></link>
      <body
        className={`${dmserifdisplay.variable} ${averiaSerifLibre.variable} antialiased`}
      >
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
