import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { navLinks, profile } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(`#${id}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-5 sm:px-8 lg:px-12">
        <button
          onClick={() => handleNav('#home')}
          className="group flex items-center gap-2.5"
          aria-label="Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 font-bold text-white shadow-lg shadow-blue-500/20">
            E
          </span>
          <span className="hidden font-semibold text-white sm:block">
            Oahadur<span className="text-cyan-400">.</span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'text-cyan-300'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-md bg-white/[0.06]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-max mx-auto mt-3 grid gap-1 px-5 pb-4 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active === link.href
                        ? 'bg-white/[0.06] text-cyan-300'
                        : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2 flex gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 py-3 text-sm text-slate-300"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 py-3 text-sm text-slate-300"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
