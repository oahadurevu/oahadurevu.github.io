import { projects } from '@/data';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="relative section-pad">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900/50 to-ink-950" />
      <div className="container-max">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built"
          description="From healthcare platforms to warehouse robots — each project solves a real problem."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
