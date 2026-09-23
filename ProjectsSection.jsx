import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Eye } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function ProjectsSection({ projects }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI / Deep Learning', 'Computer Vision & AI', 'AI / Full-Stack', 'Enterprise Full-Stack'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects?.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase shadow-lg shadow-cyan-500/10">
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
            AI & Software Engineering Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">AI Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            SIH award-winning LSTM telemetry systems, real-time YOLOv8 biometric vision, LLM diagnostic tools, and enterprise full-stack apps.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects?.map((proj) => {
            return (
              <div
                key={proj.id}
                className="glass-panel-interactive rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80 flex flex-col justify-between group shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-cyan-500/60"
              >
                {/* Image & Overlay */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                  <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-slate-950/90 border border-indigo-500/40 text-[11px] font-mono font-bold text-indigo-300 backdrop-blur-md shadow-lg">
                    {proj.category}
                  </span>

                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-300 font-semibold truncate drop-shadow">{proj.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono font-bold text-cyan-300 hover:border-cyan-500/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Bar */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Eye className="w-4 h-4" /> View Details
                    </button>

                    <div className="flex items-center gap-2">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-slate-950 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/50 transition-all"
                          title="GitHub Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-indigo-600/20 text-indigo-300 hover:text-white border border-indigo-500/40 hover:bg-indigo-600/40 transition-all"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
