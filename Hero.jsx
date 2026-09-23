import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Brain, Sparkles, Award, Github, Linkedin, Mail, MapPin, ChevronDown, Download, Eye as VisionIcon, Code2, Zap } from 'lucide-react';

export default function Hero({ profile, stats, onDownloadResume }) {
  const canvasRef = useRef(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "AI / ML Engineer",
    "Python & Data Science Specialist",
    "Deep Learning & Computer Vision Architect",
    "Smart India Hackathon Team Leader",
    "Full-Stack Intelligent Systems Developer"
  ];

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  // Glowing Cyber Particle Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(Math.floor(width / 16), 85);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2.5 + 1.2,
      color: Math.random() > 0.6 
        ? 'rgba(56, 189, 248, 0.7)' 
        : Math.random() > 0.3 
        ? 'rgba(192, 132, 252, 0.7)' 
        : 'rgba(52, 211, 153, 0.7)'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(129, 140, 248, ${0.25 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.9;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-slate-950 text-slate-100">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Cyber Glowing Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[550px] h-[550px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-lg shadow-cyan-500/10 backdrop-blur-md animate-float">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-mono font-bold text-cyan-300 tracking-wider uppercase">Available for AI/ML & Software Roles</span>
              <Sparkles className="w-4 h-4 text-purple-400 animate-spin-slow" />
            </div>

            {/* Greeting & Name */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
                <Code2 className="w-4 h-4 text-indigo-400" />
                <span>Hello World! I am</span>
              </h2>
              <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight leading-tight text-white">
                JAYNARAYAN <br />
                <span className="text-gradient">PANDA</span>
              </h1>
            </div>

            {/* Dynamic Typing Title */}
            <div className="h-14 flex items-center">
              <span className="text-xl sm:text-3xl font-mono text-cyan-300 font-bold drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                {displayText}
                <span className="animate-pulse text-indigo-400 font-bold">|</span>
              </span>
            </div>

            {/* Short Bio Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal drop-shadow">
              Computer Science undergraduate at <span className="text-indigo-400 font-bold">GITA Autonomous College</span> (CGPA: <span className="text-emerald-400 font-bold">8.6/10</span>) specializing in <span className="text-cyan-300 font-bold">AI/ML Engineering</span>, <span className="text-purple-400 font-bold">Computer Vision (OpenCV & YOLOv8)</span>, and <span className="text-amber-400 font-bold">Python Data Science</span>. Smart India Hackathon (SIH) Team Leader.
            </p>

            {/* Location & Quick Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300 pt-1">
              <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800 shadow-md hover:border-cyan-500/50 transition-colors">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Bhubaneswar, Odisha, India</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800 shadow-md hover:border-purple-500/50 transition-colors">
                <Award className="w-4 h-4 text-amber-400" />
                <span>B.Tech CSE (2023 - 2027)</span>
              </div>
            </div>

            {/* CTA Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="btn-glow inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold rounded-xl text-white transition-all shadow-xl"
              >
                View AI Projects <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onDownloadResume}
                className="btn-cyber inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold rounded-xl text-cyan-300 hover:text-white transition-all shadow-lg"
              >
                <Download className="w-4 h-4 text-cyan-400" /> Download Resume
              </button>

              <div className="flex items-center gap-2.5 pl-2">
                <a
                  href={profile?.github || "https://github.com/Jaypanda28"}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/60 transition-all hover:scale-110 shadow-md"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profile?.linkedin || "https://www.linkedin.com/in/jaynarayan-panda-8531831b6"}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/60 transition-all hover:scale-110 shadow-md"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${profile?.email || "pandajaynarayan49@gmail.com"}`}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/60 transition-all hover:scale-110 shadow-md"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: User Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Spinning Neon Animated Glow Ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-500 via-purple-600 to-emerald-400 rounded-[2.5rem] blur-xl opacity-60 animate-pulse-glow"></div>

              {/* Obsidian Cyber Photo Card */}
              <div className="relative glass-panel rounded-[2.2rem] p-6 space-y-6 border border-slate-800 shadow-2xl bg-slate-950/90 backdrop-blur-xl animate-border-glow">
                
                {/* Photo Container with Cyber Frame */}
                <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-inner group">
                  <img
                    src="/jaynarayan.jpg"
                    alt="Jaynarayan Panda"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <h3 className="font-heading font-extrabold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">Jaynarayan Panda</h3>
                      <p className="text-xs font-mono text-cyan-300 font-semibold drop-shadow">AI/ML Engineer & Systems Specialist</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-emerald-500/50 text-xs font-mono font-bold text-emerald-400 shadow-lg flex items-center gap-1">
                      <Zap className="w-3 h-3 text-emerald-400" /> CGPA 8.6
                    </span>
                  </div>
                </div>

                {/* Quick Highlights Row */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 transition-all group">
                    <div className="flex items-center gap-2 text-indigo-400 mb-1">
                      <Brain className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-bold uppercase font-mono text-indigo-300">Python AI/ML</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">TensorFlow, PyTorch, Keras</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 transition-all group">
                    <div className="flex items-center gap-2 text-cyan-400 mb-1">
                      <VisionIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-bold uppercase font-mono text-cyan-300">Computer Vision</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">OpenCV, YOLOv8, SORT</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
        <a href="#about" className="flex flex-col items-center text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors">
          <span>Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
}
