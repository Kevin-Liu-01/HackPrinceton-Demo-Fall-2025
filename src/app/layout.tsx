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

export const metadata: Metadata = {
  title: "HackPrinceton",
  description: "HackPrinceton Fall 2025",
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
