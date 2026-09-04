import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Logo className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-black text-xl leading-tight tracking-tighter text-white">
                  GLOBAL BUSINESS
                </span>
                <span className="text-xs font-black tracking-[0.3em] -mt-1 text-accent">
                  CENTER
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Global Business Center : Votre satisfaction, notre priorité. Nous recrutons pour vous le
              personnel qu&apos;il vous faut, en toute confiance.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/gbcbeninofficiel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-light transition-colors text-white" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="https://www.tiktok.com/@managergoudjanou" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-light transition-colors text-white" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17v-3.45a4.85 4.85 0 01-5.58-2.78V6.69h5.58z" /></svg>
              </a>
              <a href="https://bit.ly/3KlvoVm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-light transition-colors text-white" aria-label="Linktree">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.54-.44.67-.89.42l-2.46-1.81-1.19 1.14c-.13.13-.24.24-.49.24l.18-2.5 4.56-4.12c.2-.18-.04-.27-.31-.1l-5.63 3.55-2.42-.76c-.53-.16-.54-.53.11-.78l9.46-3.65c.44-.16.83.1.69.77z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/a-propos" className="text-white/60 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-white transition-colors">Nos services</Link></li>
              <li><Link href="/opportunites" className="text-white/60 hover:text-white transition-colors">Opportunités</Link></li>
              <li><Link href="/actualites" className="text-white/60 hover:text-white transition-colors">Actualités</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-white/60">
                <MapPin size={20} className="text-primary-light shrink-0" />
                <span>Pharmacie SOS, Abomey-Calavi</span>
              </li>
              <li className="flex gap-3 text-white/60">
                <Phone size={20} className="text-primary-light shrink-0" />
                <span>+229 01 66 72 71 52</span>
              </li>
              <li className="flex gap-3 text-white/60">
                <Mail size={20} className="text-primary-light shrink-0" />
                <span>agencegbc@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">
              Restez informé de nos dernières actualités et opportunités.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary-light transition-colors"
              />
              <button className="bg-primary text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} GBC Bénin. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link href="/conditions-generales" className="hover:text-white transition-colors">CGU</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
