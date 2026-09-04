import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { getContactRequests } from '@/lib/db-queries';
import { MessageSquare } from 'lucide-react';

export default async function AdminContactsPage() {
  let contacts: Awaited<ReturnType<typeof getContactRequests>> = [];
  try {
    contacts = await getContactRequests();
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
          <h1 className="text-3xl font-bold text-primary mb-2">Demandes de contact</h1>
          <p className="text-text-main/60">Consultez les messages envoyés via le formulaire de contact.</p>
        </div>

        <div className="bg-white rounded-3xl border border-primary/5 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-primary/5 flex items-center gap-2">
            <MessageSquare size={20} className="text-primary-light" />
            <h3 className="font-bold text-primary">{contacts.length} messages au total</h3>
          </div>

          {contacts.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-text-main/60 italic">Aucun message pour le moment.</p>
            </div>
          ) : (
            <div className="divide-y divide-primary/5">
              {contacts.map((msg) => (
                <div key={msg.id} className="p-6 hover:bg-light/50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="font-bold text-primary">{msg.name}</span>
                      <span className="text-text-main/60 text-sm ml-2">{msg.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-text-main/60">{formatDate(msg.createdAt)}</span>
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                        msg.status === 'pending' ? 'text-amber-600 border-amber-600' :
                        msg.status === 'contacted' ? 'text-blue-600 border-blue-600' :
                        msg.status === 'resolved' ? 'text-green-600 border-green-600' :
                        'text-red-600 border-red-600'
                      }`}>
                        {msg.status}
                      </span>
                    </div>
                  </div>
                  {msg.subject && (
                    <p className="text-sm font-bold text-primary mb-1">{msg.subject}</p>
                  )}
                  <p className="text-sm text-text-main/70 leading-relaxed">{msg.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
