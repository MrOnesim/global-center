import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { getAppointments } from '@/lib/db-queries';
import { Calendar } from 'lucide-react';

export default async function AdminRendezVousPage() {
  let appointments: Awaited<ReturnType<typeof getAppointments>> = [];
  try {
    appointments = await getAppointments();
  } catch {}

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
    }).format(new Date(date));
  }

  return (
    <AdminLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">Rendez-vous</h1>
          <p className="text-text-main/60">Gérez les rendez-vous pris via le formulaire en ligne.</p>
        </div>

        <div className="bg-white rounded-3xl border border-primary/5 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-primary/5 flex items-center gap-2">
            <Calendar size={20} className="text-primary-light" />
            <h3 className="font-bold text-primary">{appointments.length} rendez-vous au total</h3>
          </div>

          {appointments.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-text-main/60 italic">Aucun rendez-vous pour le moment.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/5">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60 text-left">Nom</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60 text-left">Email</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60 text-left">Téléphone</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60 text-left">Type</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60 text-left">Date</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60 text-left">Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((apt) => (
                    <tr key={apt.id} className="border-b border-primary/5 hover:bg-light/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-sm text-primary">{apt.name}</td>
                      <td className="px-6 py-4 text-sm text-text-main/70">{apt.email}</td>
                      <td className="px-6 py-4 text-sm text-text-main/70">{apt.phone || '—'}</td>
                      <td className="px-6 py-4 text-sm text-text-main/70">{apt.type}</td>
                      <td className="px-6 py-4 text-sm text-text-main/70">{formatDate(apt.date)}</td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                          apt.status === 'pending' ? 'text-amber-600 border-amber-600' :
                          apt.status === 'contacted' ? 'text-blue-600 border-blue-600' :
                          apt.status === 'resolved' ? 'text-green-600 border-green-600' :
                          'text-red-600 border-red-600'
                        }`}>
                          {apt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
