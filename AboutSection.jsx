import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Cpu, Award, Code, Sparkles, Layers, Brain, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ education, profile }) {
  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Cloud Computing"
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="py-24 relative z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            Background & Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="text-gradient">Jaynarayan</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Dedicated Computer Science student with specialized AI/ML training, full-stack software development experience, and proven AI hackathon leadership.
          </p>
        </motion.div>

        {/* Top Grid: Bio Summary & Quick Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Detailed Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel-interactive rounded-3xl p-8 space-y-6 flex flex-col justify-between bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">AI/ML & Systems Engineer</h3>
                  <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold">Core CS & Intelligent Systems Development</p>
                </div>
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {profile?.summary}
              </p>
            </div>

            {/* Coursework Tags */}
            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-mono text-indigo-700 dark:text-indigo-400 uppercase tracking-widest font-bold flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Metrics / Key Strengths Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            
            <motion.div whileHover={{ scale: 1.03 }} className="glass-panel-interactive rounded-3xl p-6 flex flex-col justify-between space-y-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-md">
              <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 w-fit">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-3xl font-heading font-black text-slate-900 dark:text-white">8.56</span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400"> / 10 CGPA</span>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">GITA Autonomous College</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">B.Tech Computer Science (2023-2027)</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="glass-panel-interactive rounded-3xl p-6 flex flex-col justify-between space-y-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-md">
              <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-800 text-purple-600 dark:text-purple-400 w-fit">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-3xl font-heading font-black text-slate-900 dark:text-white">SIH</span>
                <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-bold"> Team Leader</span>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">Rockfall AI System</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">LSTM Neural Network & Sensors</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="glass-panel-interactive rounded-3xl p-6 flex flex-col justify-between space-y-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-md">
              <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-100 dark:border-cyan-800 text-cyan-600 dark:text-cyan-400 w-fit">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <span className="text-3xl font-heading font-black text-slate-900 dark:text-white">3+</span>
                <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold"> Core Roles</span>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">OCAC & NALCO</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">AI/ML & Systems Engineer Intern</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="glass-panel-interactive rounded-3xl p-6 flex flex-col justify-between space-y-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-md">
              <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-100 dark:border-amber-800 text-amber-600 dark:text-amber-400 w-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-3xl font-heading font-black text-slate-900 dark:text-white">10+</span>
                <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold"> Events</span>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">GDG Bhubaneswar</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Active Community Organiser</p>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* Education Details Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">Education Details</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education?.map((edu, idx) => (
              <motion.div
                key={edu.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel-interactive rounded-3xl p-6 space-y-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-md"
              >
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300">
                    {edu.period}
                  </span>
                  <span className="text-xs font-bold font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800">
                    {edu.score}
                  </span>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white">{edu.institution}</h4>
                  <p className="text-xs text-cyan-700 dark:text-cyan-400 font-mono font-bold mt-0.5">{edu.degree}</p>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
