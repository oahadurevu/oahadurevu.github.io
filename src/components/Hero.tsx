import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown, FileText, Sparkles } from 'lucide-react';
import { profile } from '@/data';

const codeLines = [
  { text: 'const evu = {', indent: 0 },
  { text: 'role: "CSE Student",', indent: 1 },
  { text: 'focus: ["Software", "AI/ML", "Robotics"],', indent: 1 },
  { text: 'building: true,', indent: 1 },
  { text: 'learning: "always"', indent: 1 },
  { text: '};', indent: 0 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 sm:pt-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/40 via-ink-950 to-ink-950" />
      <div className="absolute left-1/4 top-1/4 -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px] animate-float-slow" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px] animate-float-slower" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/10 blur-[140px] animate-pulse-glow" />

      <div className="container-max px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-cyan-300/90"
            >
              <Sparkles size={14} />
              {profile.headline}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Hi, I'm{' '}
              <span className="text-gradient animate-gradient bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Oahadur Rahman Evu
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base text-slate-400 sm:text-lg"
            >
              Computer Science & Engineering student passionate about building
              practical software, intelligent systems, and technology-driven
              solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-transform hover:scale-[1.03]"
              >
                View My Projects
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <FileText size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                Let's Connect
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-300"
              >
                <Github size={18} />
                {profile.githubHandle}
              </a>
              <span className="h-4 w-px bg-white/10" />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-300"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right: animated terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="glass-strong rounded-2xl p-1 shadow-2xl shadow-blue-500/10">
              <div className="rounded-xl bg-ink-900/80 p-4">
                {/* Terminal header */}
                <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  <span className="ml-2 font-mono text-xs text-slate-500">
                    evu@portfolio: ~
                  </span>
                </div>
                {/* Terminal body */}
                <div className="mt-3 font-mono text-sm">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.15 }}
                      className="flex"
                    >
                      <span className="mr-3 select-none text-cyan-500/50">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="text-slate-300"
                        style={{ paddingLeft: `${line.indent * 16}px` }}
                      >
                        {line.text}
                      </span>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-2 flex items-center text-cyan-400"
                  >
                    <span className="mr-2">$</span>
                    <span className="h-4 w-2 bg-cyan-400 animate-blink" />
                  </motion.div>
                </div>
              </div>
            </div>
            {/* Glow behind terminal */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-blue-600/10 to-cyan-500/10 blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
