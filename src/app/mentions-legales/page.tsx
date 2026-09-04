import React from 'react';
import PageHeader from '@/components/ui/PageHeader';

export const metadata = {
  title: 'Mentions Légales',
  description:
    'Informations légales relatives au site GBC Bénin : éditeur, hébergement, propriété intellectuelle.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-24 flex flex-col w-full">
      <PageHeader
        title="Mentions Légales"
        description="Informations légales relatives au site GBC Bénin."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Mentions légales' }]}
      />
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-8 text-text-main/70">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Éditeur du site</h2>
            <p>
              Le site web GBC Bénin est édité par Global Business Center, service de recrutement et de
              placement de personnel.
            </p>
            <p>Adresse : Pharmacie SOS, Abomey-Calavi, Bénin.</p>
            <p>Email : agencegbc@gmail.com</p>
            <p>Téléphone : +229 01 66 72 71 52</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Hébergement</h2>
            <p>
              Le site est hébergé par des serveurs sécurisés, garantissant une haute disponibilité et
              une protection des données.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos, etc.) est la propriété
              exclusive de GBC Bénin, sauf mention contraire.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Limitation de responsabilité</h2>
            <p>
              GBC Bénin s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées, mais
              ne peut garantir l&apos;absence d&apos;erreurs ou d&apos;omissions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
