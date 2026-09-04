import { pool } from './index.js';

const categories = [
  { name: 'Ménage', slug: 'menage', type: 'service' },
  { name: 'Garde d\'enfants', slug: 'garde-enfants', type: 'service' },
  { name: 'Cuisine', slug: 'cuisine', type: 'service' },
  { name: 'Transport & Sécurité', slug: 'transport-securite', type: 'service' },
  { name: 'Placement', slug: 'placement', type: 'opportunity' },
  { name: 'Recrutement', slug: 'recrutement', type: 'opportunity' },
  { name: 'Recrutement', slug: 'recrutement-article', type: 'article' },
  { name: 'Conseils', slug: 'conseils', type: 'article' },
  { name: 'Actualité', slug: 'actualite', type: 'article' },
];

const services = [
  {
    title: 'Aides Ménagères',
    slug: 'aides-menageres',
    description: 'Un service professionnel d\'entretien ménager adapté à vos besoins quotidiens.',
    content: 'Notre service d\'aides ménagères est conçu pour vous offrir un cadre de vie impeccable. Chaque professionnel est sélectionné après un processus de recrutement strict incluant vérification des antécédents, entretien personnel et formation pratique.',
    icon: 'Home',
    categorySlug: 'menage',
    order: 1,
  },
  {
    title: 'Nounous & Garde d\'enfants',
    slug: 'nounous',
    description: 'Des nounous dévouées et qualifiées pour veiller sur vos enfants en toute confiance.',
    content: 'La garde d\'enfants est un acte de confiance. Chez GBC Bénin, nous prenons cette responsabilité très au sérieux. Nos nounous ne sont pas seulement des gardeuses d\'enfants, elles sont des éducatrices attentionnées qui favorisent le développement de votre enfant.',
    icon: 'Users',
    categorySlug: 'garde-enfants',
    order: 2,
  },
  {
    title: 'Cuisinières',
    slug: 'cuisinieres',
    description: 'Des professionnelles de la cuisine pour vos repas quotidiens ou événements.',
    content: 'Nos cuisinières maîtrisent une variété de cuisines : béninoise, ouest-africaine, française et internationale. Que ce soit pour vos repas quotidiens, un dîner de fête ou un événement professionnel, elles sauront satisfaire toutes les palais.',
    icon: 'UtensilsCrossed',
    categorySlug: 'cuisine',
    order: 3,
  },
  {
    title: 'Chauffeurs & Gardiens',
    slug: 'chauffeurs-gardiens',
    description: 'Sécurité et mobilité assurées par des chauffeurs et gardiens rigoureusement sélectionnés.',
    content: 'La sécurité de votre famille et de vos biens est primordiale. Nos chauffeurs et gardiens sont recrutés pour leur fiabilité, leur discrétion et leur sens du devoir.',
    icon: 'Car',
    categorySlug: 'transport-securite',
    order: 4,
  },
];

const articles = [
  {
    title: 'Les nouvelles tendances du recrutement au Bénin en 2026',
    slug: 'tendances-recrutement-benin-2026',
    excerpt: 'Analyse des secteurs en croissance et des besoins croissants en personnel qualifié au Bénin.',
    content: 'Le marché du recrutement au Bénin connaît une transformation accélérée en 2026...',
    authorId: 1,
    categorySlug: 'recrutement-article',
    isPublished: true,
  },
  {
    title: 'Comment bien choisir son aide ménagère ?',
    slug: 'bien-choisir-aide-menagere',
    excerpt: 'Conseils pratiques pour sélectionner le personnel domestique qui correspond le mieux à vos besoins.',
    content: 'Choisir une aide ménagère est une décision importante pour le confort de votre foyer...',
    authorId: 1,
    categorySlug: 'conseils',
    isPublished: true,
  },
  {
    title: 'GBC Bénin lance son programme de nounous certifiées',
    slug: 'programme-nounous-certifiees',
    excerpt: 'Une initiative pour former et certifier les nounous du Bénin aux standards internationaux.',
    content: 'GBC Bénin est fier d\'annoncer le lancement de son programme de nounous certifiées...',
    authorId: 1,
    categorySlug: 'actualite',
    isPublished: true,
  },
];

const testimonials = [
  { name: 'Adéola M.', role: 'Mère de famille', company: 'Cotonou', content: 'GBC Bénin nous a trouvé une aide ménagère formidable. Elle est ponctuelle, soigneuse et vraiment professionnelle. Je recommande vivement leurs services.' },
  { name: 'Patrick K.', role: 'Entrepreneur', company: 'Abomey-Calavi', content: 'Le chauffeur que nous avons obtenu via GBC est d\'une grande fiabilité. Le processus de recrutement est transparent et le suivi est excellent.' },
  { name: 'Sènanou G.', role: 'Directrice d\'entreprise', company: 'Cotonou', content: 'Nous avons recruté notre nounou via GBC Bénin. Les enfants l\'adorent et nous avons enfin l\'esprit tranquillé. Un service de qualité rare au Bénin.' },
  { name: 'Olivier D.', role: 'Chef d\'entreprise', company: 'Porto-Novo', content: 'Un partenaire de confiance. GBC comprend nos besoins et propose toujours des candidats qui correspondent parfaitement à nos attentes.' },
];

const faqs = [
  { question: 'Qui est GBC Bénin ?', answer: 'Global Business Center (GBC) est un service de recrutement et de placement de personnel qualifié basé à Abomey-Calavi, Bénin.', category: 'general', order: 1 },
  { question: 'Quelles sont vos heures d\'ouverture ?', answer: 'Nos bureaux sont ouverts du lundi au vendredi, de 08h00 à 18h00. Nous sommes également disponibles sur rendez-vous le samedi matin.', category: 'general', order: 2 },
  { question: 'Dans quelles villes intervenez-vous ?', answer: 'Nous opérons principalement à Cotonou, Abomey-Calavi et Porto-Novo, mais notre réseau s\'étend à travers tout le Bénin.', category: 'general', order: 3 },
  { question: 'Quels services propose GBC ?', answer: 'Nous proposons le recrutement et le placement de : aides ménagères, nounous, cuisinières, chauffeurs et gardiens.', category: 'services', order: 4 },
  { question: 'Le personnel est-il vérifié ?', answer: 'Oui, chaque candidat passe par un processus de vérification complet : entretien personnel, vérification des antécédents, références et test pratique.', category: 'services', order: 5 },
  { question: 'Comment prendre rendez-vous ?', answer: 'Utilisez notre outil de prise de rendez-vous en ligne, appelez-nous au +229 01 66 72 71 52 ou contactez-nous par WhatsApp.', category: 'appointments', order: 6 },
  { question: 'Les rendez-vous sont-ils payants ?', answer: 'Le premier rendez-vous de diagnostic est totalement gratuit. Les modalités pour la suite sont discutées lors de cet échange.', category: 'appointments', order: 7 },
  { question: 'Comment sont protégées mes données ?', answer: 'Nous appliquons des protocoles de sécurité stricts pour garantir la confidentialité de vos informations personnelles.', category: 'security', order: 8 },
  { question: 'Que se passe-t-il en cas de problème avec le personnel ?', answer: 'Nous offrons un service de remplacement garanti. Si le personnel ne vous convient pas, nous procédons à un remplacement dans les meilleurs délais.', category: 'security', order: 9 },
];

async function seed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Categories
    for (const c of categories) {
      await client.query(
        `INSERT INTO categories (name, slug, type) VALUES ($1, $2, $3) ON CONFLICT (slug) DO NOTHING`,
        [c.name, c.slug, c.type]
      );
    }

    // Services
    for (const s of services) {
      const cat = await client.query(`SELECT id FROM categories WHERE slug = $1`, [s.categorySlug]);
      const categoryId = cat.rows[0]?.id;
      await client.query(
        `INSERT INTO services (title, slug, description, content, icon, category_id, "order", is_active)
         VALUES ($1, $2, $3, $4, $5, $6, $7, true)
         ON CONFLICT (slug) DO UPDATE SET description = $3, content = $4`,
        [s.title, s.slug, s.description, s.content, s.icon, categoryId, s.order]
      );
    }

    // Articles
    for (const a of articles) {
      const cat = await client.query(`SELECT id FROM categories WHERE slug = $1`, [a.categorySlug]);
      const categoryId = cat.rows[0]?.id;
      await client.query(
        `INSERT INTO articles (title, slug, excerpt, content, author_id, category_id, is_published, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
         ON CONFLICT (slug) DO UPDATE SET excerpt = $3, content = $4`,
        [a.title, a.slug, a.excerpt, a.content, a.authorId, categoryId, a.isPublished]
      );
    }

    // Testimonials
    for (const t of testimonials) {
      await client.query(
        `INSERT INTO testimonials (name, role, company, content, is_active)
         SELECT $1, $2, $3, $4, true
         WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE name = $1 AND content = $4)`,
        [t.name, t.role, t.company, t.content]
      );
    }

    // FAQs
    for (const f of faqs) {
      await client.query(
        `INSERT INTO faqs (question, answer, category, "order", is_active)
         SELECT $1, $2, $3, $4, true
         WHERE NOT EXISTS (SELECT 1 FROM faqs WHERE question = $1)`,
        [f.question, f.answer, f.category, f.order]
      );
    }

    await client.query('COMMIT');
    console.log('✅ Database seeded successfully!');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('❌ Seed failed:', error);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
