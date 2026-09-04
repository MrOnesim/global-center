import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-xl">
        <Logo className="w-24 h-24 mx-auto mb-8 opacity-20" />
        <h1 className="text-9xl font-bold text-primary/10 mb-8 leading-none mt-[-4rem]">404</h1>
        <h2 className="text-4xl font-bold text-primary mb-4 italic">Oups ! Page introuvable.</h2>
        <p className="text-text-main/60 mb-10 text-lg">
          La page que vous recherchez semble avoir été déplacée ou n&apos;existe plus.
          Mais ne vous inquiétez pas, notre équipe est là pour vous guider.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
