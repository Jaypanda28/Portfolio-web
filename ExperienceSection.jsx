import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building } from 'lucide-react';

export default function ExperienceSection({ experiences }) {
  const [activeExpId, setActiveExpId] = useState(experiences?.[0]?.id || 'exp-0');

  const activeExp = experiences?.find((e) => e.id === activeExpId) || experiences?.[0];

  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase shadow-lg shadow-cyan-500/10">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            Industry & Specialization Track
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Work & Training <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Founder & Lead Developer at Jovix software startup, enterprise full-stack engineering at NALCO, and AI/ML specialization.
          </p>
        </div>

        {/* Experience Layout: Tabs + Detailed View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Navigation Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {experiences?.map((exp) => {
              const isActive = exp.id === activeExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'bg-slate-900 border-cyan-500/70 text-white shadow-xl shadow-cyan-500/20 translate-x-1'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {exp.logo ? (
                      <div className="w-11 h-11 rounded-2xl overflow-hidden border border-cyan-500/40 p-1 bg-slate-900 shrink-0 shadow-md flex items-center justify-center">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full rounded-xl object-contain bg-white dark:bg-slate-900 p-0.5"
                        />
                      </div>
                    ) : (
                      <div className="w-11 h-11 rounded-2xl bg-slate-950 border border-indigo-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                        <Building className="w-5 h-5" />
                      </div>
                    )}
                    <div className="space-y-0.5">
                      <h4 className="font-heading font-bold text-sm leading-tight">{exp.role}</h4>
                      <p className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                        {exp.logo && (
                          <img src={exp.logo} alt={exp.company} className="w-4 h-4 object-contain rounded-md bg-white dark:bg-slate-900 p-0.5 border border-slate-700 inline-block shrink-0 shadow-xs" />
                        )}
                        <span>{exp.company}</span>
                      </p>
                      <p className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                        <Calendar className="w-3 h-3 text-cyan-400" /> {exp.period}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Card */}
          <div className="lg:col-span-8">
            {activeExp && (
              <div className="glass-panel rounded-3xl p-8 space-y-6 border border-slate-800 bg-slate-900/80 shadow-2xl animate-in fade-in duration-300">
                
                {/* Role Header */}
                <div className="flex flex-wrap justify-between items-start gap-4 pb-6 border-b border-slate-800">
                  <div className="flex items-start gap-4">
                    {activeExp.logo ? (
                      <div className="w-16 h-16 rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 shrink-0 shadow-lg shadow-cyan-500/25">
                        <div className="w-full h-full rounded-[14px] bg-white dark:bg-slate-900 p-2 flex items-center justify-center overflow-hidden">
                          <img
                            src={activeExp.logo}
                            alt={activeExp.company}
                            className="w-full h-full object-contain rounded-xl"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-md">
                        <Building className="w-7 h-7" />
                      </div>
                    )}

                    <div className="space-y-1">
                      <span className="px-3 py-1 rounded-full bg-slate-950 border border-indigo-500/40 text-xs font-mono font-bold text-indigo-300">
                        {activeExp.type}
                      </span>
                      <h3 className="text-2xl font-heading font-bold text-white pt-1">{activeExp.role}</h3>
                      <p className="text-sm font-bold text-cyan-400 flex items-center gap-2 pt-0.5">
                        {activeExp.logo ? (
                          <img src={activeExp.logo} alt={activeExp.company} className="w-5 h-5 object-contain rounded-md bg-white dark:bg-slate-900 p-0.5 border border-slate-700 inline-block shadow-sm shrink-0" />
                        ) : (
                          <Building className="w-4 h-4 text-indigo-400" />
                        )}
                        <span className="text-base font-extrabold">{activeExp.company}</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 text-right font-mono text-xs text-slate-400">
                    <p className="flex items-center justify-end gap-1.5 text-cyan-300 font-bold">
                      <Calendar className="w-4 h-4 text-cyan-400" /> {activeExp.period}
                    </p>
                    <p className="flex items-center justify-end gap-1.5 text-rose-400 font-semibold">
                      <MapPin className="w-4 h-4 text-rose-400" /> {activeExp.location}
                    </p>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">Key Accomplishments & Responsibilities</h4>
                  <ul className="space-y-3">
                    {activeExp.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="pt-6 border-t border-slate-800 space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">Tech Stack Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeExp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-cyan-300 shadow-sm hover:border-cyan-500/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
