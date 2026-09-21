import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Compass } from 'lucide-react';
import { profile, aboutText, currentlyExploring } from '@/data';
import SectionHeading, { Reveal } from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="relative section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow="About Me"
          title="A student who builds, not just studies"
          description="Getting to know who I am and what drives me."
        />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Left: narrative */}
          <Reveal>
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="space-y-4">
                {aboutText.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-slate-300">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
                  <MapPin size={15} className="text-cyan-400" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
                  <GraduationCap size={15} className="text-cyan-400" />
                  {profile.university}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: currently exploring */}
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-cyan-300">
                <Compass size={18} />
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  Currently Exploring
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {currentlyExploring.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
