import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Master Verified Logo Database matching Jaynarayan's complete tech stack
  const techLogos = [
    // 1. AI & Machine Learning
    { title: 'Python', category: 'AI & ML', sub: 'Primary AI Language', logo: 'https://cdn.simpleicons.org/python/3776AB' },
    { title: 'TensorFlow', category: 'AI & ML', sub: 'LSTM & Neural Nets', logo: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
    { title: 'PyTorch', category: 'AI & ML', sub: 'Deep Learning Models', logo: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
    { title: 'Keras', category: 'AI & ML', sub: 'Sequential Architectures', logo: 'https://cdn.simpleicons.org/keras/D00000' },
    { title: 'Scikit-Learn', category: 'AI & ML', sub: 'ML Classification & Reg', logo: 'https://cdn.simpleicons.org/scikitlearn/F7931E' },
    
    // 2. Computer Vision & Data Science
    { title: 'OpenCV', category: 'Computer Vision', sub: 'Computer Vision & Landmark', logo: 'https://cdn.simpleicons.org/opencv/5C3EE8' },
    { title: 'YOLOv8', category: 'Computer Vision', sub: 'Real-time Object Detection', logo: 'https://cdn.simpleicons.org/yolo/00FFFF' },
    { title: 'NumPy', category: 'Data Science', sub: 'High-Perf Array Math', logo: 'https://cdn.simpleicons.org/numpy/013243' },
    { title: 'Pandas', category: 'Data Science', sub: 'Data Wrangling & Analysis', logo: 'https://cdn.simpleicons.org/pandas/150458' },
    { title: 'Matplotlib', category: 'Data Science', sub: 'Data Visualization & Plots', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },

    // 3. Frontend & Languages
    { title: 'HTML5', category: 'Frontend Dev', sub: 'Web Layout & Semantics', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
    { title: 'CSS3', category: 'Frontend Dev', sub: 'Modern Styling & Tailwind', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    { title: 'JavaScript', category: 'Frontend Dev', sub: 'Modern ES6+ Web Logic', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { title: 'React.js', category: 'Frontend Dev', sub: 'Single Page Applications', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
    { title: 'Next.js', category: 'Frontend Dev', sub: 'Full-Stack SSR React', logo: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },

    // 4. Backend Development
    { title: 'Node.js', category: 'Backend Dev', sub: 'Server Runtime', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { title: 'Express.js', category: 'Backend Dev', sub: 'RESTful API Services', logo: 'https://cdn.simpleicons.org/express/ffffff' },
    { title: 'Flask', category: 'Backend Dev', sub: 'Python Micro Microservices', logo: 'https://cdn.simpleicons.org/flask/ffffff' },
    { title: 'Java', category: 'Backend Dev', sub: 'OOP & Enterprise Backend', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { title: 'C Language', category: 'Backend Dev', sub: 'Systems & Memory Ops', logo: 'https://cdn.simpleicons.org/c/A8B9CC' },

    // 5. Databases & Cloud / DevOps
    { title: 'MS SQL Server', category: 'Databases & Cloud', sub: 'Relational DB Platform', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { title: 'Supabase', category: 'Databases & Cloud', sub: 'PostgreSQL & Realtime Auth', logo: 'https://cdn.simpleicons.org/supabase/3FCF8E' },
    { title: 'MongoDB', category: 'Databases & Cloud', sub: 'NoSQL Document Store', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { title: 'AWS', category: 'Databases & Cloud', sub: 'Cloud EC2 & S3 Hosting', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { title: 'GCP', category: 'Databases & Cloud', sub: 'Google Cloud AI Infrastructure', logo: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
    { title: 'Docker', category: 'Databases & Cloud', sub: 'Containerized Deployment', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
    { title: 'Firebase', category: 'Databases & Cloud', sub: 'Realtime Cloud Backend', logo: 'https://cdn.simpleicons.org/firebase/DD2C00' },

    // 6. Tools & Environments
    { title: 'Git', category: 'Tools & Concepts', sub: 'Distributed Version Control', logo: 'https://cdn.simpleicons.org/git/F05032' },
    { title: 'GitHub', category: 'Tools & Concepts', sub: 'CI/CD & Code Repositories', logo: 'https://cdn.simpleicons.org/github/ffffff' },
    { title: 'VS Code', category: 'Tools & Concepts', sub: 'Primary Developer IDE', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg' },
    { title: 'Jupyter', category: 'Tools & Concepts', sub: 'Data Science & Notebooks', logo: 'https://cdn.simpleicons.org/jupyter/F37626' },
    { title: 'Google Colab', category: 'Tools & Concepts', sub: 'Cloud GPU Model Training', logo: 'https://cdn.simpleicons.org/googlecolab/F9AB00' }
  ];

  const categories = ['All', 'AI & ML', 'Computer Vision', 'Data Science', 'Frontend Dev', 'Backend Dev', 'Databases & Cloud', 'Tools & Concepts'];

  const filteredLogos = activeCategory === 'All'
    ? techLogos
    : techLogos.filter(t => t.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-purple-500/40 text-purple-400 text-xs font-mono font-bold tracking-wider uppercase shadow-lg shadow-purple-500/10">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Official Technology Stack & Logos
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Technology <span className="text-gradient">Logos & Stack</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            Complete official technology logos matching Jaynarayan's exact resume skills across Artificial Intelligence, Computer Vision, Data Science, and Web Engineering.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Logo Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredLogos.map((tech) => (
            <div
              key={tech.title}
              className="glass-panel-interactive rounded-3xl p-5 flex flex-col items-center justify-between space-y-3 border border-slate-800 bg-slate-900/80 hover:border-cyan-400 group text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Logo Container */}
              <div className="relative w-14 h-14 flex items-center justify-center p-2.5 rounded-2xl bg-slate-950 group-hover:bg-cyan-500/10 transition-colors shadow-inner border border-slate-800/80 group-hover:border-cyan-500/40">
                <img
                  src={tech.logo}
                  alt={tech.title}
                  className="w-full h-full object-contain group-hover:scale-115 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://cdn.simpleicons.org/python/3776AB';
                  }}
                />
              </div>

              {/* Technology Details */}
              <div className="space-y-1 w-full pt-1">
                <h4 className="font-heading font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                  {tech.title}
                </h4>
                <p className="text-[10px] font-mono text-cyan-400 font-bold truncate" title={tech.sub}>
                  {tech.sub}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
