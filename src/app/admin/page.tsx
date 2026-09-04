import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Users, Briefcase, Calendar, MessageSquare, ArrowUpRight } from 'lucide-react';
import { getContactRequests, getAppointments, getAdminStats } from '@/lib/db-queries';

export default async function AdminDashboard() {
  let stats = { contacts: 0, appointments: 0, services: 0, articles: 0 };
  let recentAppointments: Awaited<ReturnType<typeof getAppointments>> = [];
  let recentContacts: Awaited<ReturnType<typeof getContactRequests>> = [];

  try {
    [stats, recentAppointments, recentContacts] = await Promise.all([
      getAdminStats(),
      getAppointments(),
      getContactRequests(),
    ]);
  } catch {
    // DB unavailable — show zeros
  }

  const statCards = [
    { label: 'Demandes de contact', value: stats.contacts, icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Rendez-vous', value: stats.appointments, icon: Calendar, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Services actifs', value: stats.services, icon: Briefcase, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Articles publiés', value: stats.articles, icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
    }).format(new Date(date));
  }

  return (
    <AdminLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">Bonjour, M. Goudjanou</h1>
          <p className="text-text-main/60">Voici un aperçu de l&apos;activité sur le site Global Business Center.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
                  <stat.icon size={24} />
                </div>
                <span className="text-green-500 text-xs font-bold flex items-center gap-1">
                  Récents <ArrowUpRight size={14} />
                </span>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-text-main/60 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Appointments */}
          <div className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <Calendar size={20} className="text-primary-light" />
              Rendez-vous récents
            </h3>
            <div className="space-y-4">
              {recentAppointments.length === 0 && (
                <p className="text-text-main/60 text-sm italic">Aucun rendez-vous pour le moment.</p>
              )}
              {recentAppointments.slice(0, 5).map((apt) => (
                <div key={apt.id} className="flex items-center justify-between p-4 bg-light rounded-2xl border border-primary/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-primary text-xs shadow-sm">
                      {apt.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-primary">{apt.name}</div>
                      <div className="text-[10px] text-text-main/60 uppercase font-bold tracking-tighter">
                        {apt.type || 'Information'} &bull; {formatDate(apt.createdAt)}
                      </div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                    apt.status === 'pending' ? 'text-amber-600 border-amber-600' :
                    apt.status === 'contacted' ? 'text-blue-600 border-blue-600' :
                    'text-green-600 border-green-600'
                  }`}>
                    {apt.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Contact Requests */}
          <div className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <MessageSquare size={20} className="text-primary-light" />
              Derniers messages
            </h3>
            <div className="space-y-4">
              {recentContacts.length === 0 && (
                <p className="text-text-main/60 text-sm italic">Aucun message pour le moment.</p>
              )}
              {recentContacts.slice(0, 5).map((msg) => (
                <div key={msg.id} className="p-4 bg-light rounded-2xl border border-primary/5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-sm text-primary">{msg.name}</span>
                    <span className="text-[10px] text-text-main/60">{formatDate(msg.createdAt)}</span>
                  </div>
                  <p className="text-xs text-text-main/60 line-clamp-1 italic">
                    &ldquo;{msg.subject ? `${msg.subject}: ` : ''}{msg.message}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
