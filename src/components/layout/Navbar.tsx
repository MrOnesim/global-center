'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/ui/Logo';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Services', href: '/services' },
  { name: 'Opportunités', href: '/opportunites' },
  { name: 'Actualités', href: '/actualites' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-12 h-12 transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
              <span className={cn("font-black text-xl leading-tight tracking-tighter", scrolled ? "text-primary" : "text-white")}>
                GLOBAL BUSINESS
              </span>
              <span className={cn("text-xs font-black tracking-[0.3em] -mt-1", scrolled ? "text-accent" : "text-accent")}>
                CENTER
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent',
                  pathname === link.href
                    ? 'text-accent'
                    : scrolled ? 'text-primary' : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/prendre-rendez-vous"
              className="bg-primary-light hover:bg-primary-light/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-primary-light/20"
            >
              Prendre rendez-vous
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} className={scrolled ? "text-primary" : "text-white"} /> : <Menu size={28} className={scrolled ? "text-primary" : "text-white"} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button
          className="absolute top-6 right-6 text-primary p-2"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-2xl font-semibold',
                pathname === link.href ? 'text-accent' : 'text-primary'
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/prendre-rendez-vous"
            className="bg-primary text-white text-center py-4 rounded-xl text-lg font-bold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </nav>
  );
}
