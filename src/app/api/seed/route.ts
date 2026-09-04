import { NextResponse } from 'next/server';
import { pool } from '@/db';

export const dynamic = 'force-dynamic';

function esc(s: string): string {
  return s.replace(/'/g, "''");
}

export async function POST() {
  const client = await pool.connect();
  try {
    const sql: string[] = [];

    sql.push(`INSERT INTO users (name, email, password, role) VALUES ('Admin GBC', 'admin@gbc.bj', 'admin-gbc-2026', 'admin') ON CONFLICT (email) DO UPDATE SET name = 'Admin GBC';`);

    const catData: [string, string, string][] = [
      ['Ménage', 'menage', 'service'],
      ['Garde d\'enfants', 'garde-enfants', 'service'],
      ['Cuisine', 'cuisine', 'service'],
      ['Transport & Sécurité', 'transport-securite', 'service'],
      ['Placement', 'placement', 'opportunity'],
      ['Recrutement', 'recrutement', 'opportunity'],
      ['Recrutement Article', 'recrutement-article', 'article'],
      ['Conseils', 'conseils', 'article'],
      ['Actualité', 'actualite', 'article'],
    ];
    for (const [name, slug, type] of catData) {
      sql.push(`INSERT INTO categories (name, slug, type) VALUES ('${esc(name)}', '${esc(slug)}', '${esc(type)}') ON CONFLICT (slug) DO NOTHING;`);
    }

    const svcData: [string, string, string, string, string, string, string][] = [
      ['Aides Ménagères', 'aides-menageres', 'Service professionnel d\'entretien ménager.', 'Notre service vous offre un cadre de vie impeccable.', 'Home', 'menage', '1'],
      ['Nounous & Garde d\'enfants', 'nounous', 'Nounous dévouées pour veiller sur vos enfants.', 'La garde d\'enfants est un acte de confiance.', 'Users', 'garde-enfants', '2'],
      ['Cuisinières', 'cuisinieres', 'Professionnelles de la cuisine.', 'Nos cuisinières maîtrisent la cuisine béninoise.', 'UtensilsCrossed', 'cuisine', '3'],
      ['Chauffeurs & Gardiens', 'chauffeurs-gardiens', 'Sécurité et mobilité assurées.', 'La sécurité de votre famille est primordiale.', 'Car', 'transport-securite', '4'],
    ];
    for (const [title, slug, desc, content, icon, catSlug, order] of svcData) {
      sql.push(`INSERT INTO services (title, slug, description, content, icon, category_id, "order", is_active) SELECT '${esc(title)}', '${esc(slug)}', '${esc(desc)}', '${esc(content)}', '${esc(icon)}', id, ${order}, true FROM categories WHERE slug='${esc(catSlug)}' ON CONFLICT (slug) DO NOTHING;`);
    }

    const artData = [
      ['Tendances recrutement Bénin 2026', 'tendances-recrutement-benin-2026', 'Analyse des secteurs en croissance.', 'Le marché du recrutement au Bénin évolue.', 'recrutement-article'],
      ['Bien choisir son aide ménagère', 'bien-choisir-aide-menagere', 'Conseils pratiques.', 'Choisir une aide ménagère est une décision importante.', 'conseils'],
      ['Nounous certifiées', 'programme-nounous-certifiees', 'Programme de certification.', 'GBC lance son programme de nounous certifiées.', 'actualite'],
    ];
    for (const [title, slug, excerpt, content, catSlug] of artData) {
      sql.push(`INSERT INTO articles (title, slug, excerpt, content, author_id, category_id, is_published, published_at) SELECT '${esc(title)}', '${esc(slug)}', '${esc(excerpt)}', '${esc(content)}', (SELECT id FROM users WHERE email='admin@gbc.bj'), id, true, NOW() FROM categories WHERE slug='${esc(catSlug)}' ON CONFLICT (slug) DO NOTHING;`);
    }

    const testData = [
      ['Adéola M.', 'Mère de famille', 'Cotonou', 'GBC nous a trouvé une aide formidable.'],
      ['Patrick K.', 'Entrepreneur', 'Abomey-Calavi', 'Le chauffeur obtenu via GBC est très fiable.'],
      ['Sènanou G.', 'Directrice', 'Cotonou', 'Service de qualité rare au Bénin.'],
      ['Olivier D.', 'Chef d\'entreprise', 'Porto-Novo', 'Un partenaire de confiance.'],
    ];
    for (const [name, role, company, content] of testData) {
      sql.push(`INSERT INTO testimonials (name, role, company, content, is_active) SELECT '${esc(name)}', '${esc(role)}', '${esc(company)}', '${esc(content)}', true WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE name='${esc(name)}');`);
    }

    const faqData: [string, string, string, string][] = [
      ['Qui est GBC Bénin ?', 'Service de recrutement à Abomey-Calavi.', 'general', '1'],
      ['Heures d\'ouverture ?', 'Lundi-vendredi 08h-18h.', 'general', '2'],
      ['Villes couvertes ?', 'Cotonou, Abomey-Calavi, Porto-Novo.', 'general', '3'],
      ['Services proposés ?', 'Aides ménagères, nounous, cuisinières, chauffeurs, gardiens.', 'services', '4'],
      ['Personnel vérifié ?', 'Oui, processus complet.', 'services', '5'],
      ['Prendre rendez-vous ?', 'En ligne, téléphone ou WhatsApp.', 'appointments', '6'],
      ['Rendez-vous payants ?', 'Le premier est gratuit.', 'appointments', '7'],
      ['Protection des données ?', 'Protocoles de sécurité stricts.', 'security', '8'],
      ['Problème avec le personnel ?', 'Remplacement garanti.', 'security', '9'],
    ];
    for (const [q, a, cat, order] of faqData) {
      sql.push(`INSERT INTO faqs (question, answer, category, "order", is_active) SELECT '${esc(q)}', '${esc(a)}', '${esc(cat)}', ${order}, true WHERE NOT EXISTS (SELECT 1 FROM faqs WHERE question='${esc(q)}');`);
    }

    await client.query(sql.join('\n'));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  } finally {
    client.release();
  }
}
