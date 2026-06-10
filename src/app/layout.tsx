import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://makemytechnology.com"),
  title: {
    default: "MakeMyTechnology",
    template: "%s · MakeMyTechnology",
  },
  description:
    "MakeMyTechnology is a Deep Edu-Tech Center of Excellence building independent products across 5G/6G, IoT, AI, drone corridor technology, and quantum-safe security.",
  openGraph: {
    type: "website",
    siteName: "MakeMyTechnology",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-bg text-ink">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
