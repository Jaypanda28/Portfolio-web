import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Sparkles, Linkedin, Github, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ profile, messages, onSendMessage }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [lastSubmitted, setLastSubmitted] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    try {
      await onSendMessage(formData);
      setLastSubmitted({ ...formData });
      setSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });

      setTimeout(() => setSubmittedSuccess(false), 8000);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase shadow-lg shadow-cyan-500/10">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Connect With <span className="text-gradient">Jaynarayan</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Have an AI/ML engineering role, project inquiry, or technical collaboration? Send a message directly to Jaynarayan's database.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-3xl p-8 space-y-6 border border-slate-800 bg-slate-900/80 shadow-2xl">
              <h3 className="text-2xl font-heading font-bold text-white">Contact Information</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                Feel free to reach out for AI/ML Engineering opportunities, Deep Learning research, or Full-Stack projects.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${profile?.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/60 transition-all group shadow-inner"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-bold">Email</span>
                    <p className="text-sm font-bold text-white group-hover:text-cyan-300">{profile?.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${profile?.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/60 transition-all group shadow-inner"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-bold">Phone</span>
                    <p className="text-sm font-bold text-white group-hover:text-cyan-300">{profile?.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner">
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-bold">Location</span>
                    <p className="text-sm font-bold text-white">{profile?.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={profile?.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-indigo-400" /> LinkedIn
                </a>
                <a
                  href={profile?.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>

            {/* Live Guestbook Section */}
            <div className="glass-panel rounded-3xl p-6 space-y-4 border border-slate-800 bg-slate-900/80 shadow-xl">
              <h4 className="text-sm font-heading font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" /> Recent Guestbook Messages
              </h4>

              <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                {messages?.map((msg) => (
                  <div key={msg.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-cyan-300 font-mono">{msg.name}</span>
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {new Date(msg.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 italic">"{msg.message}"</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 space-y-6 border border-slate-800 bg-slate-900/80 shadow-2xl">
              
              <div className="space-y-2">
                <h3 className="text-2xl font-heading font-bold text-white">Send a Direct Message</h3>
                <p className="text-xs font-mono text-cyan-400 font-bold">Connected to Express Backend & Database</p>
              </div>

              {submittedSuccess && (
                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-sm space-y-3 animate-in fade-in">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Thank you! Your message has been submitted successfully.</p>
                      <p className="text-xs text-emerald-200 mt-1">
                        Your message was saved to Jaynarayan's database and routed to <span className="underline font-mono text-cyan-300">pandajaynarayan49@gmail.com</span>.
                      </p>
                    </div>
                  </div>
                  {lastSubmitted && (
                    <div className="pt-2 border-t border-emerald-500/20">
                      <a
                        href={`mailto:pandajaynarayan49@gmail.com?subject=${encodeURIComponent(lastSubmitted.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Jaynarayan,\n\n${lastSubmitted.message}\n\nFrom: ${lastSubmitted.name} (${lastSubmitted.email})`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/50 text-xs text-emerald-100 transition-colors font-mono"
                      >
                        <Mail className="w-3.5 h-3.5 text-emerald-300" />
                        Also send via your Mail App to pandajaynarayan49@gmail.com
                      </a>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-300">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. AI/ML Engineering Role / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-300">Message *</label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-glow w-full flex items-center justify-center gap-2 py-4 text-sm font-bold rounded-xl text-white shadow-xl transition-all"
                >
                  {submitting ? (
                    <span>Sending to Database...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
