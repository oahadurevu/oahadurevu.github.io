import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { profile } from '@/data';
import SectionHeading, { Reveal } from './SectionHeading';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  // Your real professional email
  const contactEmail = 'mdoahadrrahmanevu@gmail.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${form.name}`;

    const body = `Hello Oahadur,

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
`;

    // Open the visitor's email app with the message prepared
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({
        name: '',
        email: '',
        message: '',
      });
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
          {/* Left: Contact Information */}
          <Reveal>
            <div className="glass h-full rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">
                Get in touch
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Whether it's a project idea, internship opportunity, or just a
                hello — I'd love to hear from you.
              </p>

              <div className="mt-6 space-y-3">
                {/* Email */}
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                >
                  <Mail
                    size={18}
                    className="shrink-0 text-cyan-400"
                  />

                  <span className="text-sm text-slate-300">
                    {contactEmail}
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <MapPin
                    size={18}
                    className="shrink-0 text-cyan-400"
                  />

                  <span className="text-sm text-slate-300">
                    Rajshahi, Bangladesh
                  </span>
                </div>

                {/* GitHub */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                >
                  <Github
                    size={18}
                    className="shrink-0 text-cyan-400"
                  />

                  <span className="text-sm text-slate-300">
                    @{profile.githubHandle}
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                >
                  <Linkedin
                    size={18}
                    className="shrink-0 text-cyan-400"
                  />

                  <span className="text-sm text-slate-300">
                    View LinkedIn Profile
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: Contact Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="grid gap-4">
                {/* Name */}
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
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-400/40 focus:bg-white/[0.05]"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
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
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-400/40 focus:bg-white/[0.05]"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
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
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-400/40 focus:bg-white/[0.05]"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={sent}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 size={16} />
                      Opening Email...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Small helper text */}
                <p className="text-center text-xs text-slate-500">
                  Your message will open in your default email app.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
