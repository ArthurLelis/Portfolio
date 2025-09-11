'use client';

import { motion } from 'framer-motion';
import { MdArrowDownward, MdLocalPhone } from 'react-icons/md';

import { useSectionInView } from '@/hooks/useSectionInView';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/utils/cn';
import MainBanner from '@/assets/MainBanner.png';
import { Button } from '@/view/components/Button';
import { SpecialText } from '../../components/SpecialText';
import { Typewriter } from './components/Typewriter';

export function Main() {
  const { ref } = useSectionInView('main', true);
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <main
      ref={ref}
      id="main"
      className={cn(
        'relative w-full flex overflow-hidden rounded-b-xl bg-[#1E1F29]',
        'px-6 !pt-24 !pb-14',
      )}
    >
      <div className="flex w-full">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className={cn(
            'relative -translate-x-1/2 z-10 flex flex-col gap-4',
            'left-1/2 [@media(min-width:831px)]:left-1/3',
            'items-center [@media(min-width:831px)]:items-start',
            'w-full [@media(min-width:831px)]:w-3/5 xl:w-2/5',
          )}
        >
          <h1
            className={cn('font-semibold text-white',
              'text-base sm:text-xl md:text-2xl',
            )}
          >
            Transformo ideias em
          </h1>

          <h2
            className={cn('font-semibold',
              'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
              'text-center [@media(min-width:831px)]:text-left',
            )}
          >
            <SpecialText>
              <Typewriter />
              <span className="animate-pulse">|</span>
            </SpecialText>
          </h2>

          <p
            className={cn('text-white tracking-[-0.18px] leading-[160%]',
              'text-sm sm:text-base md:text-lg',
              'text-center [@media(min-width:831px)]:text-left',
            )}
          >
            Engenheiro de software fullstack apaixonado por criar soluções web e mobile
            que unem funcionalidade, performance e design.
          </p>

          <div className="flex items-center gap-2 p-3 border-2 border-white rounded-2xl">
            <div
              className={cn('bg-online rounded-full animate-pulse transition-all blur-[0.7px]',
                'w-2 h-2 sm:w-2.5 sm:h-2.5',
              )}
            />

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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotateY: -15 }}
          whileInView={{ opacity: 0.5, scale: 0.8, rotateY: -5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className={cn(
            'absolute inset-0 top-5 pointer-events-none left-2/3 rounded-2xl',
            'hidden [@media(min-width:831px)]:block',
          )}
          style={{
            backgroundImage: `url(${MainBanner.src})`,
            WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.71) 50%, rgba(0,0,0,1) 55%)',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: 'cover',
            maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.71) 50%, rgba(0,0,0,1) 55%)',
            maskRepeat: 'no-repeat',
            maskSize: 'cover',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            transform: 'perspective(250px) rotateX(0deg) rotateY(-5deg) scale(0.8) translate(-30%)',
          }}
        />
      </div>
    </main>
  );
}
