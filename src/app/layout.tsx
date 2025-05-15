import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppThemeProvider } from "./providers/ThemeProvider";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Company - Modern Web Solutions",
  description:
    "We provide modern web solutions for your business needs. Contact us to learn more about our services.",
  openGraph: {
    title: "Your Company - Modern Web Solutions",
    description:
      "We provide modern web solutions for your business needs. Contact us to learn more about our services.",
    url: "https://your-company.com",
    siteName: "Your Company",
    images: [
      {
        url: "https://your-company.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Company Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Company - Modern Web Solutions",
    description:
      "We provide modern web solutions for your business needs. Contact us to learn more about our services.",
    images: ["https://your-company.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </AppThemeProvider>
    </html>
  );
}
