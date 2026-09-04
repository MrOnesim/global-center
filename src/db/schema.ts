import { pgTable, serial, text, timestamp, varchar, integer, boolean, pgEnum } from 'drizzle-orm/pg-core';

export const requestStatusEnum = pgEnum('request_status', ['pending', 'contacted', 'resolved', 'cancelled']);
export const appointmentTypeEnum = pgEnum('appointment_type', ['information', 'service', 'opportunity', 'partnership', 'enterprise', 'other']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: text('password').notNull(),
  role: varchar('role', { length: 50 }).default('admin').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  type: varchar('type', { length: 50 }).notNull(), // 'service', 'opportunity', 'article'
});

export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: text('description').notNull(),
  content: text('content').notNull(),
  icon: varchar('icon', { length: 50 }),
  categoryId: integer('category_id').references(() => categories.id),
  order: integer('order').default(0),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const opportunities = pgTable('opportunities', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: text('description').notNull(),
  content: text('content').notNull(),
  location: varchar('location', { length: 255 }),
  status: varchar('status', { length: 50 }).default('open').notNull(), // 'open', 'closed', 'ongoing'
  amount: varchar('amount', { length: 255 }),
  duration: varchar('duration', { length: 255 }),
  categoryId: integer('category_id').references(() => categories.id),
  featuredImage: text('featured_image'),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const articles = pgTable('articles', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  featuredImage: text('featured_image'),
  authorId: integer('author_id').references(() => users.id),
  categoryId: integer('category_id').references(() => categories.id),
  isPublished: boolean('is_published').default(false),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const faqs = pgTable('faqs', {
  id: serial('id').primaryKey(),
  question: text('question').notNull(),
  answer: text('answer').notNull(),
  category: varchar('category', { length: 100 }), // 'general', 'services', 'appointments', 'opportunities', 'security'
  order: integer('order').default(0),
  isActive: boolean('is_active').default(true),
});

export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  role: varchar('role', { length: 255 }),
  company: varchar('company', { length: 255 }),
  content: text('content').notNull(),
  photo: text('photo'),
  isActive: boolean('is_active').default(true),
});

export const contactRequests = pgTable('contact_requests', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  subject: varchar('subject', { length: 255 }),
  message: text('message').notNull(),
  status: requestStatusEnum('status').default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const appointments = pgTable('appointments', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  type: appointmentTypeEnum('type').default('information').notNull(),
  date: timestamp('date').notNull(),
  message: text('message'),
  status: requestStatusEnum('status').default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
