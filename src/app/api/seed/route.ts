import { NextResponse } from 'next/server';
import { pool } from '@/db';

export const dynamic = 'force-dynamic';

export async function POST() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    await client.query(`
      INSERT INTO users (name, email, password, role)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (email) DO NOTHING
    `, ['Admin GBC', 'admin@gbc.bj', 'admin-gbc-2026', 'admin']);

    const catRows = [
      ['Ménage', 'menage', 'service'],
      ['Garde d\'enfants', 'garde-enfants', 'service'],
      ['Cuisine', 'cuisine', 'service'],
      ['Transport & Sécurité', 'transport-securite', 'service'],
      ['Placement', 'placement', 'opportunity'],
      ['Recrutement', 'recrutement', 'opportunity'],
      ['Recrutement', 'recrutement-article', 'article'],
      ['Conseils', 'conseils', 'article'],
      ['Actualité', 'actualite', 'article'],
    ];
    for (const [name, slug, type] of catRows) {
      await client.query(
        'INSERT INTO categories (name, slug, type) VALUES ($1, $2, $3) ON CONFLICT (slug) DO NOTHING',
        [name, slug, type]
      );
    }

    const svcRows: Array<[string, string, string, string, string, string, number]> = [
      ['Aides Ménagères', 'aides-menageres', 'Un service professionnel d\'entretien ménager.', 'Notre service d\'aides ménagères vous offre un cadre de vie impeccable.', 'Home', 'menage', 1],
      ['Nounous & Garde d\'enfants', 'nounous', 'Des nounous dévouées pour veiller sur vos enfants.', 'La garde d\'enfants est un acte de confiance.', 'Users', 'garde-enfants', 2],
      ['Cuisinières', 'cuisinieres', 'Des professionnelles de la cuisine.', 'Nos cuisinières maîtrisent la cuisine béninoise et internationale.', 'UtensilsCrossed', 'cuisine', 3],
      ['Chauffeurs & Gardiens', 'chauffeurs-gardiens', 'Sécurité et mobilité assurées.', 'La sécurité de votre famille est primordiale.', 'Car', 'transport-securite', 4],
    ];
    for (const [title, slug, desc, content, icon, catSlug, order] of svcRows) {
      const catRes = await client.query('SELECT id FROM categories WHERE slug = $1', [catSlug]);
      const catId = catRes.rows[0]?.id ?? null;
      await client.query(
        'INSERT INTO services (title, slug, description, content, icon, category_id, "order", is_active) VALUES ($1, $2, $3, $4, $5, $6, $7, true) ON CONFLICT (slug) DO UPDATE SET description = $3',
        [title, slug, desc, content, icon, catId, order]
      );
    }

    const artRows: Array<[string, string, string, string, string]> = [
      ['Tendances recrutement Bénin 2026', 'tendances-recrutement-benin-2026', 'Analyse des secteurs en croissance.', 'Le marché du recrutement au Bénin évolue.', 'recrutement-article'],
      ['Bien choisir son aide ménagère', 'bien-choisir-aide-menagere', 'Conseils pratiques.', 'Choisir une aide ménagère est une décision importante.', 'conseils'],
      ['Nounous certifiées', 'programme-nounous-certifiees', 'Programme de certification.', 'GBC lance son programme de nounous certifiées.', 'actualite'],
    ];
    for (const [title, slug, excerpt, content, catSlug] of artRows) {
      const catRes = await client.query('SELECT id FROM categories WHERE slug = $1', [catSlug]);
      const catId = catRes.rows[0]?.id ?? null;
      await client.query(
        'INSERT INTO articles (title, slug, excerpt, content, author_id, category_id, is_published, published_at) VALUES ($1, $2, $3, $4, 1, $5, true, NOW()) ON CONFLICT (slug) DO NOTHING',
        [title, slug, excerpt, content, catId]
      );
    }

    const testRows: Array<[string, string, string, string]> = [
      ['Adéola M.', 'Mère de famille', 'Cotonou', 'GBC nous a trouvé une aide formidable.'],
      ['Patrick K.', 'Entrepreneur', 'Abomey-Calavi', 'Le chauffeur obtenu via GBC est très fiable.'],
      ['Sènanou G.', 'Directrice', 'Cotonou', 'Service de qualité rare au Bénin.'],
      ['Olivier D.', 'Chef d\'entreprise', 'Porto-Novo', 'Un partenaire de confiance.'],
    ];
    for (const [name, role, company, content] of testRows) {
      await client.query(
        'INSERT INTO testimonials (name, role, company, content, is_active) SELECT $1, $2, $3, $4, true WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE name = $1)',
        [name, role, company, content]
      );
    }

    const faqRows: Array<[string, string, string, number]> = [
      ['Qui est GBC Bénin ?', 'Service de recrutement à Abomey-Calavi.', 'general', 1],
      ['Heures d\'ouverture ?', 'Lundi-vendredi 08h-18h.', 'general', 2],
      ['Villes couvertes ?', 'Cotonou, Abomey-Calavi, Porto-Novo, tout le Bénin.', 'general', 3],
      ['Services proposés ?', 'Aides ménagères, nounous, cuisinières, chauffeurs, gardiens.', 'services', 4],
      ['Personnel vérifié ?', 'Oui, processus de vérification complet.', 'services', 5],
      ['Prendre rendez-vous ?', 'En ligne, par téléphone ou WhatsApp.', 'appointments', 6],
      ['Rendez-vous payants ?', 'Le premier est gratuit.', 'appointments', 7],
      ['Protection des données ?', 'Protocoles de sécurité stricts.', 'security', 8],
      ['Problème avec le personnel ?', 'Remplacement garanti.', 'security', 9],
    ];
    for (const [q, a, cat, order] of faqRows) {
      await client.query(
        'INSERT INTO faqs (question, answer, category, "order", is_active) SELECT $1, $2, $3, $4, true WHERE NOT EXISTS (SELECT 1 FROM faqs WHERE question = $1)',
        [q, a, cat, order]
      );
    }

    await client.query('COMMIT');
    return NextResponse.json({ success: true });
  } catch (error) {
    await client.query('ROLLBACK');
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  } finally {
    client.release();
  }
}
