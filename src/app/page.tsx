"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/data/user.json';
import { Github, Linkedin, Instagram, Globe, ArrowRight, Share2, Check } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  instagram: <Instagram size={20} />,
  web: <Globe size={20} />
};

export default function HomePage() {
  const { profile, links } = data;
  const [copied, setCopied] = useState(false);
  const userImage = profile.profileImage || "/default-image.jpg";

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar", err);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center p-6 text-slate-900 relative">
      <section className="w-full max-w-md mt-12">
        <Link 
          href={`/${profile.username.replace('@', '')}`}
          className="flex flex-col items-center group mb-10 text-center"
        >
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 group-hover:scale-105 transition-transform">
            <Image 
              src={userImage} 
              alt={profile.name} 
              fill 
              className="object-cover" 
              priority
              sizes="96px"
            />
          </div>
          <h1 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
            {profile.nickname}
          </h1>
          <p className="text-slate-500 font-medium">{profile.username}</p>
        </Link>

        <div className="w-full bg-white rounded-[32px] p-6 shadow-xl border border-slate-100">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-slate-600 group-hover:text-blue-600 transition-colors">
                    {iconMap[link.icon] || <Globe size={20} />}
                  </div>
                  <span className="font-bold text-slate-700">{link.label}</span>
                </div>
                <ArrowRight size={18} className="text-slate-300 group-hover:text-slate-600 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <button
        onClick={handleShare}
        className="fixed bottom-6 right-6 p-4 bg-slate-900 text-white rounded-full shadow-2xl hover:bg-slate-800 active:scale-90 transition-all flex items-center gap-2 z-50"
      >
        {copied ? (
          <>
            <Check size={20} className="text-green-400" />
            <span className="text-xs font-bold pr-1">Link Copiado!</span>
          </>
        ) : (
          <>
            <Share2 size={20} />
          </>
        )}
      </button>
    </main>
  );
}