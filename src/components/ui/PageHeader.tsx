import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Breadcrumb from './Breadcrumb';

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  variant?: 'dark' | 'primary' | 'accent';
  children?: ReactNode;
  className?: string;
}

const variantStyles = {
  dark: 'bg-dark text-white',
  primary: 'bg-primary text-white',
  accent: 'bg-primary-light text-white',
};

export default function PageHeader({
  title,
  description,
  breadcrumb,
  variant = 'dark',
  children,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        'relative py-20 md:py-24 overflow-hidden',
        variantStyles[variant],
        className
      )}
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform origin-top-right opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{title}</h1>
        {description && (
          <p className="text-xl max-w-3xl leading-relaxed opacity-80">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
