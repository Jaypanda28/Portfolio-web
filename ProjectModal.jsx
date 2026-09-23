import React from 'react';
import { X, ExternalLink, Github, Layers, CheckCircle2, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto text-slate-100">
        
        {/* Modal Header Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/60 shadow-lg transition-all z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Pill & Title */}
          <div className="absolute bottom-4 left-6 right-6 space-y-1">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/50 text-xs font-mono text-cyan-300 font-bold shadow-md">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight pt-1">
              {project.title}
            </h3>
            <p className="text-xs text-cyan-400 font-mono font-semibold">{project.subtitle}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Technical Highlights Bullet List */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" /> Architecture & Key Features
            </h4>
            <ul className="space-y-2.5">
              {project.details?.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" /> Tech Stack & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-slate-800">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-200 hover:bg-slate-800 hover:border-cyan-500/50 transition-all"
              >
                <Github className="w-4 h-4" /> Code Repo
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-glow flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
