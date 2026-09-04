'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  PlayCircle,
  Shield,
  Users,
  Eye,
  Zap,
  Search,
  TrendingUp,
  Calendar,
  Home,
  UtensilsCrossed,
  Car,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import PresentationPlayer from '@/components/presentation/PresentationPlayer';
import { services, whyChooseUs, steps, testimonials, opportunities } from '@/lib/mock-data';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Users,
  UtensilsCrossed,
  Car,
  Shield,
  TrendingUp,
  Eye,
  Zap,
  Search,
};

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <PresentationPlayer isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 -skew-x-12 transform origin-top-right" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white/80 text-sm mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Votre partenaire de confiance au Bénin
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Trouvez le personnel <span className="text-accent italic">qu&apos;il vous faut</span>.
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
                Global Business Center recrute pour vous : Aides ménagères, Nounous, Cuisinières,
                Chauffeurs et Gardiens. Un service professionnel, humain et sécurisé.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="gap-2">
                  <Link href="/prendre-rendez-vous" className="flex items-center gap-2 w-full h-full">
                    Prendre rendez-vous <Calendar size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/services" className="w-full h-full flex items-center">
                    Découvrir nos services
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden lg:block absolute right-0 top-0 w-[50%] h-full opacity-40">
          <div className="w-full h-full relative">
            <Image
              src="/images/738854087_1430869272398916_5436018335802410271_n.jpg"
              alt="Global Business Center Recruitment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="aspect-square bg-light rounded-3xl overflow-hidden relative shadow-2xl">
                  <Image
                    src="/images/enock-gougjanou.jpeg"
                    alt="Enock Goudjanou - Fondateur GBC"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -top-8 -left-8 bg-accent text-white p-8 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-4xl font-bold mb-1">10+</div>
                  <div className="text-sm font-semibold opacity-80 uppercase tracking-wider">Ans d&apos;expérience</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <SectionTitle subtitle="Mot du Fondateur" title="Global Business Center" />
                <p className="text-text-main/70 text-lg leading-relaxed mb-8 italic">
                  &ldquo;Notre mission est d&apos;apporter de la valeur à chaque foyer et entreprise en
                  recrutant pour vous le personnel le plus qualifié et fiable.&rdquo;
                </p>
                <p className="text-text-main/70 text-lg leading-relaxed mb-8">
                  Sous l&apos;impulsion de son fondateur <strong>Enock Goudjanou</strong>, Global Business
                  Center s&apos;est imposé depuis près de 10 ans comme le leader de l&apos;aide à
                  l&apos;emploi à <strong>Abomey-Calavi</strong> et partout au Bénin.
                </p>
                <Button variant="primary">
                  <Link href="/a-propos">Découvrir le parcours d&apos;Enock Goudjanou</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <SectionTitle
              subtitle="Nos domaines d'action"
              title="Des solutions adaptées à vos besoins"
              icon={Search}
              centered
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-primary/5 h-full">
                    <div className="w-14 h-14 bg-light rounded-xl flex items-center justify-center text-primary-light mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
                    <p className="text-text-main/60 mb-6">{service.description}</p>
                    <div className="flex items-center gap-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-primary-light font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                      >
                        En savoir plus <ChevronRight size={18} />
                      </Link>
                      <a
                        href={`https://wa.me/2290166727152?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par le service: ${service.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] text-sm font-bold inline-flex items-center gap-1 hover:underline"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <SectionTitle
                  subtitle="Notre différence"
                  title="Pourquoi choisir GBC Bénin ?"
                  light
                />
                <p className="text-white/70 text-lg mb-12">
                  Nous nous distinguons par une approche centrée sur l&apos;humain et une compréhension
                  profonde des réalités du terrain au Bénin.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {whyChooseUs.map((item, index) => {
                    const Icon = iconMap[item.icon] || TrendingUp;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-accent">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                          <p className="text-white/60 text-sm">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <PlayCircle className="text-accent" /> Vidéo institutionnelle
                </h3>
                <div
                  className="aspect-video bg-dark/50 rounded-2xl overflow-hidden relative shadow-2xl border border-white/10 group cursor-pointer"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <Image
                    src="/images/787159823_1474460841373092_3605669980762108495_n.jpg"
                    alt="Vidéo institutionnelle GBC"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform">
                      <PlayCircle size={40} fill="currentColor" className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                    <p className="text-white text-sm font-bold">Lancer la présentation cinématique</p>
                  </div>
                </div>
                <p className="mt-4 text-white/60 text-sm text-center italic">
                  Découvrez comment GBC transforme le recrutement au Bénin.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <SectionTitle
              subtitle="Méthodologie"
              title="Comment ça fonctionne ?"
              icon={Search}
              centered
            />
          </FadeIn>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-light -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {steps.map((step, index) => (
                <FadeIn key={index} delay={index * 0.15}>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-light text-primary font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg group-hover:bg-primary group-hover:text-white transition-all">
                      {step.step}
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-primary">{step.title}</h4>
                    <p className="text-text-main/60">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <SectionTitle
                subtitle="Opportunités"
                title="Nos dernières recherches"
                icon={TrendingUp}
              />
              <Button variant="outline">
                <Link href="/opportunites" className="flex items-center gap-2">
                  Toutes les opportunités <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opp, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 flex flex-col sm:flex-row group hover:shadow-xl transition-all">
                  <div className="sm:w-1/3 aspect-[4/3] sm:aspect-auto bg-primary/10 flex items-center justify-center text-primary/20 font-bold text-4xl">
                    {opp.category[0]}
                  </div>
                  <div className="p-8 sm:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary-light bg-primary-light/10 px-3 py-1 rounded-full">
                          {opp.category}
                        </span>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded border text-green-600 border-green-600">
                          {opp.status}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-primary group-hover:text-primary-light transition-colors">
                        {opp.title}
                      </h3>
                      <p className="text-text-main/60 text-sm flex items-center gap-1 mb-6">
                        <Search size={14} /> {opp.location}
                      </p>
                    </div>
                    <Link
                      href={`/opportunites/${opp.slug}`}
                      className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Découvrir les détails <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 bg-primary-light text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <FadeIn delay={0}>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter target={150} suffix="+" />
                </div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Clients satisfaits</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter target={500} suffix="+" />
                </div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Personnells placés</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter target={10} suffix="+" />
                </div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Ans d&apos;expérience</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter target={25} suffix="+" />
                </div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Villes couvertes</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <SectionTitle
              subtitle="Témoignages"
              title="Ils nous font confiance"
              icon={Users}
              centered
            />
          </FadeIn>
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-light via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Vous avez un projet ?</h2>
              <p className="text-xl text-white/70 mb-12">
                Échangeons avec notre équipe pour explorer comment nous pouvons vous accompagner vers le
                succès.
              </p>
              <Button variant="secondary" size="lg" className="rounded-full px-12 py-5 text-xl">
                <Link href="/prendre-rendez-vous">Prendre rendez-vous</Link>
              </Button>
              <a
                href="https://wa.me/2290166727152?text=Bonjour%2C%20j%27ai%20un%20projet%20de%20recrutement%20et%20souhaite%20en%20discuter."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block ml-4 bg-[#25D366] text-white font-bold rounded-full px-12 py-5 text-xl hover:bg-[#20ba5a] transition-colors shadow-lg"
              >
                WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
