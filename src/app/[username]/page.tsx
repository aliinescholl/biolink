"use client";
import data from '@/data/user.json';
import { iconRepository } from '../icons_repository';
import { Profile } from '@/components/Profile';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProfilePage() {
  const { theme, contacts } = data;

  return (
    <main 
      className="min-h-screen flex flex-col items-center p-6 relative transition-colors duration-300"
      style={{ backgroundColor: theme.pageBackground, color: theme.pageText }}>
      
        <section className="w-full max-w-md mt-12">
          <Profile />

          <div 
            className="w-full max-w-md rounded-3xl p-6 border shadow-lg space-y-6"
            style={{ 
              backgroundColor: theme.cardBackground, 
              color: theme.cardText,
              borderColor: 'rgba(255,255,255,0.05)'
            }}>

            <section className="flex flex-col items-center mb-12 text-center">
              <h1 className="text-xl font-bold">Informações de Contato</h1 >
            </section>

            {contacts.length > 0 && contacts.map((c, i) => (
                <Link 
                  key={i}
                  href={c.href}
                  className='border-b border-white/10 pb-4 last:border-0 last:pb-0 flex justify-between items-center'
                >
                  <div className='flex items-center gap-4'>
                    <span className="opacity-70">{iconRepository[c.icon]}</span>
                    <div className="overflow-hidden">
                      <p className="text-xs opacity-50 uppercase font-bold">{c.label}</p>
                      <p className="font-medium truncate">{c.value}</p>
                    </div>
                  </div>

                  <div>
                    <ArrowRight size={18} className="opacity-50 group-hover:opacity-100 transition-all" />
                  </div>
                </Link>
            ))}
          </div>
      </section>
    </main>
  );
}