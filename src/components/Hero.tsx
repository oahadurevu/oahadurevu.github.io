import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Send,
} from 'lucide-react';
import { profile } from '@/data';

export default function Hero() {
  const [portraitLoaded, setPortraitLoaded] = useState(true);

  return (
    <section id="home" className="hero-shell relative min-h-screen overflow-hidden pt-28 sm:pt-32">
      <div className="hero-stars absolute inset-0 -z-10" />
      <div className="hero-wave hero-wave-one absolute inset-x-0 bottom-0 -z-10" />
      <div className="hero-wave hero-wave-two absolute inset-x-0 bottom-0 -z-10" />
      <div className="hero-orb hero-orb-one absolute -z-10" />
      <div className="hero-orb hero-orb-two absolute -z-10" />

      <div className="container-max px-5 sm:px-8 lg:px-12">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-16 pb-24 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-24 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[360px] lg:order-first lg:max-w-[390px]"
          >
            <div className="portrait-orbit portrait-orbit-blue absolute -inset-6 rounded-full" />
            <div className="portrait-orbit portrait-orbit-violet absolute -inset-10 rounded-full" />
            <div className="portrait-orbit-dot portrait-dot-one absolute -left-3 top-1/3 h-2 w-2 rounded-full bg-cyan-300" />
            <div className="portrait-orbit-dot portrait-dot-two absolute right-2 top-1/4 h-3 w-3 rounded-full bg-blue-500" />
            <div className="portrait-orbit-dot portrait-dot-three absolute bottom-8 right-8 h-2 w-2 rounded-full bg-fuchsia-400" />

            <div className="relative aspect-square overflow-hidden rounded-full border-[3px] border-cyan-300/90 bg-gradient-to-br from-cyan-400/30 via-blue-600/20 to-fuchsia-500/30 p-1 shadow-[0_0_45px_rgba(0,191,255,0.45),0_0_85px_rgba(88,28,220,0.28)]">
              <div className="h-full w-full overflow-hidden rounded-full bg-ink-800">
                {portraitLoaded ? (
                  <img
                    src="/images/WhatsApp_Image_.jpeg"
                    alt="Portrait of Oahadur Rahman Evu"
                    loading="eager"
                    onError={() => setPortraitLoaded(false)}
                    className="h-full w-full object-cover object-[center_24%]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-600/30 via-ink-900 to-fuchsia-500/20">
                    <span className="text-9xl font-extrabold text-white/20">E</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <div className="relative lg:pl-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="font-mono text-2xl font-medium leading-none text-blue-400 sm:text-3xl">Hi,</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Md. Oahadur{' '}
                <span className="hero-name-gradient">Rahman Evu</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg font-medium leading-snug text-slate-200 sm:text-2xl">
                CSE Student <span className="mx-2 text-blue-400">|</span> Software Developer{' '}
                <span className="mx-2 text-blue-400">|</span> AI/ML Enthusiast
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100/75 sm:mt-6 sm:text-lg sm:leading-8">
                Computer Science & Engineering student passionate about building practical software,
                intelligent systems, and technology-driven solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a href="#projects" className="hero-primary-button group">
                View My Projects <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hero-outline-button">
                Download Resume <Download size={17} />
              </a>
              <a href="#contact" className="hero-outline-button">
                Let's Connect <Send size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 flex flex-wrap items-center gap-4 text-sm text-blue-100/75"
            >
              <a href={profile.github} target="_blank" rel="noreferrer" className="hero-social-link">
                <Github size={19} /> {profile.githubHandle}
              </a>
              <span className="h-5 w-px bg-blue-400/40" />
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hero-social-link">
                <Linkedin size={19} /> md-oahadur-rahman-evu
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="hero-code-card absolute -right-3 -top-28 hidden w-56 rounded-xl border border-blue-500/50 bg-[#06122a]/80 p-4 font-mono text-xs leading-relaxed text-cyan-300 shadow-[0_0_30px_rgba(0,119,255,0.16)] xl:block"
            >
              <p className="text-fuchsia-400">const dream = {'{'}</p>
              <p className="pl-4">study: true,</p>
              <p className="pl-4">build: true,</p>
              <p className="pl-4">create: true,</p>
              <p className="pl-4">impact: true</p>
              <p>{'}'};</p>
              <p className="mt-2 text-blue-400/70">// Better Tomorrow</p>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
