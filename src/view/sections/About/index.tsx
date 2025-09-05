'use client';

import Image from 'next/image';

import { useSectionInView } from '@/hooks/useSectionInView';
import { cn } from '@/utils/cn';
import { SpecialText } from '../../components/SpecialText';
import ImagePerfil from '@/assets/Perfil.jpg';
import { StackItem } from './components/StackItem';
import { stacks } from '@/data/stacks';

export function About() {
  const { ref } = useSectionInView('about');

  return (
    <section
      ref={ref}
      id="about"
      className="!p-2 bg-[#111111]"
    >
      <div
        className={cn('flex items-center gap-4 bg-[#fbfbfb] border-[#1111111a] rounded-3xl p-10',
          'flex-col xl:flex-row',
        )}
      >
        <div
          className={cn('flex flex-col gap-8 p-4',
            'w-full xl:w-1/2',
            'items-center xl:items-start',
          )}
        >
          <div
            className={cn('relative z-10 flex flex-col gap-4 w-2/3',
              'items-center xl:items-start',
            )}
          >
            <p className="text-xs font-medium text-[#111111cc] tracking-[1.92px] uppercase leading-[13.2px]">
              Sobre mim
            </p>

            <h1
              className={cn('text-[#111111cc] font-semibold tracking-[-1.4px] leading-none',
                'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
                'text-center xl:text-left',
              )}
            >
              Muito prazer, eu sou o{" "}
              <SpecialText>
                Arthur
              </SpecialText>
            </h1>

            <p
              className={cn('text-[#111111cc] tracking-[-0.18px] leading-[160%]',
                'text-sm sm:text-base md:text-lg',
                'text-center xl:text-left',
              )}
            >
              Um pouco dos meus valores e visão no mundo da tecnologia.
            </p>
          </div>

          <div className="space-y-4">
            <p
              className={cn('text-[#111111cc] tracking-[-0.18px] leading-[160%] indent-4',
                'text-xs sm:text-sm md:text-base',
                'text-center xl:text-left',
              )}
            >
              Sou Arthur Lelis, desenvolvedor Full Stack Web e Mobile, apaixonado por tecnologia e pelo impacto que ela pode gerar na vida das pessoas e nos negócios. Tenho foco no ecossistema JavaScript, explorando ao máximo ferramentas e frameworks para construir soluções modernas e eficientes.
            </p>

            <p
              className={cn('text-[#111111cc] tracking-[-0.18px] leading-[160%] indent-4',
                'text-xs sm:text-sm md:text-base',
                'text-center xl:text-left',
              )}
            >
              Acredito que cada projeto é uma oportunidade de evolução. Meus princípios estão em unir dedicação, estudo contínuo e atenção aos detalhes para entregar resultados sólidos e experiências digitais que realmente façam a diferença. Busco sempre melhorar, aprendendo novas práticas e explorando tendências que ampliam minha capacidade de gerar valor por meio da tecnologia.
            </p>

            <p
              className={cn('text-[#111111cc] tracking-[-0.18px] leading-[160%] indent-4',
                'text-xs sm:text-sm md:text-base',
                'text-center xl:text-left',
              )}
            >
              Sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades, transformando projetos ambiciosos em soluções de sucesso. Vamos nos conectar e explorar como podemos colaborar para criar inovações com impacto real!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 w-full xl:w-1/2 p-4">
          <Image src={ImagePerfil} alt="ImagePerfil" className="w-1/3 h-1/3 rounded-full" />

          <div className="flex flex-wrap justify-center items-center gap-5">
            {stacks.map((stack) => (
              <StackItem key={Math.random()} stack={stack} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
