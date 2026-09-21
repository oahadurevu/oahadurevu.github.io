import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  BrainCircuit,
  Server,
  Database,
  Network,
  MonitorSmartphone,
  Cpu,
  Palette,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '@/data';
import SectionHeading, { Reveal } from './SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  BrainCircuit,
  Server,
  Database,
  Network,
  MonitorSmartphone,
  Cpu,
  Palette,
};

export default function Skills() {
  return (
    <section id="skills" className="relative section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools I work with"
          description="Organized by domain — honest about where I am on each."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <Reveal key={cat.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group glass h-full rounded-2xl p-6 transition-colors hover:border-cyan-400/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-300 transition-transform group-hover:scale-110">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/30 hover:bg-cyan-500/5 hover:text-cyan-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
