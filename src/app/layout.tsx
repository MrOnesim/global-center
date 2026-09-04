import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import Analytics from "@/components/analytics/Analytics";
import TawkTo from "@/components/analytics/TawkTo";

export const metadata: Metadata = {
  title: {
    default: "GBC Bénin | Votre partenaire de confiance",
    template: "%s | GBC Bénin",
  },
  description:
    "GBC Bénin vous accompagne dans vos projets de recrutement de personnel qualifié avec une approche fondée sur la confiance, la proximité et la création de valeur.",
  keywords: [
    "recrutement Bénin",
    "placement personnel",
    "aide ménagère Bénin",
    "nounou Bénin",
    "GBC Bénin",
    "Global Business Center",
  ],
  openGraph: {
    title: "GBC Bénin | Votre partenaire de confiance",
    description:
      "Recrutement et placement de personnel qualifié au Bénin. Aides ménagères, nounous, cuisinières, chauffeurs et gardiens.",
    url: "https://gbc.bj",
    siteName: "GBC Bénin",
    locale: "fr_BJ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GBC Bénin | Votre partenaire de confiance",
    description:
      "Recrutement et placement de personnel qualifié au Bénin.",
  },
  metadataBase: new URL("https://gbc.bj"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Global Business Center (GBC Bénin)",
    description:
      "Recrutement et placement de personnel qualifié au Bénin : aides ménagères, nounous, cuisinières, chauffeurs et gardiens.",
    url: "https://gbc.bj",
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
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Analytics />
        <TawkTo />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
