import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import PageHeader from '@/components/ui/PageHeader';
import FadeIn from '@/components/ui/FadeIn';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Actualités',
  description:
    'Restez informé des dernières tendances, conseils et actualités de GBC Bénin.',
};

const articles = [
  {
    title: 'Les nouvelles tendances du recrutement au Bénin en 2026',
    excerpt: 'Analyse des secteurs en croissance et des besoins croissants en personnel qualifié au Bénin.',
    date: '15 Mai 2026',
    author: 'GBC Team',
    category: 'Recrutement',
    slug: 'tendances-recrutement-benin-2026',
    image: '/images/787159823_1474460841373092_3605669980762108495_n.jpg',
  },
  {
    title: 'Comment bien choisir son aide ménagère ?',
    excerpt: 'Conseils pratiques pour sélectionner le personnel domestique qui correspond le mieux à vos besoins.',
    date: '02 Mai 2026',
    author: 'Expert GBC',
    category: 'Conseils',
    slug: 'bien-choisir-aide-menagere',
    image: '/images/788104610_1473685354783974_697891788509796637_n.jpg',
  },
  {
    title: 'GBC Bénin lance son programme de nounous certifiées',
    excerpt: 'Une initiative pour former et certifier les nounous du Bénin aux standards internationaux de garde d\'enfants.',
    date: '20 Avril 2026',
    author: 'Direction GBC',
    category: 'Actualité',
    slug: 'programme-nounous-certifiees',
    image: '/images/783948699_1470115358474307_924674279728262957_n.jpg',
  }
];

export default function NewsPage() {
  return (
    <div className="pt-24 flex flex-col w-full">
      <PageHeader
        title="Actualités"
        description="Restez informé des dernières tendances, conseils et actualités de GBC Bénin."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Actualités' }]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map((article, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <article className="group flex flex-col h-full">
                  <div className="aspect-video bg-light rounded-2xl overflow-hidden mb-6 relative shadow-sm border border-primary/5">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {article.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-text-main/40 mb-4 font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} /> {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={12} /> {article.author}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-light transition-colors leading-tight flex-grow">
                    <Link href={`/actualites/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="text-text-main/60 mb-6">{article.excerpt}</p>
                  <Link
                    href={`/actualites/${article.slug}`}
                    className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-primary-light w-fit pb-1"
                  >
                    Lire l&apos;article <ArrowRight size={18} />
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="mt-20 flex justify-center gap-2">
            <button className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold">1</button>
            <button className="w-10 h-10 rounded-lg bg-light text-primary hover:bg-primary/10 flex items-center justify-center font-bold">2</button>
            <button className="w-10 h-10 rounded-lg bg-light text-primary hover:bg-primary/10 flex items-center justify-center font-bold">3</button>
          </div>
        </div>
      </section>
    </div>
  );
}
