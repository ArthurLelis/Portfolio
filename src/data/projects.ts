import WaiterAppLogo from '@/assets/projects/WaiterAppLogo.svg';
import WaiterAppBanner from '@/assets/projects/WaiterAppBanner.svg';
import WaiterAppThumbnail from '@/assets/projects/WaiterAppThumbnail.svg';

import FincheckLogo from '@/assets/projects/FincheckLogo.svg';
import FincheckBanner from '@/assets/projects/FincheckBanner.svg';
import FincheckThumbnail from '@/assets/projects/FincheckThumbnail.svg';

import { stacks } from './stacks';

export const projects = [
  {
    title: 'WaiterApp',
    logo: WaiterAppLogo,
    images: {
      banner: WaiterAppBanner,
      thumbnail: WaiterAppThumbnail,
    },
    description: 'O WaiterApp é uma ferramenta projetada para facilitar o trabalho de garçons, agilizando o processo de atendimento e gestão de pedidos. O objetivo do app é melhorar a eficiência dos serviços em restaurantes, bares e cafés.',
    stacks: stacks.filter((stack) =>
      ['NodeJS', 'Express', 'MongoDB', 'Websocket', 'Typescript', 'React', 'React Native', 'Styled Components', 'Vite']
        .some((tech) => stack.name === tech)
    )
  },
  {
    title: 'Fincheck',
    logo: FincheckLogo,
    images: {
      banner: FincheckBanner,
      thumbnail: FincheckThumbnail,
    },
    description: 'O Fincheck é um aplicativo desenvolvido para ajudar usuários a monitorar suas finanças pessoais de forma fácil e eficiente. O objetivo do projeto é fornecer ferramentas que permitam o controle total sobre contas bancárias, investimentos, despesas, receitas e planejamento financeiro.',
    stacks: stacks.filter((stack) =>
      ['NestJS', 'Prisma', 'PostgreSQL', 'JWT Tokens', 'Typescript', 'Vite', 'React', 'Tailwind', 'React Hook Form', 'Zod', 'React Query', 'Radix']
        .some((tech) => stack.name === tech)
    )
  },
];
