import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.gbcbenin.com';

  const staticPages = [
    '',
    '/a-propos',
    '/services',
    '/actualites',
    '/opportunites',
    '/faq',
    '/contact',
    '/prendre-rendez-vous',
    '/mentions-legales',
    '/conditions-generales',
    '/politique-de-confidentialite',
  ];

  const services = [
    'aides-menageres',
    'nounous',
    'cuisinieres',
    'chauffeurs',
    'gardiens',
  ];

  const articles = [
    'tendances-recrutement-benin-2026',
    'bien-choisir-aide-menagere',
    'programme-nounous-certifiees',
  ];

  const staticEntries = staticPages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }));

  const serviceEntries = services.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const articleEntries = articles.map((slug) => ({
    url: `${base}/actualites/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...articleEntries];
}
