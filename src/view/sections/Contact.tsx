import { FaTrashAlt } from 'react-icons/fa';
import { MdArrowRightAlt } from 'react-icons/md';

import { useSectionInView } from '@/hooks/useSectionInView';
import { Input } from '@/view/components/Input';
import { Textarea } from '../components/Textarea';
import { Button } from '@/view/components/Button';

export function Contact() {
  const { ref } = useSectionInView('contact');

  return (
    <section
      ref={ref}
      id="contact"
      className="!pt-30 sm:!pt-40"
    >
      <div className="flex flex-col items-center gap-4 lg:items-start">
        <h1 className="text-secondary font-semibold text-4xl">
          Entre em <span className="text-accent"> Contato </span>
        </h1>

        <p className="text-secondary font-semibold text-sm text-center lg:text-left">
          Se você tem alguma dúvida, sugestão, ou está interessado em colaborar em um projeto, sinta-se à vontade para me enviar uma mensagem. Preencha o formulário abaixo, e entrarei em contato o mais breve possível.
        </p>
      </div>

      <div className="flex justify-center mt-4">
        <form
          // onSubmit={handleSubmit}
          className="w-3/5"
        >
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Nome"
                name="name"
              // {...register('name')}
              // error={errors.name?.message}
              />

              <Input
                type="email"
                placeholder="Email"
                name="email"
              // {...register('email')}
              // error={errors.email?.message}
              />
            </div>

            <Textarea
              placeholder="Mensagem"
              name="message"
            // {...register('message')}
            // error={errors.message?.message}
            />

            <div className="flex justify-end gap-2">
              <Button
                type="reset"
                // disabled={isFormValid}
                className="bg-white text-primary hover:bg-primary hover:text-white disabled:border-gray-400"
              >
                Limpar
                <FaTrashAlt />
              </Button>

              <Button
                type="button"
                // isPending={isPending}
                className="hover:border-primary-dark"
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
