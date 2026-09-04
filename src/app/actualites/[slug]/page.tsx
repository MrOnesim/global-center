import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Article',
  description: 'Découvrez nos articles et conseils sur le recrutement de personnel au Bénin.',
};

const articles: Record<string, {
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
}> = {
  'tendances-recrutement-benin-2026': {
    title: 'Les nouvelles tendances du recrutement au Bénin en 2026',
    date: '15 Mai 2026',
    author: 'GBC Team',
    category: 'Recrutement',
    image: '/images/787159823_1474460841373092_3605669980762108495_n.jpg',
    content: `Le marché du recrutement au Bénin connaît une transformation accélérée en 2026. La demande en personnel qualifié explose dans plusieurs secteurs clés.\n\nLes secteurs en forte croissance incluent le personnel domestique, la restauration et l'hôtellerie. Les familles béninoises de plus en plus nombreuses recherchent des aides ménagères, nounous et cuisinières formées aux standards internationaux.\n\nGBC Bénin se positionne comme leader dans ce secteur en offreant un processus de recrutement rigoureux : vérification des antécédents, formation préalable et suivi continu de chaque collaborateur placé.\n\nNotre conseil : anticipez vos besoins en recrutement et faites appel à une agence spécialisée pour garantir la qualité et la fiabilité du personnel recruté.`,
  },
  'bien-choisir-aide-menagere': {
    title: 'Comment bien choisir son aide ménagère ?',
    date: '02 Mai 2026',
    author: 'Expert GBC',
    category: 'Conseils',
    image: '/images/788104610_1473685354783974_697891788509796637_n.jpg',
    content: `Choisir la bonne aide ménagère est une décision importante qui impacte votre quotidien. Voici nos conseils d'experts pour faire le bon choix.\n\n**1. Définissez vos besoins**\nAvant toute recherche, listez précisément les tâches que vous attendez : ménage, cuisine, repassage, garde d'enfants. Plus votre cahier des charges est clair, plus le recrutement sera efficace.\n\n**2. Vérifiez les références**\nUne agence sérieuse comme GBC Bénin vérifie systématiquement les antécédents et les références de chaque candidat. Ne négligez jamais cette étape.\n\n**3. Testez pendant la période d'essai**\nAccordez-vous une période d'essai de 2 à 4 semaines pour évaluer la compatibility et la qualité du travail.\n\n**4. Communiquez clairement**\nÉtablissez dès le départ un cadre clair avec les horaires, les attentes et les règles de la maison.`,
  },
  'programme-nounous-certifiees': {
    title: 'GBC Bénin lance son programme de nounous certifiées',
    date: '20 Avril 2026',
    author: 'Direction GBC',
    category: 'Actualité',
    image: '/images/783948699_1470115358474307_924674279728262957_n.jpg',
    content: `GBC Bénin est fier d'annoncer le lancement de son programme de formation et certification des nounous, un premier au Bénin.\n\nCe programme comprend :\n- Formation en sécurité et premiers secours\n- Éducation positive et développement de l'enfant\n- Nutrition et alimentation saine\n- Hygiène et prévention des maladies\n- Gestion des urgences\n\nChaque nounou certifiée par GBC Bénin reçoit un diplôme reconnu et bénéficie d'un suivi continu tout au long de sa mission.\n\nLes familles peuvent désormais choisir en toute confiance une nounou formée aux meilleurs standards internationaux.`,
  },
};

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-primary mb-4">Article introuvable</h1>
        <p className="text-text-main/60 mb-8">Cet article n&apos;existe pas ou a été supprimé.</p>
        <Link href="/actualites">
          <Button variant="secondary">Retour aux actualités</Button>
        </Link>
      </div>
    );
  }

  const paragraphs = article.content.split('\n\n');

  return (
    <div className="pt-24 flex flex-col w-full">
      <div className="bg-light py-4 border-b border-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/actualites" className="text-primary font-bold flex items-center gap-2 hover:text-primary-light transition-colors">
            <ArrowLeft size={18} /> Retour aux actualités
          </Link>
        </div>
      </div>

      <article className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-light bg-primary-light/10 px-3 py-1 rounded-full flex items-center gap-1">
                <Tag size={12} /> {article.category}
              </span>
              <span className="text-sm text-text-main/50 flex items-center gap-1">
                <Calendar size={14} /> {article.date}
              </span>
              <span className="text-sm text-text-main/50 flex items-center gap-1">
                <User size={14} /> {article.author}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-10 leading-tight">{article.title}</h1>

            <div className="aspect-video bg-light rounded-3xl mb-12 overflow-hidden relative shadow-xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none text-text-main/70">
              {paragraphs.map((p, i) => (
                <p key={i} className="mb-6 leading-relaxed text-lg whitespace-pre-line">{p}</p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-primary/10">
              <Link href="/actualites">
                <Button variant="secondary" className="gap-2">
                  <ArrowLeft size={18} /> Retour à toutes les actualités
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </article>
    </div>
  );
}
