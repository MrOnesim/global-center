import { NextResponse } from 'next/server';
import { pool } from '@/db';

export async function POST() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Admin user
    await client.query(
      `INSERT INTO users (name, email, password, role)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (email) DO NOTHING`,
      ['Admin GBC', 'admin@gbc.bj', 'admin-gbc-2026', 'admin']
    );

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

    for (const c of categories) {
      await client.query(
        `INSERT INTO categories (name, slug, type) VALUES ($1, $2, $3) ON CONFLICT (slug) DO NOTHING`,
        [c.name, c.slug, c.type]
      );
    }

    const services = [
      { title: 'Aides Ménagères', slug: 'aides-menageres', description: 'Un service professionnel d\'entretien ménager adapté à vos besoins quotidiens.', content: 'Notre service d\'aides ménagères est conçu pour vous offrir un cadre de vie impeccable.', icon: 'Home', categorySlug: 'menage', order: 1 },
      { title: 'Nounous & Garde d\'enfants', slug: 'nounous', description: 'Des nounous dévouées et qualifiées pour veiller sur vos enfants.', content: 'La garde d\'enfants est un acte de confiance.', icon: 'Users', categorySlug: 'garde-enfants', order: 2 },
      { title: 'Cuisinières', slug: 'cuisinieres', description: 'Des professionnelles de la cuisine pour vos repas quotidiens ou événements.', content: 'Nos cuisinières maîtrisent une variété de cuisines.', icon: 'UtensilsCrossed', categorySlug: 'cuisine', order: 3 },
      { title: 'Chauffeurs & Gardiens', slug: 'chauffeurs-gardiens', description: 'Sécurité et mobilité assurées par des chauffeurs et gardiens rigoureux.', content: 'La sécurité de votre famille et de vos biens est primordiale.', icon: 'Car', categorySlug: 'transport-securite', order: 4 },
    ];

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

    const articles = [
      { title: 'Les nouvelles tendances du recrutement au Bénin en 2026', slug: 'tendances-recrutement-benin-2026', excerpt: 'Analyse des secteurs en croissance.', content: 'Le marché du recrutement au Bénin connaît une transformation.', categorySlug: 'recrutement-article', isPublished: true },
      { title: 'Comment bien choisir son aide ménagère ?', slug: 'bien-choisir-aide-menagere', excerpt: 'Conseils pratiques pour sélectionner le personnel.', content: 'Choisir une aide ménagère est une décision importante.', categorySlug: 'conseils', isPublished: true },
      { title: 'GBC Bénin lance son programme de nounous certifiées', slug: 'programme-nounous-certifiees', excerpt: 'Une initiative pour former et certifier les nounous.', content: 'GBC Bénin est fier d\'annoncer le lancement de son programme.', categorySlug: 'actualite', isPublished: true },
    ];

    for (const a of articles) {
      const cat = await client.query(`SELECT id FROM categories WHERE slug = $1`, [a.categorySlug]);
      const categoryId = cat.rows[0]?.id;
      await client.query(
        `INSERT INTO articles (title, slug, excerpt, content, author_id, category_id, is_published, published_at)
         VALUES ($1, $2, $3, $4, 1, $5, $6, NOW())
         ON CONFLICT (slug) DO UPDATE SET excerpt = $3, content = $4`,
        [a.title, a.slug, a.excerpt, a.content, categoryId, a.isPublished]
      );
    }

    const testimonials = [
      { name: 'Adéola M.', role: 'Mère de famille', company: 'Cotonou', content: 'GBC Bénin nous a trouvé une aide ménagère formidable.' },
      { name: 'Patrick K.', role: 'Entrepreneur', company: 'Abomey-Calavi', content: 'Le chauffeur que nous avons obtenu via GBC est d\'une grande fiabilité.' },
      { name: 'Sènanou G.', role: 'Directrice d\'entreprise', company: 'Cotonou', content: 'Nous avons recruté notre nounou via GBC Bénin.' },
      { name: 'Olivier D.', role: 'Chef d\'entreprise', company: 'Porto-Novo', content: 'Un partenaire de confiance.' },
    ];

    for (const t of testimonials) {
      await client.query(
        `INSERT INTO testimonials (name, role, company, content, is_active)
         SELECT $1, $2, $3, $4, true
         WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE name = $1 AND content = $4)`,
        [t.name, t.role, t.company, t.content]
      );
    }

    const faqs = [
      { question: 'Qui est GBC Bénin ?', answer: 'Global Business Center est un service de recrutement basé à Abomey-Calavi.', category: 'general', order: 1 },
      { question: 'Quelles sont vos heures d\'ouverture ?', answer: 'Du lundi au vendredi, de 08h00 à 18h00.', category: 'general', order: 2 },
      { question: 'Dans quelles villes intervenez-vous ?', answer: 'Cotonou, Abomey-Calavi, Porto-Novo et tout le Bénin.', category: 'general', order: 3 },
      { question: 'Quels services propose GBC ?', answer: 'Aides ménagères, nounous, cuisinières, chauffeurs et gardiens.', category: 'services', order: 4 },
      { question: 'Le personnel est-il vérifié ?', answer: 'Oui, processus de vérification complet.', category: 'services', order: 5 },
      { question: 'Comment prendre rendez-vous ?', answer: 'En ligne, par téléphone ou WhatsApp.', category: 'appointments', order: 6 },
      { question: 'Les rendez-vous sont-ils payants ?', answer: 'Le premier rendez-vous est gratuit.', category: 'appointments', order: 7 },
      { question: 'Comment sont protégées mes données ?', answer: 'Protocoles de sécurité stricts.', category: 'security', order: 8 },
      { question: 'Que se passe-t-il en cas de problème ?', answer: 'Service de remplacement garanti.', category: 'security', order: 9 },
    ];

    for (const f of faqs) {
      await client.query(
        `INSERT INTO faqs (question, answer, category, "order", is_active)
         SELECT $1, $2, $3, $4, true
         WHERE NOT EXISTS (SELECT 1 FROM faqs WHERE question = $1)`,
        [f.question, f.answer, f.category, f.order]
      );
    }

    await client.query('COMMIT');
    return NextResponse.json({ success: true, message: 'Database seeded successfully!' });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Seed failed:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  } finally {
    client.release();
  }
}
