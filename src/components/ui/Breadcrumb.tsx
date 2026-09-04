import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-2 text-sm mb-8', className)}>
      <Link href="/" className="flex items-center gap-1 text-white/50 hover:text-white transition-colors">
        <Home size={14} />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <ChevronRight size={14} className="text-white/30" />
          {item.href ? (
            <Link href={item.href} className="text-white/50 hover:text-white transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white/90 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
