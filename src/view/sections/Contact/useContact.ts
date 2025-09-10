import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';

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

    } catch (error) {
      console.error('Submission error', error);
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
