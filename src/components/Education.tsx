import { motion } from 'framer-motion';
import { GraduationCap, School, CircleDot } from 'lucide-react';
import { education } from '@/data';
import SectionHeading, { Reveal } from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="relative section-pad">
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
      <div className="container-max">
        <SectionHeading
          eyebrow="Education"
          title="Academic journey"
          description="The foundation behind my technical growth."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-8">
            {education.map((edu, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div
                    className={`relative flex items-start gap-6 sm:gap-0 ${
                      isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Node */}
                    <div className="absolute left-4 top-6 -translate-x-1/2 sm:left-1/2 z-10">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-cyan-400/50 bg-ink-950"
                      >
                        {edu.current ? (
                          <GraduationCap size={14} className="text-cyan-400" />
                        ) : (
                          <School size={14} className="text-cyan-400" />
                        )}
                      </motion.div>
                    </div>

                    {/* Card */}
                    <div
                      className={`ml-12 w-full sm:ml-0 sm:w-[calc(50%-2rem)] ${
                        isLeft ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'
                      }`}
                    >
                      <div className="glass rounded-2xl p-6 transition-transform hover:scale-[1.02]">
                        <div
                          className={`flex items-center gap-2 ${
                            isLeft ? 'sm:justify-end' : ''
                          }`}
                        >
                          {edu.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-300">
                              <CircleDot size={10} className="animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="mt-2 text-lg font-bold text-white">
                          {edu.degree}
                        </h3>
                        <p className="mt-1 text-sm text-cyan-300/80">
                          {edu.institution}
                        </p>
                        <p className="mt-2 text-sm text-slate-400">
                          {edu.period}
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-300">
                          {edu.status}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {edu.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
