'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/ui/PageHeader';
import FadeIn from '@/components/ui/FadeIn';
import { CheckCircle2, Send } from 'lucide-react';
import { submitAppointmentRequest } from '@/lib/actions';

export default function AppointmentPage() {
  const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitAppointmentRequest(formData);

    setLoading(false);
    setStatus(result);
    if (result.success) {
      (e.target as HTMLFormElement).reset();
    }
  }

  return (
    <div className="pt-24 flex flex-col w-full">
      <PageHeader
        title="Prendre rendez-vous"
        description="Choisissez le moment qui vous convient pour échanger avec l'un de nos conseillers."
        variant="accent"
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Rendez-vous' }]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-white rounded-[40px] shadow-2xl border border-primary/5 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Left Side Info */}
                  <div className="lg:col-span-2 bg-primary p-12 text-white">
                    <h3 className="text-2xl font-bold mb-8">Pourquoi nous rencontrer ?</h3>
                    <ul className="space-y-6">
                      <li className="flex gap-3">
                        <CheckCircle2 size={20} className="text-accent shrink-0" />
                        <span className="text-white/80 text-sm">Diagnostic gratuit de vos besoins en personnel.</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 size={20} className="text-accent shrink-0" />
                        <span className="text-white/80 text-sm">Accès à notre vivier de candidats qualifiés.</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 size={20} className="text-accent shrink-0" />
                        <span className="text-white/80 text-sm">Conseils personnalisés pour votre recherche.</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 size={20} className="text-accent shrink-0" />
                        <span className="text-white/80 text-sm">Premier rendez-vous totalement gratuit.</span>
                      </li>
                    </ul>

                    <div className="mt-20 pt-10 border-t border-white/10">
                      <p className="text-sm italic text-white/60">
                        &ldquo;Notre approche est fondée sur l&apos;écoute et la compréhension précise de
                        vos attentes.&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Right Side Form */}
                  <div className="lg:col-span-3 p-12">
                    {status?.success && (
                      <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl mb-8 flex items-center gap-4">
                        <Send className="text-green-500" />
                        <p className="font-medium">Votre demande a bien été enregistrée. Notre équipe reviendra vers vous.</p>
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
                          <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Nom complet</label>
                          <input
                            name="name"
                            required
                            type="text"
                            placeholder="Jean Dupont"
                            className="w-full bg-light border border-primary/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-light transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Téléphone</label>
                          <input
                            name="phone"
                            required
                            type="tel"
                            placeholder="+229 01 66 72 71 52"
                            className="w-full bg-light border border-primary/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-light transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Email</label>
                        <input
                          name="email"
                          required
                          type="email"
                          placeholder="jean@exemple.com"
                          className="w-full bg-light border border-primary/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-light transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Type de service recherché</label>
                        <select name="type" className="w-full bg-light border border-primary/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-light transition-all">
                          <option value="aide-menagere">Aide ménagère</option>
                          <option value="nounou">Nounou / Garde d&apos;enfants</option>
                          <option value="cuisiniere">Cuisinière</option>
                          <option value="chauffeur">Chauffeur</option>
                          <option value="gardien">Gardien</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Date souhaitée</label>
                          <input
                            name="date"
                            required
                            type="date"
                            className="w-full bg-light border border-primary/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-light transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Heure souhaitée</label>
                          <input
                            name="time"
                            required
                            type="time"
                            className="w-full bg-light border border-primary/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-light transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Message (Facultatif)</label>
                        <textarea
                          name="message"
                          rows={3}
                          placeholder="Précisez votre besoin..."
                          className="w-full bg-light border border-primary/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-light transition-all resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="secondary"
                        size="lg"
                        className="w-full rounded-xl py-4 font-bold shadow-lg shadow-primary-light/20"
                        disabled={loading}
                      >
                        {loading ? 'Traitement...' : 'Demander un rendez-vous'}
                      </Button>

                      <p className="text-[10px] text-center text-text-main/40 px-4">
                        En soumettant ce formulaire, vous acceptez d&apos;être recontacté par l&apos;équipe de
                        GBC Bénin. Vos données sont protégées.
                      </p>
                    </form>
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
