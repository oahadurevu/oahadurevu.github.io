import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { navLinks, profile } from '@/data';
import profileImage from '../assets/WhatsApp Image .jpeg';

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

        {/* =========================
            LOGO + PROFILE IMAGE
        ========================== */}
        <button
          onClick={() => handleNav('#home')}
          className="group flex items-center gap-3"
          aria-label="Home"
        >

          {/* Profile Image + Neon Ring */}
          <div className="relative flex h-11 w-11 items-center justify-center">

            {/* Rotating neon ring */}
            <motion.div
              className="absolute inset-[-3px] rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, #06b6d4, #3b82f6, #22d3ee, #8b5cf6, #06b6d4)',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Outer neon glow */}
            <motion.div
              className="absolute inset-[-6px] rounded-full bg-cyan-400/30 blur-md"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [0.95, 1.08, 0.95],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Dark border behind image */}
            <div className="relative z-10 h-11 w-11 rounded-full bg-ink-950 p-[2px]">

              {/* Profile Picture */}
              <img
                src={profileImage}
                alt="Oahadur Rahman Evu"
                className="h-full w-full rounded-full object-cover"
              />

            </div>

            {/* Small moving neon dot */}
            <motion.span
              className="absolute -right-1 top-0 z-20 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_3px_rgba(34,211,238,0.8)]"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

          </div>

          {/* Name */}
          <span className="hidden font-semibold text-white sm:block">
            EVU<span className="text-cyan-400"></span>
          </span>
        </button>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
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

                {/* Active navigation background */}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-md bg-white/[0.06]"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

              </button>

            </li>
          ))}

        </ul>

        {/* =========================
            GITHUB + LINKEDIN
        ========================== */}
        <div className="hidden items-center gap-2 lg:flex">

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-cyan-400/40 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-cyan-400/40 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </nav>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <AnimatePresence>

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden lg:hidden"
          >

            <ul className="container-max mx-auto mt-3 grid gap-1 px-5 pb-4 sm:px-8">

              {/* Mobile navigation links */}
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

              {/* Mobile social buttons */}
              <li className="mt-2 flex gap-2">

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 py-3 text-sm text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Github size={16} />
                  GitHub
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 py-3 text-sm text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>

              </li>

            </ul>

          </motion.div>
        )}

      </AnimatePresence>

    </header>
  );
}
