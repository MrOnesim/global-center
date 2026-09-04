'use server';

import { db } from '@/db';
import { contactRequests, appointments } from '@/db/schema';

export async function submitContactRequest(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  try {
    await db.insert(contactRequests).values({
      name,
      email,
      subject,
      message,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to submit contact request:', error);
    return { success: false, error: 'Une erreur est survenue lors de l\'envoi du message.' };
  }
}

export async function submitAppointmentRequest(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const type = formData.get('type') as any; // Cast to enum
  const dateStr = formData.get('date') as string;
  const timeStr = formData.get('time') as string;
  const message = formData.get('message') as string;

  try {
    const date = new Date(`${dateStr}T${timeStr}`);
    await db.insert(appointments).values({
      name,
      email,
      phone,
      type,
      date,
      message,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to submit appointment request:', error);
    return { success: false, error: 'Une erreur est survenue lors de la prise de rendez-vous.' };
  }
}
