import Image from 'next/image';
import { motion } from 'framer-motion';

import { useSectionInView } from '@/hooks/useSectionInView';
import { services } from '@/data/services';
import { SpecialText } from '../components/SpecialText';

export function Services() {
  const { ref } = useSectionInView('services');

  return (
    <section
      ref={ref}
      id="services"
      className="relative bg-white rounded-t-xl overflow-hidden p-2"
    >
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '100%', opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="absolute right-1/2 md:right-1/6 [@media(min-width:831px)]:right-1/4 w-1 bg-gradient-to-b from-[#3b82f6]/0 via-[#8b5cf6]/80 to-[#3b82f6]/0"
      />

      <div className="p-14">
        <div className="relative z-10 bg-white flex flex-col gap-4 items-center md:items-start w-full md:max-w-3/4 [@media(min-width:831px)]:max-w-3/5">
          <p className="text-xs font-medium text-[#111111cc] tracking-[1.92px] uppercase leading-[13.2px]">
            Meus Serviços
          </p>

          <h1 className="text-5xl [@media(min-width:831px)]:text-[52px] 2xl:text-[64px] text-[#111111cc] font-semibold tracking-[-1.4px] leading-none text-center md:text-left">
            Expertise sob medida para{" "}
            <SpecialText
              className="font-semibold"
            >
              seu projeto
            </SpecialText>
          </h1>

          <p className="text-lg text-[#111111cc] tracking-[-0.18px] leading-[160%] text-center md:text-left">
            Crio sites, apps e sistemas digitais com foco na experiência do usuário e nos resultados do seu negócio. Cada interface é pensada nos detalhes para gerar conversão e crescimento.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 xl:p-6 rounded-lg hover:shadow-lg transition relative border-1 border-gray-300 border-l-4 border-l-[#3b82f6] bg-white"
            >
              <div className="flex items-center gap-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-10 h-10 xl:w-20 xl:h-20 object-contain"
                />

                <h3 className="text-2xl 2xl:text-3xl font-semibold text-[#111111cc] tracking-[-0.864px] leading-[40.32px]">
                  {service.title}
                </h3>
              </div>

              <p className="mt-4 text-[#111111cc] text-lg leading-[160%] tracking-[-0.18px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
