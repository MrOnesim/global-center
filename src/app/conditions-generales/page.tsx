import React from 'react';
import PageHeader from '@/components/ui/PageHeader';

export const metadata = {
  title: 'Conditions Générales',
};

export default function TermsPage() {
  return (
    <div className="pt-24 flex flex-col w-full">
      <PageHeader
        title="Conditions Générales"
        description="Termes et conditions d'utilisation du site GBC Bénin."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'CGU' }]}
      />
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-8 text-text-main/70">
          <p className="text-lg">
            L&apos;utilisation du site web de GBC Bénin implique l&apos;acceptation pleine et entière
            des présentes conditions générales.
          </p>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Accès au site</h2>
            <p>
              Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à
              internet. GBC Bénin s&apos;efforce de maintenir le site accessible mais ne peut être tenue
              responsable en cas d&apos;interruption.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Services fournis</h2>
            <p>
              Les informations présentes sur le site ont un caractère indicatif. Elles ne sauraient
              engager la responsabilité de GBC Bénin sur les résultats des investissements.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
