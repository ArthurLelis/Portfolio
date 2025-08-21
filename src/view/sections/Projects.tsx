'use client';

import { motion } from 'framer-motion';

import { useSectionInView } from '@/hooks/useSectionInView';
import { projects } from '@/data/projects';
import { ProjectItem } from '@/view/components/ProjectItem';

export function Projects() {
  const { ref } = useSectionInView('projects');

  return (
    <section
      ref={ref}
      id="projects"
      className="bg-gradient-to-b from-[#fbfbfb] via-[#fbfbfb] to-[#0f0f0f] p-2"
    >
      <div className="bg-[#111111] rounded-3xl">
        <div className="flex flex-col items-center px-12 py-14">
          <div className="flex flex-col items-center gap-4 w-3/5">
            <p className="text-xs font-medium text-[#fbfbfbcc] tracking-[1.92px] uppercase leading-[13.2px] text-center">
              Meus Projetos
            </p>

            <h1 className="text-5xl [@media(min-width:831px)]:text-[52px] 2xl:text-[64px] text-[#fbfbfb] font-semibold tracking-[-1.4px] leading-none text-center">
              Inovação e performance em cada{" "}
              <motion.span
                className="font-semibold"
                animate={{ color: ["#3b82f6", "#8b5cf6", "#3b82f6"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                linha de código
              </motion.span>
            </h1>

            <p className="text-lg text-[#fbfbfbcc] tracking-[-0.18px] leading-[160%] text-center">
              Acredito que cada negócio tem um potencial único, e meu papel é concretizá-lo em produtos digitais eficientes e funcionais.
            </p>
          </div>
        </div>

        <div className="px-12 pb-14 border border-t-0 border-[#fbfbfb05] rounded-b-3xl">
          <div className="grid grid-cols-1 gap-6 w-full mt-2">
            {projects.map((project) => (
              <ProjectItem
                key={project.title}
                title={project.title}
                logo={project.logo}
                image={project.image}
                description={project.description}
                stacks={project.stacks}
              />
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
