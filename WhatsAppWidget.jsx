import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/917846803792"
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-2xl hover:scale-110 transition-all duration-300 border border-emerald-400/40 shadow-emerald-500/30"
        title="Direct Chat on WhatsApp"
        aria-label="Direct Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white animate-pulse" />
        
        {/* Pulsing Dot */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-slate-950"></span>
        </span>

        {/* Hover Tooltip */}
        <div className="absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          WhatsApp Chat
        </div>
      </a>
    </div>
  );
}
