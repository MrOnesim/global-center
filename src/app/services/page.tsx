import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/ui/PageHeader';
import FadeIn from '@/components/ui/FadeIn';
import { CheckCircle2, ArrowRight, Users } from 'lucide-react';
import Link from 'next/link';
import { detailedServices } from '@/lib/mock-data';

export const metadata = {
  title: 'Services',
  description:
    'Découvrez nos services de placement de personnel qualifié au Bénin : aides ménagères, nounous, cuisinières, chauffeurs et gardiens.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 flex flex-col w-full">
      <PageHeader
        title="Nos Services"
        description="Des professionnels rigoureusement sélectionnés pour répondre à vos besoins quotidiens. Un service de qualité, en toute confiance."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Services' }]}
      />

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-24">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <FadeIn direction={index % 2 === 0 ? 'left' : 'right'}>
                  <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-14 bg-primary/5 text-primary-light rounded-2xl flex items-center justify-center mb-8">
                      <service.icon size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{service.title}</h2>
                    <p className="text-text-main/70 text-lg leading-relaxed mb-8">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3 text-text-main/80">
                          <CheckCircle2 size={18} className="text-primary-light shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="primary">
                      <Link href="/prendre-rendez-vous" className="flex items-center gap-2">
                        Parler à un conseiller <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </div>
                </FadeIn>
                <FadeIn direction={index % 2 === 0 ? 'right' : 'left'}>
                  <div
                    className={`aspect-video bg-light rounded-3xl overflow-hidden relative shadow-xl ${
                      index % 2 !== 0 ? 'lg:order-1' : ''
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <FadeIn>
            <SectionTitle
              title="Besoin d'un service sur-mesure ?"
              subtitle="Accompagnement spécifique"
              icon={Users}
              centered
            />
            <p className="text-text-main/70 text-lg mb-10">
              Votre situation est unique. Nous pouvons élaborer une approche personnalisée qui répond
              précisément à vos objectifs et contraintes.
            </p>
            <Button variant="secondary" size="lg">
              <Link href="/contact">Demander une étude personnalisée</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
