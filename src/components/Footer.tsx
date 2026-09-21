import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile, navLinks } from '@/data';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="container-max px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-white">
              Md. Oahadur Rahman Evu
            </h3>
            <p className="mt-2 max-w-xs text-sm text-slate-400">
              {profile.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Navigate
            </h4>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Connect
            </h4>
            <div className="mt-3 flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-500">{profile.location}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 Md. Oahadur Rahman Evu. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
