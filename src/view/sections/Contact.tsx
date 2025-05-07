import { useSectionInView } from '@/hooks/useSectionInView';

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
    </section>
  );
}
