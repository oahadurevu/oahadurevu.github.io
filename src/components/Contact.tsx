import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { profile } from '@/data';
import SectionHeading, { Reveal } from './SectionHeading';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend configured — this is a UI-only form.
    // Messages are not actually delivered.
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative section-pad">
      <div className="absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="container-max">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Open to internships, collaboration, and project opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: contact info */}
          <Reveal>
            <div className="glass h-full rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">Get in touch</h3>
              <p className="mt-2 text-sm text-slate-400">
                Whether it's a project idea, internship opportunity, or just a
                hello — I'd love to hear from you.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-cyan-400/20"
                >
                  <Mail size={18} className="text-cyan-400" />
                  <span className="text-sm text-slate-300">{profile.email}</span>
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <MapPin size={18} className="text-cyan-400" />
                  <span className="text-sm text-slate-300">
                    {profile.location}
                  </span>
                </div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-cyan-400/20"
                >
                  <Github size={18} className="text-cyan-400" />
                  <span className="text-sm text-slate-300">
                    @{profile.githubHandle}
                  </span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-cyan-400/20"
                >
                  <Linkedin size={18} className="text-cyan-400" />
                  <span className="text-sm text-slate-300">LinkedIn</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="grid gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-400/40 focus:bg-white/[0.05]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-400/40 focus:bg-white/[0.05]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-400/40 focus:bg-white/[0.05]"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sent}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-transform hover:scale-[1.02] disabled:opacity-70"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 size={16} /> Message ready
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-500">
                  Note: This form is a UI demo. To reach me directly, please use
                  email or LinkedIn.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
