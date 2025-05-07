'use client';

import Image from 'next/image';
import { MdArrowDownward, MdLocalPhone } from 'react-icons/md';

import { useSectionInView } from '@/hooks/useSectionInView';
import { useActiveSection } from '@/hooks/useActiveSection';
import MainImage from '@/assets/Main.png';
import { Button } from '@/view/components/Button';
import { Typewriter } from '../components/Typewriter';

export function Main() {
  const { ref } = useSectionInView('main', true);
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <main
      ref={ref}
      id="main"
      className="!pt-30 sm:!pt-40"
    >
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
        <div className="flex flex-col items-center gap-4 w-3/4 lg:items-start lg:w-1/2">
          <div className="flex">
            <div className="flex items-center gap-2 p-2 border-4 border-detail rounded-2xl sm:p-4">
              <div className="w-2 h-2 bg-online rounded-full sm:w-4 sm:h-4" />

              <p className="text-sm sm:text-base"> Disponível para novos projetos </p>
            </div>
          </div>

          <h1 className="font-semibold text-center text-xl sm:text-2xl"> Transformo ideias em </h1>

          <h2 className="font-semibold text-primary text-center text-3xl sm:text-4xl">
            <Typewriter />
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-sm text-center sm:text-base lg:text-left">
            Olá! Sou Arthur Lelis, desenvolvedor Full Stack apaixonado por criar soluções web e mobile que unem funcionalidade, performance e design. Neste portfólio, compartilho meus projetos, experiências e desafios que impulsionam meu crescimento na área de tecnologia. Seja bem-vindo(a) ao meu espaço digital — onde cada linha de código conta uma história.
          </p>

          <div className="flex flex-col items-center gap-2 mt-2 sm:flex-row">
            <a href="#about"
              onClick={() => {
                setActiveSection('about');
                setTimeOfLastClick(Date.now());
              }}
            >
              <Button
                type="button"
                className="hover:border-primary-dark"
              >
                Ver mais sobre mim
                <MdArrowDownward />
              </Button>
            </a>

            <a href="#contact"
              onClick={() => {
                setActiveSection('contact');
                setTimeOfLastClick(Date.now());
              }}
            >
              <Button
                type="button"
                className="bg-white text-primary hover:bg-primary hover:text-white"
              >
                Entrar em contato
                <MdLocalPhone />
              </Button>
            </a>
          </div>
        </div>

        <Image src={MainImage} alt="ImageMain" className="w-full lg:w-1/2" />
      </div>
    </main>
  );
}
