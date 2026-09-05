import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Son Designs — Architecture & Interior Design Studio",
  description:
    "A high-end architecture and interior design studio working across the UK, Italy, and Spain. Designing spaces that breathe, inspire, and endure.",
};

export const viewport: Viewport = {
  themeColor: "#F9F6F0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen bg-cream text-charcoal font-body antialiased">
        {children}
      </body>
    </html>
  );
}