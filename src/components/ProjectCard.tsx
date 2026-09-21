import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Lightbulb, Wrench, User, Tag } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    type: string;
    description: string;
    features: string[];
    problem: string;
    solution: string;
    technologies: string[];
    contribution: string;
    live: string | null;
    github: string | null;
    featured: boolean;
    accent: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 200, damping: 20 });
  const glareX = useTransform(ry, [-0.15, 0.15], ['0%', '100%']);
  const glareY = useTransform(rx, [-0.15, 0.15], ['0%', '100%']);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 0.15);
    rx.set(-py * 0.15);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900/60"
      >
        {/* Accent gradient header */}
        <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${project.accent}`}>
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-5xl font-bold text-white/10">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          {project.featured && (
            <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
              Featured
            </span>
          )}
          {/* Glare */}
          <motion.div
            className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([x, y]) =>
                  `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.15), transparent 50%)`
              ),
            }}
          />
        </div>

        {/* Body */}
        <div className="p-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-cyan-300/80">
            <Tag size={11} />
            {project.type}
          </span>
          <h3 className="mt-3 text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {project.description}
          </p>

          {/* Expandable details */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            {expanded ? 'Show less' : 'Show details'}
          </button>

          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 space-y-4 overflow-hidden"
            >
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300/80">
                  <Lightbulb size={13} /> Problem
                </h4>
                <p className="mt-1 text-sm text-slate-400">{project.problem}</p>
              </div>
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300/80">
                  <Wrench size={13} /> Solution
                </h4>
                <p className="mt-1 text-sm text-slate-400">{project.solution}</p>
              </div>
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300/80">
                  <User size={13} /> My Contribution
                </h4>
                <p className="mt-1 text-sm text-slate-400">{project.contribution}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Key Features
                </h4>
                <ul className="mt-2 grid gap-1">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-slate-400"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Tech tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-xs text-slate-400"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-5 flex gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <Github size={14} /> GitHub
              </a>
            )}
            {!project.live && !project.github && (
              <span className="text-xs text-slate-500">
                Concept / Prototype — link coming soon
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
