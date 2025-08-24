'use client';

import { MdArrowDownward, MdLocalPhone } from 'react-icons/md';

import { useSectionInView } from '@/hooks/useSectionInView';
import { useActiveSection } from '@/hooks/useActiveSection';
import MainBanner from '@/assets/MainBanner.png';
import { Button } from '@/view/components/Button';
import { SpecialText } from '../components/SpecialText';
import { Typewriter } from '../components/Typewriter';

export function Main() {
  const { ref } = useSectionInView('main', true);
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <main
      ref={ref}
      id="main"
      className="relative w-full px-6 pt-24 pb-14 flex overflow-hidden rounded-b-xl bg-[#1E1F29]"
    >
      <div className="flex w-full">
        <div className="relative left-1/2 [@media(min-width:831px)]:left-1/3 -translate-x-1/2 z-10 flex flex-col items-center [@media(min-width:831px)]:items-start gap-4 w-full [@media(min-width:831px)]:w-3/5 xl:w-2/5">
          <h1 className="font-semibold text-white text-2xl 2xl:text-3xl">
            Transformo ideias em
          </h1>

          {/* 518px */}
          <h2 className="font-semibold text-5xl 2xl:text-6xl text-center [@media(min-width:831px)]:text-left">
            <SpecialText>
              <Typewriter />
              <span className="animate-pulse">|</span>
            </SpecialText>
          </h2>

          <p className="text-lg text-white tracking-[-0.18px] leading-[160%] text-center [@media(min-width:831px)]:text-left">
            Engenheiro de software fullstack apaixonado por criar soluções web e mobile
            que unem funcionalidade, performance e design.
          </p>

          <div className="flex items-center gap-2 p-3 border-2 border-white rounded-2xl">
            <div className="w-2 h-2 bg-online rounded-full animate-pulse transition-all sm:w-2.5 sm:h-2.5 blur-[0.7px]" />

            <p className="text-xs text-white">
              Disponível para novos projetos
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            <a
              href="#about"
              onClick={() => {
                setActiveSection('about');
                setTimeOfLastClick(Date.now());
              }}
            >
              <Button type="button">
                Ver mais sobre mim
                <MdArrowDownward />
              </Button>
            </a>

            <a
              href="#contact"
              onClick={() => {
                setActiveSection('contact');
                setTimeOfLastClick(Date.now());
              }}
            >
              <Button type="button" variant="secondary">
                Entrar em contato
                <MdLocalPhone />
              </Button>
            </a>
          </div>
        </div>

        <div
          className="absolute inset-0 top-5 pointer-events-none left-3/5 xl:left-1/2 rounded-2xl hidden [@media(min-width:831px)]:block"
          style={{
            backgroundImage: `url(${MainBanner.src})`,
            WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.71) 50%, rgba(0,0,0,1) 55%)',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: 'cover',
            maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.71) 50%, rgba(0,0,0,1) 55%)',
            maskRepeat: 'no-repeat',
            maskSize: 'cover',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            transform: 'perspective(250px) rotateX(0deg) rotateY(-5deg) scale(0.8) translate(-30%)',
            opacity: 0.5,
          }}
        />
      </div>
    </main>
  );
}
