import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Users, Briefcase, Calendar, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Demandes de contact', value: '12', icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Rendez-vous', value: '8', icon: Calendar, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Opportunités actives', value: '5', icon: Briefcase, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Visiteurs (ce mois)', value: '1,240', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">Bonjour, M. Goudjanou</h1>
          <p className="text-text-main/40">Voici un aperçu de l&apos;activité sur le site Global Business Center.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
                  <stat.icon size={24} />
                </div>
                <span className="text-green-500 text-xs font-bold flex items-center gap-1">
                  +12% <ArrowUpRight size={14} />
                </span>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-text-main/40 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <Calendar size={20} className="text-primary-light" />
              Rendez-vous récents
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between p-4 bg-light rounded-2xl border border-primary/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-primary text-xs shadow-sm">JK</div>
                    <div>
                      <div className="font-bold text-sm text-primary">Jean Koffi</div>
                      <div className="text-[10px] text-text-main/40 uppercase font-bold tracking-tighter">Investissement &bull; 14:00</div>
                    </div>
                  </div>
                  <button className="text-primary-light text-xs font-bold hover:underline">Voir</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <MessageSquare size={20} className="text-primary-light" />
              Derniers messages
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="p-4 bg-light rounded-2xl border border-primary/5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-sm text-primary">Marie Sossa</span>
                    <span className="text-[10px] text-text-main/40">Il y a 2h</span>
                  </div>
                  <p className="text-xs text-text-main/60 line-clamp-1 italic">
                    &ldquo;Bonjour, je souhaiterais avoir plus d&apos;informations sur le projet solaire...&rdquo;
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
