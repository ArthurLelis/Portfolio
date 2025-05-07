'use client';

import Image from 'next/image';
import { MdSchool, MdLocationPin } from 'react-icons/md';

import { useSectionInView } from '@/hooks/useSectionInView';
// import { useActiveSection } from '@/hooks/useActiveSection';
import ImagePerfil from '@/assets/Perfil.jpg';

export function About() {
  const { ref } = useSectionInView('about');
  // const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <section
      ref={ref}
      id="about"
      className="!pt-30 sm:!pt-40"
    >
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
        <div className="flex flex-col items-center gap-4 w-full lg:items-start lg:w-1/2">
          <h1 className="text-secondary font-semibold text-4xl">
            Sobre <span className="text-accent"> Mim </span>
          </h1>

          <p className="text-secondary font-semibold text-sm text-center lg:text-left">
            Desenvolvedor Full Stack focado em criar soluções digitais com propósito.
          </p>

          <p className="indent-8 text-sm sm:text-base">
            Sou Arthur Lelis, desenvolvedor Full Stack com experiência em projetos web e mobile, apaixonado por transformar ideias em soluções digitais funcionais, escaláveis e bem projetadas. Meu foco está em entregar aplicações que aliam performance, design e uma ótima experiência para o usuário final.
          </p>

          <p className="indent-8 text-sm sm:text-base">
            Iniciei minha jornada na tecnologia com um curso técnico em Informática no Cotemig, e atualmente curso Bacharelado em Sistemas de Informação na UNA Contagem.  Busco sempre me atualizar, explorar novas ferramentas e aprender com cada projeto. Acredito que a tecnologia deve ser simples, acessível e inteligente — e é isso que me motiva a criar produtos que fazem a diferença.
          </p>

          <p className="indent-8 text-sm sm:text-base">
            Acredito que foco, dedicação e estudo são as bases necessárias para que um bom desenvolvedor construa sua experiência.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full lg:w-1/2">
          <Image src={ImagePerfil} alt="ImagePerfil" className="w-1/2 rounded-full" />

          <div className="flex flex-col items-center gap-2 text-sm sm:text-base">
            <div className="flex items-center gap-2 text-secondary">
              <MdSchool />
              <p> Sistemas de Informação - UNA </p>
            </div>

            <div className="flex items-center gap-2 text-secondary">
              <MdLocationPin />
              <p> Contagem - MG </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
