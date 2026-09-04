'use client';

import React, { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/ui/PageHeader';
import FadeIn from '@/components/ui/FadeIn';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { submitContactRequest } from '@/lib/actions';

export default function ContactPage() {
  const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactRequest(formData);

    setLoading(false);
    setStatus(result);
    if (result.success) {
      (e.target as HTMLFormElement).reset();
    }
  }

  return (
    <div className="pt-24 flex flex-col w-full">
      <PageHeader
        title="Contact"
        description="Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Contact' }]}
      />

      {/* Contact Content */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20">
            {/* Info */}
            <FadeIn direction="left">
              <div>
                <SectionTitle subtitle="Discutons ensemble" title="Nos coordonnées" />
                <div className="space-y-8 mt-12">
                  <div className="flex gap-6 p-8 bg-light rounded-3xl border border-primary/5 hover:border-primary-light transition-colors group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-primary">Notre Bureau</h4>
                      <p className="text-text-main/60 leading-relaxed">
                        Pharmacie SOS<br />
                        Abomey-Calavi, Bénin
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 p-8 bg-light rounded-3xl border border-primary/5 hover:border-primary-light transition-colors group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-primary">Téléphone & WhatsApp</h4>
                      <p className="text-text-main/60 leading-relaxed">
                        Tél : +229 01 66 72 71 52<br />
                        WhatsApp : +229 01 66 72 71 52
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 p-8 bg-light rounded-3xl border border-primary/5 hover:border-primary-light transition-colors group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-primary">Email</h4>
                      <p className="text-text-main/60 leading-relaxed">
                        agencegbc@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="right">
              <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-primary/5 relative">
                <div className="absolute top-0 right-10 w-20 h-2 bg-primary-light rounded-b-full" />
                <h3 className="text-3xl font-bold mb-8 text-primary">Envoyez-nous un message</h3>

                {status?.success && (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl mb-8 flex items-center gap-4">
                    <Send className="text-green-500" />
                    <p className="font-medium">Votre message a bien été envoyé. Nous vous répondrons bientôt.</p>
                  </div>
                )}

                {status?.error && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-2xl mb-8">
                    <p className="font-medium">{status.error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary/60 ml-1">Nom complet</label>
                      <input
                        name="name"
                        required
                        type="text"
                        placeholder="Jean Dupont"
                        className="w-full bg-light border border-primary/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-light focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary/60 ml-1">Email</label>
                      <input
                        name="email"
                        required
                        type="email"
                        placeholder="jean@exemple.com"
                        className="w-full bg-light border border-primary/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-light focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary/60 ml-1">Sujet</label>
                    <input
                      name="subject"
                      required
                      type="text"
                      placeholder="Comment pouvons-nous vous aider ?"
                      className="w-full bg-light border border-primary/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-light focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary/60 ml-1">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Votre message ici..."
                      className="w-full bg-light border border-primary/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-light focus:bg-white transition-all resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full gap-2 py-5 rounded-2xl"
                    disabled={loading}
                  >
                    {loading ? 'Envoi en cours...' : 'Envoyer le message'} <Send size={20} />
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <section           className="h-[300px] md:h-[500px] w-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7!2d2.38!3d6.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnMjQuMCJOIDDCsDIyJzQ4LjAiRQ!5e0!3m2!1sfr!2s!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation GBC Bénin - Pharmacie SOS, Abomey-Calavi"
        />
      </section>
    </div>
  );
}
