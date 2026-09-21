import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { careerJourney } from '@/data';
import SectionHeading, { Reveal } from './SectionHeading';

export default function CareerJourney() {
  return (
    <section id="journey" className="relative section-pad">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900/30 to-ink-950" />
      <div className="container-max">
        <SectionHeading
          eyebrow="Career Journey"
          title="From Learning to Building"
          description="The path from first lecture to real projects."
        />

        <div className="relative mx-auto max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/40 to-teal-500/30" />

          <div className="space-y-1">
            {careerJourney.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="relative flex items-start gap-6 py-4">
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: i * 0.06 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-ink-900 font-mono text-sm font-bold text-cyan-300"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">{step.desc}</p>
                  </div>

                  {/* Arrow between steps */}
                  {i < careerJourney.length - 1 && (
                    <ArrowDown
                      size={14}
                      className="absolute left-[42px] -bottom-1 text-cyan-500/30"
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
