import { db } from '@/db';
import { contactRequests, appointments, services, articles, testimonials, faqs } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';

export async function getContactRequests() {
  try {
    const results = await db
      .select()
      .from(contactRequests)
      .orderBy(desc(contactRequests.createdAt))
      .limit(50);
    return results;
  } catch {
    return [];
  }
}

export async function getAppointments() {
  try {
    const results = await db
      .select()
      .from(appointments)
      .orderBy(desc(appointments.createdAt))
      .limit(50);
    return results;
  } catch {
    return [];
  }
}

export async function getServices() {
  try {
    const results = await db
      .select()
      .from(services)
      .where(eq(services.isActive, true))
      .orderBy(services.order);
    return results;
  } catch {
    return [];
  }
}

export async function getArticles() {
  try {
    const results = await db
      .select()
      .from(articles)
      .where(eq(articles.isPublished, true))
      .orderBy(desc(articles.publishedAt));
    return results;
  } catch {
    return [];
  }
}

export async function getTestimonials() {
  try {
    const results = await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.isActive, true));
    return results;
  } catch {
    return [];
  }
}

export async function getFaqs() {
  try {
    const results = await db
      .select()
      .from(faqs)
      .where(eq(faqs.isActive, true))
      .orderBy(faqs.order);
    return results;
  } catch {
    return [];
  }
}

export async function getAdminStats() {
  const [contactCount, appointmentCount, activeServices, publishedArticles] = await Promise.all([
    db.select({ count: contactRequests.id }).from(contactRequests),
    db.select({ count: appointments.id }).from(appointments),
    db.select({ count: services.id }).from(services).where(eq(services.isActive, true)),
    db.select({ count: articles.id }).from(articles).where(eq(articles.isPublished, true)),
  ]);
  return {
    contacts: contactCount[0]?.count ?? 0,
    appointments: appointmentCount[0]?.count ?? 0,
    services: activeServices[0]?.count ?? 0,
    articles: publishedArticles[0]?.count ?? 0,
  };
}
