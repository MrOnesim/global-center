import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Plus, Search, MoreVertical, Edit, Trash, Eye } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function AdminOpportunities() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">Opportunités</h1>
            <p className="text-text-main/40">Gérez les projets et investissements publiés sur le site.</p>
          </div>
          <Button variant="secondary" className="gap-2">
            <Plus size={20} /> Nouvelle opportunité
          </Button>
        </div>

        {/* Filters/Search */}
        <div className="bg-white p-4 rounded-2xl border border-primary/5 shadow-sm flex items-center gap-4">
          <div className="flex-grow relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
            <input 
              type="text" 
              placeholder="Rechercher une opportunité..." 
              className="w-full bg-light border border-transparent rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-primary-light transition-all"
            />
          </div>
          <select className="bg-light border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-primary-light transition-all min-w-[150px]">
            <option>Toutes les catégories</option>
            <option>Énergie</option>
            <option>Agriculture</option>
            <option>Immobilier</option>
          </select>
        </div>

        {/* Table Mock */}
        <div className="bg-white rounded-[32px] border border-primary/5 shadow-sm overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-light text-left">
              <tr>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-primary/40 border-b border-primary/5">Titre</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-primary/40 border-b border-primary/5">Catégorie</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-primary/40 border-b border-primary/5">Statut</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-primary/40 border-b border-primary/5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { title: 'Projet Solaire Cotonou', category: 'Énergie', status: 'Ouvert' },
                { title: 'Extension Agro-Industrielle', category: 'Agriculture', status: 'En cours' },
                { title: 'Immobilier Calavi', category: 'Immobilier', status: 'Ouvert' },
              ].map((opp, i) => (
                <tr key={i} className="hover:bg-light/50 transition-colors">
                  <td className="px-8 py-5 border-b border-primary/5">
                    <div className="font-bold text-primary">{opp.title}</div>
                  </td>
                  <td className="px-8 py-5 border-b border-primary/5 text-sm text-text-main/60">{opp.category}</td>
                  <td className="px-8 py-5 border-b border-primary/5">
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${opp.status === 'Ouvert' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {opp.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 border-b border-primary/5 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-primary/5 rounded-lg text-primary transition-colors"><Edit size={16} /></button>
                      <button className="p-2 hover:bg-red-50 rounded-lg text-red-500 transition-colors"><Trash size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
