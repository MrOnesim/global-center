import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/ui/FadeIn';
import { MapPin, Tag, Calendar, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const opportunities: Record<string, {
  title: string;
  category: string;
  location: string;
  status: string;
  description: string;
  amount: string;
  duration: string;
  image: string;
  content: string;
  benefits: string[];
}> = {
  'aide-menagere-premium': {
    title: 'Aide Ménagère Premium',
    category: 'Placement',
    location: 'Cotonou',
    status: 'Ouvert',
    description: 'Service de placement d\'aide ménagère haut de gamme, formée aux standards internationaux.',
    amount: 'Sur devis',
    duration: 'Continue',
    image: '/images/781525823_1471975301621646_3581372018167280653_n.jpg',
    content: `Notre service de placement d'aides ménagères premium garantit un personnel hautement qualifié, vérifié et formé.\n\nChaque candidate passe par un processus de sélection rigoureux comprenant vérification des antécédents, test de compétences et formation préalable.\n\nNous assurons un suivi continu et un remplacement rapide en cas de besoin.`,
    benefits: ['Personnel vérifié et formé', 'Suivi continu', 'Remplacement garanti', 'Assurance incluse'],
  },
  'nounou-qualifiee-bilingue': {
    title: 'Nounou Qualifiée Bilingue',
    category: 'Recrutement',
    location: 'Abomey-Calavi',
    status: 'Ouvert',
    description: 'Nounou bilingue formée à la garde d\'enfants et au développement précoce.',
    amount: 'Sur devis',
    duration: 'Continue',
    image: '/images/783948699_1470115358474307_924674279728262957_n.jpg',
    content: `Nos nounous bilingues sont formées aux techniques modernes de garde d'enfants et maîtrisent le français ainsi qu'une langue locale.\n\nFormation certifiée en sécurité infantile, premiers secours et développement de l'enfant.\n\nIdéal pour les familles internationales ou bilingues au Bénin.`,
    benefits: ['Certification officielle', 'Bilingue français/local', 'Formation continue', 'Disponible 24h/24'],
  },
  'cuisiniere-professionnelle': {
    title: 'Cuisinière Professionnelle',
    category: 'Recrutement',
    location: 'Cotonou',
    status: 'Ouvert',
    description: 'Cuisinière qualifiée spécialisée en cuisine béninoise et internationale.',
    amount: 'Sur devis',
    duration: 'Continue',
    image: '/images/784428535_1472848434867666_4095911101956036479_n.jpg',
    content: `Nos cuisinières professionnelles maîtrisent un large éventail de cuisines : béninoise, ouest-africaine, française et internationale.\n\nFormation en hygiène alimentaire et nutrition équilibrée.\n\nParfaites pour les familles, les événements et le personnel de maison.`,
    benefits: ['Hygiène certifiée', 'Cuisine variée', 'Nutrition équilibrée', 'Événements'],
  },
  'chauffeur-prive': {
    title: 'Chauffeur Privé',
    category: 'Placement',
    location: 'Cotonou',
    status: 'Ouvert',
    description: 'Chauffeur privé expérimenté, connaisseur des routes du Bénin.',
    amount: 'Sur devis',
    duration: 'Continue',
    image: '/images/786266528_1475360754616434_4577274913970703757_n.jpg',
    content: `Nos chauffeurs privés sont expérimentés, ponctuels et connaissent parfaitement le réseau routier du Bénin.\n\nVérification des antécédents, permis valide et formation en sécurité routière.\n\nDisponible pour vos déplacements professionnels et personnels.`,
    benefits: ['Expérience vérifiée', 'Ponctualité', 'Sécurité garantie', 'Connaissance du terrain'],
  },
  'gardiennage-securite': {
    title: 'Gardiennage & Sécurité',
    category: 'Placement',
    location: 'Abomey-Calavi',
    status: 'Ouvert',
    description: 'Agent de gardiennage formé et certifié pour la sécurité de votre domicile.',
    amount: 'Sur devis',
    duration: 'Continue',
    image: '/images/788104610_1473685354783974_697891788509796637_n.jpg',
    content: `Nos agents de gardiennage sont formés aux techniques de sécurité et de surveillance.\n\nCertification en sécurité privée, gestion des urgences et maîtrise des systèmes d'alarme.\n\nPour la tranquillité de votre domicile et de votre famille.`,
    benefits: ['Certification sécurité', '24h/24', 'Intervention rapide', 'Surveillance active'],
  },
};

export default async function OpportunityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const opp = opportunities[slug];

  if (!opp) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-primary mb-4">Opportunité introuvable</h1>
        <p className="text-text-main/60 mb-8">Cette opportunité n&apos;existe pas ou a été supprimée.</p>
        <Link href="/opportunites">
          <Button variant="secondary">Retour aux opportunités</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 flex flex-col w-full">
      <div className="bg-light py-4 border-b border-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/opportunites" className="text-primary font-bold flex items-center gap-2 hover:text-primary-light transition-colors">
            <ArrowLeft size={18} /> Retour aux opportunités
          </Link>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-light bg-primary-light/10 px-3 py-1 rounded-full">
                    {opp.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-green-600 text-green-600">
                    {opp.status}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">{opp.title}</h1>

                <div className="aspect-video bg-light rounded-3xl mb-6 md:mb-12 overflow-hidden relative shadow-xl">
                  <Image
                    src={opp.image}
                    alt={opp.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                </div>

                <div className="prose prose-lg max-w-none text-text-main/70 mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-4 italic underline decoration-accent decoration-4 underline-offset-8">Présentation</h3>
                  <p className="whitespace-pre-line leading-relaxed">{opp.content}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {opp.benefits.map((b, i) => (
                    <div key={i} className="flex gap-3 bg-light p-6 rounded-2xl border border-primary/5 shadow-sm">
                      <CheckCircle2 size={24} className="text-primary-light shrink-0" />
                      <span className="font-bold text-primary">{b}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <aside>
              <div className="sticky top-28 space-y-8">
                <div className="bg-primary text-white p-6 md:p-8 rounded-[32px] shadow-xl relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  <h3 className="text-xl font-bold mb-8 border-b border-white/10 pb-4">Informations clés</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-accent">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Localisation</div>
                        <div className="font-bold">{opp.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-accent">
                        <Tag size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Tarif</div>
                        <div className="font-bold">{opp.amount}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-accent">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Durée</div>
                        <div className="font-bold">{opp.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-2xl border border-primary/5">
                  <h3 className="text-xl font-bold mb-6 text-primary">Je suis intéressé</h3>
                  <form className="space-y-4">
                    <input type="text" placeholder="Nom complet" className="w-full bg-light border border-primary/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light transition-all" />
                    <input type="email" placeholder="Email" className="w-full bg-light border border-primary/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light transition-all" />
                    <input type="tel" placeholder="Téléphone" className="w-full bg-light border border-primary/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light transition-all" />
                    <textarea rows={3} placeholder="Message ou questions..." className="w-full bg-light border border-primary/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light transition-all resize-none"></textarea>
                    <Button variant="secondary" className="w-full gap-2 py-4 rounded-xl shadow-lg">
                      Envoyer ma demande <Send size={18} />
                    </Button>
                  </form>
                  <p className="text-[10px] text-center text-text-main/60 mt-4 leading-relaxed">
                    Un conseiller GBC vous recontactera sous 48h pour discuter des modalités.
                  </p>
                </div>

                <a
                  href={`https://wa.me/2290166727152?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par: ${opp.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20ba5a] transition-colors shadow-lg"
                >
                  Contacter via WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
