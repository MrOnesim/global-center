import React from 'react';
import PageHeader from '@/components/ui/PageHeader';

export const metadata = {
  title: 'Politique de Confidentialité',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 flex flex-col w-full">
      <PageHeader
        title="Politique de Confidentialité"
        description="Comment nous protégeons vos données personnelles."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Confidentialité' }]}
      />
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-8 text-text-main/70">
          <p className="text-lg">
            GBC Bénin s&apos;engage à protéger la vie privée des utilisateurs de son site web.
          </p>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Collecte des données</h2>
            <p>
              Nous collectons les données que vous nous fournissez volontairement via les formulaires
              de contact, de rendez-vous et d&apos;intérêt pour les opportunités.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Utilisation des données</h2>
            <p>
              Vos données sont utilisées exclusivement pour traiter vos demandes, vous fournir les
              services sollicités et vous informer sur nos activités.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour
              protéger vos données contre tout accès non autorisé.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
