import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/ui/PageHeader';
import FadeIn from '@/components/ui/FadeIn';
import { Search, MapPin, Tag, ArrowRight, Filter } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Opportunités',
  description:
    'Découvrez nos offres de placement et opportunités de recrutement de personnel qualifié au Bénin.',
};

const opportunities = [
  {
    id: 1,
    title: 'Recherche Aide Ménagère - Villa Calavi',
    category: 'Ménage',
    location: 'Abomey-Calavi',
    status: 'Ouvert',
    slug: 'aide-menagere-villa-calavi',
    description: 'Cherche une aide ménagère expérimentée pour l\'entretien d\'une villa 5 pièces, 3 fois par semaine.',
    type: 'Placement',
    amount: 'Négociable',
    image: '/images/781525823_1471975301621646_3581372018167280653_n.jpg',
  },
  {
    id: 2,
    title: 'Nounou Bilingue Requise',
    category: 'Garde d\'enfants',
    location: 'Cotonou',
    status: 'Ouvert',
    slug: 'nounou-bilingue',
    description: 'Recherche nounou bilingue (français/anglais) pour garde de 2 enfants de 3 et 5 ans.',
    type: 'Recrutement',
    amount: 'Selon profil',
    image: '/images/783948699_1470115358474307_924674279728262957_n.jpg',
  },
  {
    id: 3,
    title: 'Chauffeur Privé Discret',
    category: 'Transport',
    location: 'Cotonou',
    status: 'En cours',
    slug: 'chauffeur-prive',
    description: 'Recherche chauffeur privé avec permis B+C, bonne présentation et connaissance de Cotonou.',
    type: 'Placement',
    amount: 'Selon profil',
    image: '/images/786266528_1475360754616434_4577274913970703757_n.jpg',
  }
];

export default function OpportunitiesPage() {
  return (
    <div className="pt-24 flex flex-col w-full">
      <PageHeader
        title="Opportunités"
        description="Découvrez nos offres de placement et saisissez les opportunités de recrutement de personnel qualifié au Bénin."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Opportunités' }]}
      />

      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
            {/* Filters */}
            <aside className="lg:w-1/4">
              <FadeIn direction="left">
                <div className="bg-light p-5 md:p-8 rounded-3xl sticky top-28">
                  <div className="flex items-center gap-2 mb-8 text-primary font-bold">
                    <Filter size={20} /> <span>Filtres</span>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-text-main/40 mb-4">Catégorie</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Tout', 'Ménage', 'Garde', 'Cuisine', 'Transport'].map((c, i) => (
                          <button
                            key={i}
                            className={cn(
                              'px-4 py-2 rounded-lg text-sm transition-all',
                              i === 0 ? 'bg-primary text-white' : 'bg-white border border-primary/10 text-primary hover:border-primary-light'
                            )}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-text-main/40 mb-4">Statut</h4>
                      <select className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light transition-colors">
                        <option>Tous les statuts</option>
                        <option>Ouvert</option>
                        <option>En cours</option>
                        <option>Clôturé</option>
                      </select>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </aside>

            {/* Grid */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {opportunities.map((opp, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="bg-white border border-primary/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                      <div className="aspect-[16/9] bg-primary/10 overflow-hidden relative">
                        <Image
                          src={opp.image}
                          alt={opp.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <span className="text-xs absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-primary font-bold shadow-sm z-10">
                          {opp.type}
                        </span>
                      </div>
                      <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary-light bg-primary-light/10 px-3 py-1 rounded-full">
                              {opp.category}
                            </span>
                            <span
                              className={cn(
                                'text-[10px] font-bold uppercase px-2 py-0.5 rounded border',
                                opp.status === 'Ouvert' ? 'text-green-600 border-green-600' : 'text-amber-600 border-amber-600'
                              )}
                            >
                              {opp.status}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-primary-light transition-colors">
                            {opp.title}
                          </h3>
                          <p className="text-text-main/60 text-sm mb-6 line-clamp-2">{opp.description}</p>
                          <div className="space-y-2 mb-8">
                            <div className="flex items-center gap-2 text-sm text-text-main/70">
                              <MapPin size={14} className="text-primary-light" />
                              <span>{opp.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-text-main/70">
                              <Tag size={14} className="text-primary-light" />
                              <span>Rémunération : {opp.amount}</span>
                            </div>
                          </div>
                        </div>
                        <Link
                          href={`/opportunites/${opp.slug}`}
                          className="bg-light text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all"
                        >
                          Voir les détails <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn>
                <div className="mt-16 bg-amber-50 border border-amber-200 p-6 rounded-2xl text-amber-800 text-sm italic">
                  Avertissement : Les opportunités présentées sont soumises à conditions. GBC Bénin ne garantit
                  aucun rendement. Veuillez nous contacter pour des informations détaillées et personnalisées.
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
