import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, FileText, Briefcase, MessageSquare, Calendar, HelpCircle, User, LogOut } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-light flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-8 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <span className="font-bold text-lg">GBC Admin</span>
          </Link>
        </div>
        
        <nav className="flex-grow p-6 space-y-2">
          <AdminNavLink href="/admin" icon={LayoutDashboard} label="Dashboard" />
          <AdminNavLink href="/admin/opportunites" icon={Briefcase} label="Opportunités" />
          <AdminNavLink href="/admin/actualites" icon={FileText} label="Actualités" />
          <AdminNavLink href="/admin/rendez-vous" icon={Calendar} label="Rendez-vous" />
          <AdminNavLink href="/admin/contacts" icon={MessageSquare} label="Demandes" />
          <AdminNavLink href="/admin/faq" icon={HelpCircle} label="FAQ" />
        </nav>

        <div className="p-6 border-t border-white/10">
          <button className="flex items-center gap-3 text-white/60 hover:text-white transition-colors w-full">
            <LogOut size={20} />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <header className="h-20 bg-white border-b border-primary/5 flex items-center justify-between px-8 sticky top-0 z-30">
          <h2 className="text-xl font-bold text-primary italic">Back-office GBC</h2>
          <div className="flex items-center gap-4">
             <div className="flex flex-col text-right">
                <span className="text-sm font-bold text-primary">Admin GBC</span>
                <span className="text-[10px] text-primary/40 uppercase tracking-widest">Administrateur</span>
             </div>
             <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                <User size={20} />
             </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8 flex-grow">
          {children}
        </main>
      </div>
    </div>
  );
}

function AdminNavLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <Link 
      href={href} 
      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-white/70 hover:text-white"
    >
      <Icon size={20} />
      <span className="font-medium text-sm">{label}</span>
    </Link>
  );
}
