import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const schema = z.object({
  name: z.string().nonempty('Nome é obrigatório!'),
  email: z.email('Informe um email válido!'),
  message: z.string().nonempty('Mensagem é obrigatória!'),
});

type ContactFieldValues = z.infer<typeof schema>;

export function useContact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFieldValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const templateParams = {
        user_name: data.name,
        user_email: data.email,
        user_message: data.message,
      };

      const response = await emailjs.send(
        'service_0zt0nw7',
        'contact_form',
        templateParams,
        '0f5VHtNf0uIDXSdgP'
      );

      if (response.status !== 200) throw new Error();

      reset();

      toast.info('Mensagem enviada.', {
        description: 'Obrigado por entrar em contato, responderei sua mensagem o mais breve possível.',
      });

    } catch (error) {
      console.error('Submission error', error);

      toast.info('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.', {
        description: 'Se o problema persistir, entre em contato diretamente comigo em arthurleliscc@gmail.com.',
      });
    }
  });

  return {
    register,
    errors,
    onSubmit,
    reset,
    isSubmitting,
  };
}
