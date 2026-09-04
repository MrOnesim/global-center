import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://global-business-center.vercel.app';

  const now = new Date();

  const staticPages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/a-propos', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/actualites', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/opportunites', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/prendre-rendez-vous', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/conditions-generales', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/politique-de-confidentialite', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const serviceSlugs = [
    'aides-menageres',
    'nounous',
    'cuisinieres',
    'chauffeurs-gardiens',
  ];

  const articleSlugs = [
    'tendances-recrutement-benin-2026',
    'bien-choisir-aide-menagere',
    'programme-nounous-certifiees',
  ];

  const opportunitySlugs = [
    'aide-menagere-villa-calavi',
    'nounou-bilingue',
    'chauffeur-prive',
  ];

  const staticEntries = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const serviceEntries = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const articleEntries = articleSlugs.map((slug) => ({
    url: `${base}/actualites/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const opportunityEntries = opportunitySlugs.map((slug) => ({
    url: `${base}/opportunites/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...articleEntries, ...opportunityEntries];
}
