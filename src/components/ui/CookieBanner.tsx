'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Button from './Button';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gbc-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('gbc-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('gbc-cookie-consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-primary/5 p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 bg-primary-light/10 rounded-2xl flex items-center justify-center text-primary-light shrink-0">
                <Cookie size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-primary mb-2">Nous respectons votre vie privée</h3>
                <p className="text-sm text-text-main/60 leading-relaxed mb-4">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site.
                  En poursuivant votre navigation, vous acceptez l&apos;utilisation de ces cookies.
                  Consultez notre{' '}
                  <a href="/politique-de-confidentialite" className="underline font-semibold hover:text-primary-light transition-colors">
                    politique de confidentialité
                  </a>{' '}
                  pour en savoir plus.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="sm" onClick={accept}>
                    Tout accepter
                  </Button>
                  <Button variant="ghost" size="sm" onClick={decline}>
                    Tout refuser
                  </Button>
                </div>
              </div>
              <button
                onClick={decline}
                className="text-text-main/30 hover:text-primary transition-colors shrink-0 hidden md:block"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
