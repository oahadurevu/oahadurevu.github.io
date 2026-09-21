import { motion } from 'framer-motion';
import {
  Lightbulb,
  Brain,
  Cpu,
  Code2,
  BrainCircuit,
  Palette,
  type LucideIcon,
} from 'lucide-react';
import { experienceItems } from '@/data';
import SectionHeading, { Reveal } from './SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  'Team Project': Lightbulb,
  Hackathon: Brain,
  Robotics: Cpu,
  Software: Code2,
  'AI/ML': BrainCircuit,
  Design: Palette,
};

export default function Experience() {
  return (
    <section id="experience" className="relative section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow="Practical Experience"
          title="Hands-on work, not just coursework"
          description="Projects, hackathons, robotics, and product development — the real building blocks."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experienceItems.map((item, i) => {
            const Icon = iconMap[item.type] ?? Code2;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group glass h-full rounded-2xl p-6 transition-colors hover:border-blue-400/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 text-blue-300 transition-transform group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs font-medium text-slate-400">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
