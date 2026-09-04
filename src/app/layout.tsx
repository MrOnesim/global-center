import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import Analytics from "@/components/analytics/Analytics";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "GBC Bénin | Agence de recrutement de personnel au Bénin",
    template: "%s | GBC Bénin",
  },
  description:
    "GBC Bénin vous accompagne dans vos projets de recrutement de personnel qualifié au Bénin : aides ménagères, nounous, cuisinières, chauffeurs et gardiens.",
  keywords: [
    "recrutement Bénin",
    "placement personnel",
    "aide ménagère Bénin",
    "nounou Bénin",
    "GBC Bénin",
    "Global Business Center",
    "agence recrutement Bénin",
  ],
  openGraph: {
    title: "GBC Bénin | Agence de recrutement de personnel au Bénin",
    description:
      "Recrutement et placement de personnel qualifié au Bénin. Aides ménagères, nounous, cuisinières, chauffeurs et gardiens.",
    url: "https://global-business-center.vercel.app",
    siteName: "GBC Bénin",
    locale: "fr_BJ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GBC Bénin | Agence de recrutement de personnel au Bénin",
    description:
      "Recrutement et placement de personnel qualifié au Bénin.",
  },
  metadataBase: new URL("https://global-business-center.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Global Business Center (GBC Bénin)",
    description:
      "Recrutement et placement de personnel qualifié au Bénin : aides ménagères, nounous, cuisinières, chauffeurs et gardiens.",
    url: "https://global-business-center.vercel.app",
    telephone: "+2290166727152",
    email: "agencegbc@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pharmacie SOS",
      addressLocality: "Abomey-Calavi",
      addressCountry: "BJ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.4413,
      longitude: 2.3558,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/gbcbeninofficiel/",
      "https://www.tiktok.com/@managergoudjanou",
      "https://bit.ly/3KlvoVm",
    ],
  };

  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Aller au contenu principal
        </a>
        <Analytics />
        <WhatsAppButton />
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
