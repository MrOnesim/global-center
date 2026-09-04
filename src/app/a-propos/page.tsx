import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/ui/PageHeader';
import FadeIn from '@/components/ui/FadeIn';
import { Target, Eye, ShieldCheck, Zap, Users, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'À propos',
  description:
    'Découvrez l\'histoire, la mission et les valeurs de Global Business Center Bénin, leader du placement de personnel qualifié.',
};

const values = [
  { title: 'Intégrité', description: 'Nous agissons avec honnêteté et respectons les normes éthiques les plus élevées.', icon: ShieldCheck },
  { title: 'Professionnalisme', description: 'Une rigueur exemplaire dans chacune de nos interventions.', icon: Award },
  { title: 'Transparence', description: 'Une communication ouverte et honnête avec toutes nos parties prenantes.', icon: Eye },
  { title: 'Innovation', description: 'Nous cherchons constamment à améliorer nos solutions et approches.', icon: Zap },
  { title: 'Proximité', description: 'Un accompagnement humain au plus proche des réalités de nos clients.', icon: Users },
];

export default function AboutPage() {
  return (
    <div className="pt-24 flex flex-col w-full">
      <PageHeader
        title="À propos de GBC Bénin"
        description="Une institution dédiée à l'excellence et au développement économique durable du Bénin."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'À propos' }]}
      />

      {/* History */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <SectionTitle subtitle="Notre histoire" title="Un engagement ancré dans le temps" />
                <div className="space-y-6 text-text-main/70 text-lg leading-relaxed">
                  <p>
                    Fondé par Enock Goudjanou, Global Business Center est né d&apos;une volonté de
                    professionnaliser le secteur de l&apos;aide à domicile et du placement de personnel
                    au Bénin.
                  </p>
                  <p>
                    Basés à Abomey-Calavi, nous opérons depuis près de 10 ans avec une expertise unique
                    dans le recrutement et le placement de personnel qualifié. Notre approche allie
                    rigueur professionnelle et compréhension du terrain pour garantir la satisfaction
                    totale de nos clients.
                  </p>
                  <p>
                    Aujourd&apos;hui, nous sommes fiers d&apos;avoir accompagné plus de 150 familles et
                    entreprises à travers tout le Bénin.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-video bg-light rounded-3xl overflow-hidden relative shadow-2xl">
                  <Image
                    src="/images/775281795_1468505791968597_8362305676420068437_n.jpg"
                    alt="Histoire de GBC Bénin"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-3xl font-bold mb-1">150+</div>
                  <div className="text-xs font-semibold opacity-80 uppercase tracking-wider">Familles accompagnées</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <div className="bg-white p-12 rounded-3xl shadow-sm border border-primary/5 h-full">
                <div className="w-16 h-16 bg-primary-light/10 text-primary-light rounded-2xl flex items-center justify-center mb-8">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Notre Mission</h2>
                <p className="text-text-main/70 text-lg leading-relaxed">
                  Offrir à chaque foyer et entreprise du Bénin un accès à un personnel qualifié, fiable
                  et professionnel, contribuant ainsi au bien-être et à la productivité de nos clients.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="bg-white p-12 rounded-3xl shadow-sm border border-primary/5 h-full">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8">
                  <Eye size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Notre Vision</h2>
                <p className="text-text-main/70 text-lg leading-relaxed">
                  Être la référence incontournable en matière de recrutement et de placement de personnel
                  domestique et professionnel au Bénin et en Afrique de l&apos;Ouest.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <SectionTitle subtitle="Ce qui nous guide" title="Nos Valeurs" icon={ShieldCheck} centered />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-light rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <v.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{v.title}</h3>
                  <p className="text-text-main/60 text-sm leading-relaxed">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <SectionTitle subtitle="L'équipe" title="Nos Collaborateurs" icon={Users} centered />
          </FadeIn>
          <FadeIn>
            <div className="max-w-lg mx-auto">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm group">
                <div className="aspect-[4/5] bg-primary/5 overflow-hidden relative">
                  <Image
                    src="/images/enock-gougjanou.jpeg"
                    alt="Enock Goudjanou"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 384px"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-1">Enock Goudjanou</h3>
                  <p className="text-primary-light font-semibold mb-4">Fondateur & Directeur Général</p>
                  <p className="text-text-main/60 text-sm leading-relaxed">
                    Entrepreneur et expert en gestion des ressources humaines, spécialisé dans le
                    recrutement et le placement de personnel au Bénin. Passionné par l&apos;excellence
                    et la satisfaction client.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary-light text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-8">Rejoignez l&apos;aventure GBC Bénin</h2>
            <Button variant="primary" size="lg" className="bg-primary hover:bg-primary/90 text-white border-none shadow-xl">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
