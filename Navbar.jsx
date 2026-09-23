import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Download, Brain } from 'lucide-react';

export default function Navbar({ onDownloadResume, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-6 transition-all duration-300">
      <nav className={`max-w-7xl mx-auto rounded-3xl transition-all duration-300 ${
        scrolled 
          ? isDark
            ? 'bg-slate-950/90 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(56,189,248,0.2)] py-2.5 px-6'
            : 'bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-2xl py-2.5 px-6'
          : isDark
            ? 'bg-slate-950/80 backdrop-blur-xl border border-slate-800/80 shadow-xl py-3.5 px-6'
            : 'bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-lg py-3.5 px-6'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
              <div className={`w-full h-full rounded-[14px] flex items-center justify-center ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
                <Brain className="w-5 h-5 text-cyan-400 group-hover:text-purple-400 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-black text-base sm:text-lg tracking-wider transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                JAYNARAYAN <span className="text-gradient">PANDA</span>
              </span>
              <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                AI / ML ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-mono font-bold uppercase tracking-wider transition-all relative py-1 group/item ${
                  isDark ? 'text-slate-300 hover:text-cyan-300' : 'text-slate-700 hover:text-indigo-600'
                }`}
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 group-hover/item:w-full transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Resume Button */}
            <button
              onClick={onDownloadResume}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold rounded-2xl transition-all shadow-md ${
                isDark
                  ? 'bg-slate-900/90 text-cyan-300 border border-slate-800 hover:border-cyan-400/60 hover:text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
              }`}
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>
            
            {/* Hire Me Button */}
            <a
              href="#contact"
              className="btn-glow flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-2xl text-white transition-all shadow-xl"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-300 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-t px-4 py-5 mt-3 space-y-3 rounded-2xl animate-in slide-in-from-top duration-200 ${
            isDark ? 'bg-slate-950/95 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-mono font-bold uppercase tracking-wider hover:text-cyan-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => { onDownloadResume(); setMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-bold rounded-xl bg-slate-900 text-cyan-300 border border-slate-800"
              >
                <Download className="w-4 h-4 text-cyan-400" /> Download Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-glow flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl text-white"
              >
                <Send className="w-4 h-4" /> Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
