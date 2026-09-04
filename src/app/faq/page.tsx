import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import PageHeader from '@/components/ui/PageHeader';
import FadeIn from '@/components/ui/FadeIn';
import { ChevronDown, HelpCircle, Shield, Calendar, TrendingUp, Info } from 'lucide-react';

export const metadata = {
  title: 'FAQ',
  description:
    'Trouvez les réponses aux questions les plus fréquentes sur les services de placement de personnel de GBC Bénin.',
};

const faqs = [
  {
    category: 'Général',
    icon: Info,
    items: [
      { q: 'Qui est GBC Bénin ?', a: 'Global Business Center (GBC) est un service de recrutement et de placement de personnel qualifié basé à Abomey-Calavi, Bénin. Nous recrutons des aides ménagères, nounous, cuisinières, chauffeurs et gardiens pour les familles et entreprises.' },
      { q: 'Quelles sont vos heures d\'ouverture ?', a: 'Nos bureaux sont ouverts du lundi au vendredi, de 08h00 à 18h00. Nous sommes également disponibles sur rendez-vous le samedi matin.' },
      { q: 'Dans quelles villes intervenez-vous ?', a: 'Nous opérons principalement à Cotonou, Abomey-Calavi et Porto-Novo, mais notre réseau s\'étend à travers tout le Bénin.' },
    ]
  },
  {
    category: 'Services',
    icon: TrendingUp,
    items: [
      { q: 'Quels services propose GBC ?', a: 'Nous proposons le recrutement et le placement de : aides ménagères, nounous et garde d\'enfants, cuisinières, chauffeurs et gardiens. Chaque profil est rigoureusement sélectionné.' },
      { q: 'Comment bénéficier d\'un accompagnement ?', a: 'Vous pouvez nous contacter via notre formulaire, par téléphone au +229 01 66 72 71 52, par WhatsApp ou en prenant rendez-vous directement en ligne pour un premier échange gratuit.' },
      { q: 'Le personnel est-il vérifié ?', a: 'Oui, chaque candidat passe par un processus de vérification complet : entretien personnel, vérification des antécédents, vérification des références et test pratique.' },
    ]
  },
  {
    category: 'Rendez-vous',
    icon: Calendar,
    items: [
      { q: 'Comment prendre rendez-vous ?', a: 'Utilisez notre outil de prise de rendez-vous en ligne, appelez-nous au +229 01 66 72 71 52 ou contactez-nous par WhatsApp.' },
      { q: 'Les rendez-vous sont-ils payants ?', a: 'Le premier rendez-vous de diagnostic est totalement gratuit. Les modalités pour la suite de l\'accompagnement sont discutées lors de cet échange.' },
    ]
  },
  {
    category: 'Sécurité',
    icon: Shield,
    items: [
      { q: 'Comment sont protégées mes données ?', a: 'Nous appliquons des protocoles de sécurité stricts pour garantir la confidentialité et l\'intégrité de vos informations personnelles. Conformité avec les normes en vigueur.' },
      { q: 'Que se passe-t-il en cas de problème avec le personnel ?', a: 'Nous offrons un service de remplacement garanti. Si le personnel ne vous convient pas, nous procédons à un remplacement dans les meilleurs délais.' },
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="pt-24 flex flex-col w-full">
      <PageHeader
        title="FAQ"
        description="Trouvez les réponses aux questions les plus fréquentement posées sur nos services."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'FAQ' }]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-16">
            {faqs.map((group, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div>
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-primary/5">
                    <div className="w-10 h-10 bg-primary/5 text-primary rounded-lg flex items-center justify-center">
                      <group.icon size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">{group.category}</h2>
                  </div>
                  <div className="space-y-4">
                    {group.items.map((item, j) => (
                      <div key={j} className="bg-light rounded-2xl p-6 hover:bg-light/80 transition-colors border border-primary/5">
                        <details className="group">
                          <summary className="list-none cursor-pointer flex justify-between items-center font-bold text-lg text-primary">
                            {item.q}
                            <ChevronDown size={20} className="group-open:rotate-180 transition-transform text-primary-light shrink-0 ml-4" />
                          </summary>
                          <div className="mt-4 pt-4 border-t border-primary/5 text-text-main/70 leading-relaxed">
                            {item.a}
                          </div>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-24 bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold mb-4">Vous n&apos;avez pas trouvé votre réponse ?</h3>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Notre équipe est à votre disposition pour répondre à toutes vos interrogations.
              </p>
              <a
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
              >
                Nous contacter directement
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
