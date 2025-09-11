'use client';

import { motion } from 'framer-motion';

import { useSectionInView } from '@/hooks/useSectionInView';
import { cn } from '@/utils/cn';
import { projects } from '@/data/projects';
import { ProjectItem } from '@/view/sections/Projects/components/ProjectItem';
import { SpecialText } from '@/view/components/SpecialText';

export function Projects() {
  const { ref } = useSectionInView('projects');

  return (
    <section
      ref={ref}
      id="projects"
      className={cn('bg-gradient-to-b from-[#fbfbfb] via-[#fbfbfb] to-[#0f0f0f]',
        '!p-2',
      )}
    >
      <div className="bg-[#111111] rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className={cn('flex flex-col items-center',
            'py-14 px-4 sm:px-14',
          )}
        >
          <div
            className={cn('flex flex-col items-center gap-4',
              'w-full sm:w-4/5 lg:w-3/5 2xl:w-2/5',
            )}
          >
            <p className="text-xs font-medium text-[#fbfbfbcc] tracking-[1.92px] uppercase leading-[13.2px] text-center">
              Meus Projetos
            </p>

            <h1
              className={cn('text-[#fbfbfb] font-semibold tracking-[-1.4px] leading-none text-center',
                'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
              )}
            >
              Inovação e performance em cada{" "}
              <SpecialText>
                linha de código
              </SpecialText>
            </h1>

            <p
              className={cn('text-[#fbfbfbcc] tracking-[-0.18px] leading-[160%] text-center',
                'text-sm sm:text-base md:text-lg',
              )}
            >
              Acredito que cada projeto tem seu potencial único, e meu papel como desenvolvedor é revelar essa força através da tecnologia.
            </p>
          </div>
        </motion.div>

        <div
          className={cn('px-12 pb-14 border border-t-0 border-[#fbfbfb05] rounded-b-3xl',
            'pb-14 px-4 sm:px-14',
          )}
        >
          <div className="grid grid-cols-1 gap-6 w-full mt-2">
            {projects.map((project) => (
              <ProjectItem
                key={project.title}
                title={project.title}
                logo={project.logo}
                images={project.images}
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
