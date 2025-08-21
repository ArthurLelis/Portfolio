'use client';

// import { Stacks } from '@/data/Stacks';
import { useSectionInView } from '@/hooks/useSectionInView';
// import { StackItem } from '@/view/components/StackItem';

export function Skills() {
  const { ref } = useSectionInView('skills');

  return (
    <section
      ref={ref}
      id="skills"
      className="!pt-30 sm:!pt-40"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h1 className="text-secondary font-semibold text-4xl text-center lg:text-left">
            Habilidades & <span className="text-accent"> Recursos </span>
          </h1>

          <p className="text-secondary font-semibold text-sm text-center lg:text-left">
            Ferramentas e linguagens que uso para construir produtos completos.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-4 w-full mt-2">
          {/* {Stacks.map((stack) => (
            <StackItem
              key={stack.name}
              name={stack.name}
              icon={stack.icon}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
}
