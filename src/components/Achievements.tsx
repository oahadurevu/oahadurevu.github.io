import { motion } from 'framer-motion';
import { Trophy, Lightbulb, Brain, FlaskConical, Award } from 'lucide-react';
import { achievements } from '@/data';
import SectionHeading, { Reveal } from './SectionHeading';

const typeIcons = [
  { match: 'Robotics', icon: Trophy },
  { match: 'Innovation', icon: Lightbulb },
  { match: 'Hackathon', icon: Brain },
  { match: 'Research', icon: FlaskConical },
  { match: 'Training', icon: Award },
];

function getIcon(type: string) {
  const found = typeIcons.find((t) => type.includes(t.match));
  return found ? found.icon : Award;
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow="Achievements & Competitions"
          title="Milestones so far"
          description="Competitions, innovation work, and technical training — factual and growing."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = getIcon(item.type);
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group glass h-full rounded-2xl p-6 transition-colors hover:border-amber-400/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-amber-300 transition-transform group-hover:scale-110">
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-amber-300/60">
                        {item.type}
                      </span>
                      <h3 className="text-base font-bold leading-tight text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400/60" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
