import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, Radio, Gauge, Navigation, Smartphone } from 'lucide-react';
import { robotics } from '@/data';
import SectionHeading, { Reveal } from './SectionHeading';

const featureIcons = [
  { icon: Cpu, label: 'Microcontrollers' },
  { icon: CircuitBoard, label: 'Sensors & Drivers' },
  { icon: Gauge, label: 'PID Control' },
  { icon: Navigation, label: 'GPS / GSM' },
  { icon: Radio, label: 'Wireless' },
  { icon: Smartphone, label: 'Embedded C' },
];

export default function Robotics() {
  return (
    <section id="robotics" className="relative section-pad">
      {/* Technical grid background */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/8 blur-[120px]" />

      <div className="container-max">
        <SectionHeading
          eyebrow="Robotics & Embedded Systems"
          title="The Robot Lab"
          description="Where code meets hardware — practical work with microcontrollers, sensors, and motors."
        />

        {/* Feature highlights */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {featureIcons.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.05}>
              <div className="glass flex flex-col items-center gap-2 rounded-xl p-4 text-center transition-colors hover:border-emerald-400/20">
                <f.icon size={24} className="text-emerald-400" />
                <span className="text-xs font-medium text-slate-400">{f.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Hardware chips */}
        <Reveal delay={0.1}>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-300/80">
              Hardware & Components
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {robotics.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-gradient-to-br from-emerald-500/5 to-transparent px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-emerald-400/30 hover:text-emerald-200"
                >
                  <Cpu size={15} className="text-emerald-400/70" />
                  {item.name}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold text-white">Line Following</h4>
                <p className="mt-1 text-xs text-slate-400">
                  TCRT5000 sensors + PID control for smooth path tracking
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold text-white">Motor Control</h4>
                <p className="mt-1 text-xs text-slate-400">
                  L298N driver + DC motors for precise movement
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold text-white">Sensing & Alerts</h4>
                <p className="mt-1 text-xs text-slate-400">
                  MPU6050, GPS, GSM for detection and communication
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
