import { FaTrashAlt } from 'react-icons/fa';
import { MdArrowRightAlt } from 'react-icons/md';

import { useSectionInView } from '@/hooks/useSectionInView';
import { useContact } from './useContact';
import { cn } from '@/utils/cn';
import { SpecialText } from '@/view/components/SpecialText';
import { Input } from '@/view/sections/Contact/components/Input';
import { Textarea } from '@/view/sections/Contact/components/Textarea';
import { Button } from '@/view/components/Button';

export function Contact() {
  const { ref } = useSectionInView('contact');

  const {
    register,
    errors,
    onSubmit,
    isSubmitting,
    reset,
  } = useContact();

  return (
    <section
      ref={ref}
      id="contact"
      className="!py-10 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] rounded-b-3xl"
    >
      <div
        className={cn('flex flex-col items-center',
          'py-14 px-4 sm:px-14',
        )}
      >
        <div
          className={cn('flex flex-col items-center gap-4',
            'w-full sm:w-4/5 lg:w-3/4',
          )}
        >
          <p className="text-xs font-medium text-[#fbfbfbcc] tracking-[1.92px] uppercase leading-[13.2px] text-center">
            Fale Comigo
          </p>

          <h1
            className={cn('text-[#fbfbfb] font-semibold tracking-[-1.4px] leading-none text-center',
              'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
            )}
          >
            Entre em{" "}
            <SpecialText>
              contato
            </SpecialText>
          </h1>

          <p
            className={cn('text-[#fbfbfbcc] tracking-[-0.18px] leading-[160%] text-center',
              'text-sm sm:text-base md:text-lg',
            )}
          >
            Se você tem alguma dúvida, sugestão, ou está interessado em colaborar em um projeto, sinta-se à vontade para me enviar uma mensagem. Preencha o formulário abaixo, e entrarei em contato o mais breve possível.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <form
          onSubmit={onSubmit}
          className="w-4/5 2xl:w-3/4"
        >
          <div className="flex flex-col gap-4">
            <div
              className={cn('flex gap-4',
                'flex-col lg:flex-row',
              )}
            >
              <div className="w-full lg:w-1/2">

                <Input
                  type="text"
                  placeholder="Nome"
                  {...register('name')}
                  error={errors.name?.message}
                />
              </div>

              <div className="w-full lg:w-1/2">
                <Input
                  type="email"
                  placeholder="E-mail"
                  {...register('email')}
                  error={errors.email?.message}
                />
              </div>
            </div>

            <Textarea
              placeholder="Mensagem"
              {...register('message')}
              error={errors.message?.message}
            />

            <div className="flex justify-end gap-2">
              <Button
                type="reset"
                variant="simple"
                onClick={() => reset()}
                disabled={isSubmitting}
                className="bg-transparent"
              >
                Limpar
                <FaTrashAlt />
              </Button>

              <Button
                type="submit"
                isPending={isSubmitting}
              >
                Enviar
                <MdArrowRightAlt />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
