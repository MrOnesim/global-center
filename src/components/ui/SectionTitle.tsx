import { type ElementType } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: ElementType;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  icon: Icon,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-14', centered && 'text-center')}>
      {subtitle && (
        <span
          className={cn(
            'text-xs font-bold tracking-[0.2em] uppercase mb-3 block',
            light ? 'text-accent' : 'text-primary-light'
          )}
        >
          {subtitle}
        </span>
      )}
      {Icon && (
        <div
          className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
            light ? 'bg-white/10 text-accent' : 'bg-primary-light/10 text-primary-light',
            centered && 'mx-auto'
          )}
        >
          <Icon size={24} />
        </div>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold leading-tight',
          light ? 'text-white' : 'text-primary'
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'h-1 w-16 mt-5 rounded-full',
          light ? 'bg-accent' : 'bg-primary-light',
          centered && 'mx-auto'
        )}
      />
      {description && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed max-w-2xl',
            light ? 'text-white/70' : 'text-text-main/60',
            centered && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
