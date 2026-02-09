"use client";
import data from '@/data/user.json';
import Image from 'next/image';
import { Mail, Phone, Github, Linkedin, Send, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const { profile, theme, contacts } = data;
  const userImage = profile.profileImage || "/default-image.jpg";

  return (
    <main 
      className="min-h-screen w-full flex flex-col items-center p-6 bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundColor: theme.backgroundColor, 
        color: theme.textColor,
        '--bg-mobile': `url(${theme.bgMobile})`,
        '--bg-desktop': `url(${theme.bgDesktop})`
      } as React.CSSProperties}
    >
      <style jsx>{`
        main { background-image: var(--bg-mobile); }
        @media (min-width: 768px) { main { background-image: var(--bg-desktop); } }
      `}</style>

      <Link href="/" className="absolute top-6 left-6 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-black/40 transition-colors z-10">
        <ArrowLeft size={20} />
      </Link>

      <section className="flex flex-col items-center mt-16 mb-12 text-center">
        <div className="relative w-20 h-20 mb-4 shadow-xl">
          <Image 
            src={userImage} 
            alt="Profile"
            fill
            className="rounded-full object-cover border-2"
            style={{ borderColor: theme.buttonColor }}
            sizes="80px"
          />
        </div>
        <h1 className="text-xl font-bold">Informações de Contato</h1>
        <p className="opacity-60 text-sm">Fale diretamente com {profile.nickname}</p>
      </section>

      <div className="w-full max-w-md bg-black/20 backdrop-blur-xl rounded-3xl p-6 border border-white/10 space-y-6">
        {[
          { icon: <Mail size={20}/>, label: "E-mail", val: contacts.email },
          { icon: <Phone size={20}/>, label: "Telefone", val: contacts.phone },
          { icon: <Send size={20}/>, label: "Telegram", val: contacts.telegram }
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4">
            <span className="opacity-60">{c.icon}</span>
            <div className="overflow-hidden">
              <p className="text-xs opacity-50 uppercase font-bold">{c.label}</p>
              <p className="font-medium truncate">{c.val}</p>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-2 gap-4 pt-2">
          <a href={`https://${contacts.github}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <Github size={18} /> <span className="text-sm font-bold">GitHub</span>
          </a>
          <a href={`https://${contacts.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <Linkedin size={18} /> <span className="text-sm font-bold">LinkedIn</span>
          </a>
        </div>
      </div>
    </main>
  );
}