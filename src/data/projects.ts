import WaiterAppLogo from '@/assets/projects/WaiterAppLogo.svg';
import WaiterAppBanner from '@/assets/projects/WaiterAppBanner.svg';
import WaiterAppThumbnail from '@/assets/projects/WaiterAppThumbnail.svg';

import FincheckLogo from '@/assets/projects/FincheckLogo.svg';
import FincheckBanner from '@/assets/projects/FincheckBanner.svg';
import FincheckThumbnail from '@/assets/projects/FincheckThumbnail.svg';

import { Node } from '@/view/components/Stacks/Node';
import { Express } from '@/view/components/Stacks/Express';
import { Mongo } from '@/view/components/Stacks/Mongo';
import { Websockets } from '@/view/components/Stacks/Websockets';
import { Typescript } from '@/view/components/Stacks/Typescript';
import { React } from '@/view/components/Stacks/React';
import { ReactNative } from '@/view/components/Stacks/ReactNative';
import { StyledComponents } from '@/view/components/Stacks/StyledComponents';
import { Vite } from '@/view/components/Stacks/Vite';
import { Nest } from '@/view/components/Stacks/Nest';
import { Prisma } from '@/view/components/Stacks/Prisma';
import { Postgres } from '@/view/components/Stacks/Postgres';
import { JWTTokens } from '@/view/components/Stacks/JWTTokens';
import { Tailwind } from '@/view/components/Stacks/Tailwind';
import { ReactHookForm } from '@/view/components/Stacks/ReactHookForm';
import { Zod } from '@/view/components/Stacks/Zod';
import { ReactQuery } from '@/view/components/Stacks/ReactQuery';
import { Radix } from '@/view/components/Stacks/Radix';

export const projects = [
  {
    title: 'WaiterApp',
    logo: WaiterAppLogo,
    images: {
      banner: WaiterAppBanner,
      thumbnail: WaiterAppThumbnail,
    },
    description: 'O WaiterApp é uma ferramenta projetada para facilitar o trabalho de garçons, agilizando o processo de atendimento e gestão de pedidos. O objetivo do app é melhorar a eficiência dos serviços em restaurantes, bares e cafés.',
    stacks: [
      { name: 'NodeJS', logo: Node, },
      { name: 'Express', logo: Express },
      { name: 'MongoDB', logo: Mongo },
      { name: 'Websocket', logo: Websockets },
      { name: 'Typescript', logo: Typescript },
      { name: 'React', logo: React },
      { name: 'React Native', logo: ReactNative },
      { name: 'Styled Components', logo: StyledComponents },
      { name: 'Vite', logo: Vite },
    ],
  },
  {
    title: 'Fincheck',
    logo: FincheckLogo,
    images: {
      banner: FincheckBanner,
      thumbnail: FincheckThumbnail,
    },
    description: 'O Fincheck é um aplicativo desenvolvido para ajudar usuários a monitorar suas finanças pessoais de forma fácil e eficiente. O objetivo do projeto é fornecer ferramentas que permitam o controle total sobre contas bancárias, investimentos, despesas, receitas e planejamento financeiro.',
    stacks: [
      { name: 'NestJS', logo: Nest, },
      { name: 'Prisma', logo: Prisma, },
      { name: 'PostgreSQL', logo: Postgres, },
      { name: 'JWT Tokens', logo: JWTTokens, },
      { name: 'Typescript', logo: Typescript },
      { name: 'Vite', logo: Vite, },
      { name: 'React', logo: React },
      { name: 'Tailwind', logo: Tailwind },
      { name: 'React Hook Form', logo: ReactHookForm },
      { name: 'Zod', logo: Zod },
      { name: 'React Query', logo: ReactQuery },
      { name: 'Radix', logo: Radix },
    ],
  },
];
