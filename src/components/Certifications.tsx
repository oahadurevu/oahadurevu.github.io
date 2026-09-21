import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow="Certifications & Training"
          title="Verified learning"
          description="Formal training that complements my self-driven projects."
        />

        <div className="mx-auto max-w-2xl">
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 sm:p-8"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[60px]" />
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-300 transition-transform group-hover:scale-110">
                  <Award size={26} />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    <GraduationCap size={12} />
                    NSDA Level 6
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white">
                    Machine Learning in Immersive Technology
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    A completed technical training qualification covering
                    machine learning concepts applied to immersive technology.
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    Credential details available upon request.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
