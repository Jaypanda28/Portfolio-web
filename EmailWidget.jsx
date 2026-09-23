import React from 'react';
import { Mail } from 'lucide-react';

export default function EmailWidget({ email }) {
  const mailTo = `mailto:${email || 'pandajaynarayan49@gmail.com'}`;

  return (
    <div className="fixed bottom-24 right-6 z-40">
      <a
        href={mailTo}
        className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold shadow-2xl hover:scale-110 transition-all duration-300 border border-white/20 shadow-purple-500/30"
        title="Send Direct Email"
        aria-label="Send Direct Email"
      >
        <Mail className="w-6 h-6 text-white animate-pulse" />
        
        {/* Pulsing Dot */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-purple-300 border-2 border-slate-950"></span>
        </span>

        {/* Hover Tooltip */}
        <div className="absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Email Me (pandajaynarayan49@gmail.com)
        </div>
      </a>
    </div>
  );
}
