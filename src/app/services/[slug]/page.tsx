import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/ui/PageHeader';
import FadeIn from '@/components/ui/FadeIn';
import { detailedServices } from '@/lib/mock-data';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = detailedServices.find((s) => s.slug === slug) || detailedServices[0];

  const process = [
    { t: 'Premier contact', d: 'Échange exploratoire sur vos besoins.' },
    { t: 'Analyse', d: 'Étude approfondie de votre situation.' },
    { t: 'Sélection', d: 'Identification du profil le plus adapté.' },
    { t: 'Placement', d: 'Mise en place et suivi continu.' },
  ];

  return (
    <div className="pt-24 flex flex-col w-full">
      <PageHeader
        title={service.title}
        description={service.description}
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      >
        <Link
          href="/services"
          className="text-accent font-bold flex items-center gap-2 mt-6 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={18} /> Tous nos services
        </Link>
      </PageHeader>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Présentation du service</h2>
                <div className="text-text-main/70 mb-12 space-y-4">
                  {service.longDescription.split('\n').filter(Boolean).map((p, i) => (
                    <p key={i} className="leading-relaxed">{p.trim()}</p>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-primary mb-8">Bénéfices clés</h3>
                <div className="grid grid-cols-1 gap-4 mb-12">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-light rounded-2xl border border-primary/5">
                      <CheckCircle2 size={24} className="text-primary-light shrink-0" />
                      <span className="font-bold text-primary">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="sticky top-28">
                {/* Service Image */}
                <div className="aspect-video rounded-3xl overflow-hidden relative shadow-xl mb-8">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="bg-light p-10 rounded-[40px] border border-primary/5 shadow-inner">
                  <h3 className="text-2xl font-bold text-primary mb-8 text-center">Notre processus</h3>
                  <div className="space-y-8 relative">
                    <div className="absolute top-0 left-6 w-0.5 h-full bg-primary/10 -z-10" />
                    {process.map((p, i) => (
                      <div key={i} className="flex gap-6 items-start relative z-10">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0 shadow-lg">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-primary text-lg mb-1">{p.t}</h4>
                          <p className="text-text-main/60 text-sm">{p.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 space-y-4">
                    <Button variant="secondary" className="w-full py-5 rounded-2xl shadow-xl">
                      <Link href="/prendre-rendez-vous" className="flex items-center justify-center gap-2">
                        Prendre rendez-vous <ArrowRight size={20} />
                      </Link>
                    </Button>
                    <a
                      href={`https://wa.me/2290166727152?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par le service: ${service.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-[#25D366] text-white font-bold py-4 rounded-2xl hover:bg-[#20ba5a] transition-colors shadow-lg"
                    >
                      Contacter via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
