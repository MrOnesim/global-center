'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
  photo?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-light p-10 md:p-14 rounded-3xl relative"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-serif shadow-lg">
              &ldquo;
            </div>

            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating ?? 5 }).map((_, i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p className="text-xl md:text-2xl italic text-primary/80 mb-10 leading-relaxed">
              &ldquo;{testimonials[current].content}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              {testimonials[current].photo ? (
                <div className="w-14 h-14 rounded-full overflow-hidden relative bg-primary/10">
                  <Image
                    src={testimonials[current].photo!}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-lg">
                  {testimonials[current].name[0]}
                </div>
              )}
              <div>
                <h4 className="font-bold text-primary text-lg">{testimonials[current].name}</h4>
                <p className="text-sm text-text-main/60">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                'w-2.5 h-2.5 rounded-full transition-all duration-300',
                current === i ? 'w-8 bg-primary' : 'bg-primary/15 hover:bg-primary/30'
              )}
              aria-label={`Témoignage ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-light border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            aria-label="Précédent"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-light border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            aria-label="Suivant"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
