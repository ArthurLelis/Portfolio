import {
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiReact,
  SiStyledcomponents,
} from 'react-icons/si';

import Fincheck from '@/assets/Fincheck.svg';

export const Projects = [
  {
    title: 'Waiter App',
    description: 'Waiter App é uma solução para restaurantes composta por um app mobile para garçons e um dashboard web para a cozinha e administração. O aplicativo permite visualizar o cardápio, criar pedidos com envio em tempo real via WebSocket para o dashboard, acompanhar pedidos atuais e históricos, além de configurar o perfil do usuário. Já o dashboard web exibe os pedidos em tempo real, permite gerenciar o cardápio, acompanhar o histórico de pedidos e controlar o acesso dos usuários. Ambas as plataformas contam com autenticação e foram desenvolvidas com foco em integração, agilidade e usabilidade.',
    image: Fincheck,
    stacks: [
      { name: 'Typescipt', icon: <SiTypescript /> },
      { name: 'Node', icon: <SiNodedotjs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Styled Components', icon: <SiStyledcomponents /> },
    ],
  },
]
