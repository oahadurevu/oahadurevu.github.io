import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { studyAreas } from '@/data';
import SectionHeading, { Reveal } from './SectionHeading';

export default function WhatIStudy() {
  return (
    <section id="study" className="relative section-pad">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="container-max">
        <SectionHeading
          eyebrow="What I Study"
          title="Academic foundations"
          description="The core CS subjects shaping my technical thinking."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {studyAreas.map((area, i) => (
            <Reveal key={area} delay={i * 0.04}>
              <motion.div
                whileHover={{ x: 4 }}
                className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-cyan-400/20 hover:bg-white/[0.04]"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/15 to-cyan-500/15 text-cyan-300 transition-transform group-hover:scale-110">
                  <BookOpen size={16} />
                </div>
                <span className="text-sm font-medium text-slate-300">{area}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
