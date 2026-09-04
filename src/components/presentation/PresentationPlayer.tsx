'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PresentationProps {
  isOpen: boolean;
  onClose: () => void;
}

const slides = [
  {
    video: 'https://videos.pexels.com/video-files/20363056/20363056-uhd_3840_2160_30fps.mp4',
    title: 'Le Bénin.',
    subtitle: 'Un pays en mouvement. Des opportunités qui émergent.',
    duration: 8000,
  },
  {
    video: 'https://videos.pexels.com/video-files/35145696/14888608_3840_2160_24fps.mp4',
    title: 'Expertise & Confiance.',
    subtitle: 'Au cœur de cette dynamique, GBC Bénin accompagne ses clients et partenaires.',
    duration: 12000,
  },
  {
    video: 'https://videos.pexels.com/video-files/7661317/7661317-uhd_3840_2160_25fps.mp4',
    title: 'Nos Activités.',
    subtitle: 'Des solutions concrètes pour le recrutement et le placement de personnel.',
    duration: 15000,
  },
  {
    video: 'https://videos.pexels.com/video-files/4631134/4631134-uhd_4096_2160_25fps.mp4',
    title: 'Engagement.',
    subtitle: 'Expertise. Excellence. Proximité.',
    duration: 10000,
  },
  {
    video: 'https://videos.pexels.com/video-files/33862762/14371351_3840_2160_30fps.mp4',
    title: 'Vision.',
    subtitle: 'Construire aujourd&apos;hui les opportunités de demain.',
    duration: 15000,
  },
  {
    image: '/images/780342935_1469192418566601_5297882577522436624_n.jpg',
    title: 'GBC Bénin',
    subtitle: 'Votre partenaire pour aller plus loin.',
    duration: 8000,
  }
];

export default function PresentationPlayer({ isOpen, onClose }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(goToNext, slides[currentSlide].duration);
    return () => clearTimeout(timer);
  }, [isOpen, currentSlide, goToNext]);

  if (!isOpen) return null;

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-[110] text-white/50 hover:text-white transition-colors"
        aria-label="Fermer la présentation"
      >
        <X size={40} />
      </button>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-[110]">
        <motion.div
          key={currentSlide}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: slide.duration / 1000, ease: 'linear' }}
          className="h-full bg-accent"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="relative w-full h-full"
        >
          {slide.video ? (
            <video
              autoPlay
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          ) : slide.image ? (
            <Image
              src={slide.image}
              alt="GBC Presentation"
              fill
              className="object-cover"
            />
          ) : null}

          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="max-w-4xl"
            >
              <h2 className="text-accent font-bold text-sm tracking-[0.3em] uppercase mb-4">
                GBC Bénin
              </h2>
              <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-8 leading-tight italic">
                {slide.title}
              </h3>
              <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[110] flex gap-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-500',
              currentSlide === i ? 'w-8 bg-accent' : 'bg-white/20'
            )}
          />
        ))}
      </div>
    </div>
  );
}
