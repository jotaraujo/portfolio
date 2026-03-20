/**
 * Projects grid layout
 */
import { PROJECTS } from '@/constants/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={project.id}
          {...project}
          delay={index * 100}
        />
      ))}
    </div>
  );
}
