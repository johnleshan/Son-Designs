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
    "A high-end architecture and interior design studio in Nairobi, working across Kenya and East Africa. Designing spaces that breathe, inspire, and endure.",
  keywords: [
    "architecture",
    "interior design",
    "landscape design",
    "project management",
    "Nairobi architect",
    "Kenya interior design studio",
    "East Africa architecture",
  ],
  openGraph: {
    title: "Son Designs — Architecture & Interior Design Studio",
    description:
      "Designing spaces that breathe, inspire, and endure. Architecture and interiors across Kenya and East Africa.",
    type: "website",
    locale: "en_KE",
    siteName: "Son Designs",
  },
  twitter: {
    card: "summary",
    title: "Son Designs — Architecture & Interior Design Studio",
    description:
      "Designing spaces that breathe, inspire, and endure. Architecture and interiors across Kenya and East Africa.",
  },
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
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "development" && (
          <script
            dangerouslySetInnerHTML={{
              __html:
                "(function(){var strip=function(){var t=document.documentElement;if(t&&t.hasAttribute('class')){t.removeAttribute('class');}};strip();new MutationObserver(strip).observe(document.documentElement,{attributes:true,attributeFilter:['class']});})();",
            }}
          />
        )}
      </head>
      <body
        className={`${cormorant.variable} ${manrope.variable} min-h-screen bg-cream text-charcoal font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}