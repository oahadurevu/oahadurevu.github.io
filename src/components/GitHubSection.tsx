import { Github, ExternalLink, Code2 } from 'lucide-react';
import { profile } from '@/data';
import SectionHeading, { Reveal } from './SectionHeading';

export default function GitHubSection() {
  return (
    <section id="github" className="relative section-pad">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="container-max">
        <SectionHeading
          eyebrow="GitHub"
          title="Code & project activity"
          description="My repositories and open source work live here."
        />

        <Reveal>
          <div className="glass mx-auto max-w-2xl rounded-2xl p-6 sm:p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700/40 to-slate-800/40 text-white">
              <Github size={32} />
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">
              @{profile.githubHandle}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Visit my GitHub profile to explore repositories, code, and
              project source files.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              <ExternalLink size={16} />
              Visit GitHub Profile
            </a>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
              <Code2 size={13} />
              Repository statistics are not displayed to avoid inaccurate data.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
