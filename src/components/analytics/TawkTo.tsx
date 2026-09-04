'use client';

import { useEffect } from 'react';

const TAWK_PROPERTY_ID = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID || '';
const TAWK_WIDGET_ID = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || '';

export default function TawkTo() {
  useEffect(() => {
    if (!TAWK_PROPERTY_ID || !TAWK_WIDGET_ID) return;

    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode!.insertBefore(s1, s0);

    return () => {
      (window as unknown as Record<string, unknown>).Tawk_API = undefined;
      if (s1.parentNode) s1.parentNode.removeChild(s1);
    };
  }, []);

  return null;
}
