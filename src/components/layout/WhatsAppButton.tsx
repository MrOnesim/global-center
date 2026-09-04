'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="bg-white text-primary px-5 py-3 rounded-2xl shadow-xl text-sm font-semibold flex items-center gap-2 max-w-[200px]"
          >
            <span className="flex-1">Besoin d&apos;aide ? Discutons !</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDismissed(true);
              }}
              className="text-text-main/40 hover:text-primary transition-colors shrink-0"
              aria-label="Fermer"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/2290166727152?text=Bonjour%2C%20j%27ai%20besoin%20d%27informations%20sur%20vos%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactez-nous sur WhatsApp"
        className="relative bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
}
