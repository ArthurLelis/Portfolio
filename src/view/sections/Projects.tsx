'use client';

import { useSectionInView } from '@/hooks/useSectionInView';
import { Projects as ListProjects } from '@/data/Projects';
import { ProjectItem } from '@/view/components/ProjectItem';

export function Projects() {
  const { ref } = useSectionInView('projects');

  return (
    <section
      ref={ref}
      id="projects"
      className="!pt-30 sm:!pt-40"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h1 className="text-secondary font-semibold text-4xl">
            Meus <span className="text-accent"> Projetos </span>
          </h1>

          <p className="text-secondary font-semibold text-sm text-center lg:text-left">
            Alguns dos trabalhos que desenvolvi com tecnologia, design e dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 w-full mt-2">
          {ListProjects.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              stacks={project.stacks}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
