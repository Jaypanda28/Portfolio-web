import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Users, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function AchievementsSection({ achievements }) {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            Leadership & Competitions
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key <span className="text-gradient-gold">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            National hackathon leadership, tech community building, and state-level innovation recognition.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements?.map((ach, idx) => {
            const icons = [
              <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
              <Users className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
              <Lightbulb className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            ];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="glass-panel-interactive rounded-3xl p-8 space-y-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 flex flex-col justify-between shadow-lg hover:shadow-2xl"
              >
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 w-fit shadow-inner">
                      {icons[idx % icons.length]}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800 text-xs font-mono font-bold text-amber-800 dark:text-amber-300">
                      {ach.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">{ach.title}</h3>
                    <p className="text-xs font-mono text-indigo-700 dark:text-indigo-400 font-bold">{ach.date}</p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> Verified Credentials
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
