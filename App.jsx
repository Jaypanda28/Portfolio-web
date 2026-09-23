import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import AIChatWidget from './components/AIChatWidget';
import WhatsAppWidget from './components/WhatsAppWidget';
import { Heart } from 'lucide-react';

export default function App() {
  const [data, setData] = useState(null);
  const [stats, setStats] = useState({ views: 1640, projectLikes: 435 });
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  // Load Theme Preference & Apply Class
  useEffect(() => {
    const savedTheme = localStorage.getItem('jaynarayan_theme') || 'light';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('jaynarayan_theme', nextTheme);
  };

  // Fetch Portfolio Data & Stats on Mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await fetch('/api/stats');
        const statsJson = await statsRes.json();
        if (statsJson.stats) setStats(statsJson.stats);

        const dataRes = await fetch('/api/portfolio-data');
        const dataJson = await dataRes.json();
        if (dataJson.data) setData(dataJson.data);
      } catch (err) {
        console.error('Failed to load portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLikeProject = async (projectId) => {
    try {
      const res = await fetch(`/api/projects/${projectId}/like`, { method: 'POST' });
      const json = await res.json();
      if (json.success) {
        setData((prev) => {
          if (!prev) return prev;
          const updatedProjects = prev.projects.map((p) =>
            p.id === projectId ? { ...p, likes: json.likes } : p
          );
          return { ...prev, projects: updatedProjects };
        });
        setStats((prev) => ({ ...prev, projectLikes: json.totalLikes }));
      }
    } catch (err) {
      console.error('Error liking project:', err);
    }
  };

  const handleSendMessage = async (msgData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(msgData)
      });
      const json = await res.json();
      if (json.success) {
        setData((prev) => ({
          ...prev,
          messages: [json.data, ...(prev?.messages || [])]
        }));
      }
    } catch (err) {
      console.error('Error sending message:', err);
    }
  };

  const handleDownloadResume = () => {
    window.open('/api/download-resume', '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center space-y-4 text-white">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-cyan-500/20 border-b-cyan-400 animate-spin" style={{ animationDirection: 'reverse' }}></div>
        </div>
        <span className="font-mono text-xs text-indigo-300 tracking-widest uppercase animate-pulse">
          Loading Jaynarayan's AI Portfolio...
        </span>
      </div>
    );
  }

  const profile = data?.profile;
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Navigation */}
      <Navbar
        onDownloadResume={handleDownloadResume}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Sections */}
      <main>
        <Hero profile={profile} stats={stats} onDownloadResume={handleDownloadResume} />
        <AboutSection education={data?.education} profile={profile} />
        <ExperienceSection experiences={data?.experiences} />
        <SkillsSection skills={data?.skills} />
        <ProjectsSection projects={data?.projects} onLikeProject={handleLikeProject} />
        <AchievementsSection achievements={data?.achievements} />
        <ContactSection profile={profile} messages={data?.messages} onSendMessage={handleSendMessage} />
      </main>

      {/* Direct Floating WhatsApp Chat Button */}
      <WhatsAppWidget />

      {/* AI Assistant Floating Widget */}
      <AIChatWidget />

      {/* Footer */}
      <footer className={`py-8 border-t text-center text-xs font-mono space-y-2 ${
        isDark ? 'border-slate-900 bg-slate-950 text-slate-500' : 'border-slate-200 bg-slate-100 text-slate-600'
      }`}>
        <div className="flex items-center justify-center gap-2">
          <span>Crafted for</span>
          <span className="font-bold text-indigo-600">Jaynarayan Panda</span>
          <span>with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
        </div>
        <p className="text-[11px] text-slate-500">
          Powered by React, Express API, & Persistent Database &bull; GITA Autonomous College (CGPA: 8.56)
        </p>
      </footer>

    </div>
  );
}
