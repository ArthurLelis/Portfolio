import Image from 'next/image';
import { motion } from 'framer-motion';

import { useSectionInView } from '@/hooks/useSectionInView';
import { cn } from '@/utils/cn';
import { services } from '@/data/services';
import { SpecialText } from '@/view/components/SpecialText';

export function Services() {
  const { ref } = useSectionInView('services');

  return (
    <section
      ref={ref}
      id="services"
      className="relative bg-white rounded-t-xl overflow-hidden !pt-2 mt-1"
    >
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '100%', opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className={cn('absolute w-1 bg-gradient-to-b from-[#3b82f6]/0 via-[#8b5cf6]/80 to-[#3b82f6]/0',
          'right-1/2 md:right-1/6 [@media(min-width:831px)]:right-1/4',
        )}
      />

      <div className="py-14">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className={cn('relative z-10 bg-white flex flex-col gap-4 items-center md:items-start w-full',
            'md:max-w-3/4 [@media(min-width:831px)]:max-w-3/5'
          )}
        >
          <p className="text-xs font-medium text-[#111111cc] tracking-[1.92px] uppercase leading-[13.2px]">
            Meus Serviços
          </p>

          <h1
            className={cn('text-[#111111cc] font-semibold tracking-[-1.4px] leading-none',
              'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
              'text-center md:text-left',
            )}
          >
            Expertise sob medida para{" "}
            <SpecialText>
              seu projeto
            </SpecialText>
          </h1>

          <p
            className={cn('text-[#111111cc] tracking-[-0.18px] leading-[160%]',
              'text-sm sm:text-base md:text-lg',
              'text-center md:text-left',
            )}
          >
            Crio sites, apps e sistemas digitais com foco na experiência do usuário e nos resultados do seu negócio. Cada interface é pensada nos detalhes para gerar conversão e crescimento.
          </p>
        </motion.div>

        <div
          className={cn('mt-14 grid gap-10',
            'grid-cols-1 lg:grid-cols-2',
          )}
        >
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              key={index}
              className={cn('rounded-lg hover:shadow-lg transition relative border-1 border-gray-300 border-l-4 border-l-[#3b82f6] bg-white',
                'p-3 xl:p-6',
              )}
            >
              <div
                className={cn('flex items-center',
                  'gap-3',
                )}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  className={cn('object-contain rounded-lg',
                    'w-10 sm:w-13 md:w-15',
                    'h-10 sm:h-13 md:h-15',
                  )}
                />

                <h3
                  className={cn('font-semibold text-[#111111cc] tracking-[-0.864px] leading-[40.32px]',
                    'text-base sm:text-xl md:text-2xl',
                  )}
                >
                  {service.title}
                </h3>
              </div>

              <p
                className={cn('mt-4 text-[#111111cc] text-lg leading-[160%] tracking-[-0.18px]',
                  'text-sm sm:text-base md:text-lg',
                )}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
