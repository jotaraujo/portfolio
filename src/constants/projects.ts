import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'gitprofile',
    title: 'GitProfile',
    subtitle: 'Plataforma de triagem de candidatos no GitHub',
    img: '/projects/gitprofile.png',
    category: 'personal',
    overview:
      'Recrutadores avaliam devs pelo perfil público, mas o GitHub não foi feito para triar — comparar candidatos vira um trabalho manual de abas abertas.',
    result:
      'Automatizo isso com auth de dois papéis, triagem por requisitos dinâmicos e comparação de stacks — no mesmo padrão de todo projeto: TypeScript strict sem erros, Conventional Commits e documentação do PRD ao DESIGN. É esse rigor que sustenta os 99/100/100 do Lighthouse, com o app em produção na Vercel.',
    featured: true,
    tags: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'Zod', 'Vitest', 'Supabase'],
    demoUrl: 'https://git-profile-lemon.vercel.app/',
    githubUrl: 'https://github.com/jotaraujo/GitProfile',
  },
  {
    id: '5dimensoesdosono',
    title: '5 Dimensões do Sono',
    subtitle: 'Landing Page Institucional',
    img: '/projects/5dimensoes.jpg',
    category: 'freelance',
    overview:
      'Desenvolvimento da landing page de vendas do curso "5 Dimensões do Sono". O projeto foca em ajudar mães a estruturarem a rotina noturna de seus filhos, promovendo um desenvolvimento mais saudável.',
    result:
      'O design precisava transmitir confiança e tranquilidade. Construí uma interface de alta performance com animações iterativas via GSAP, garantindo uma jornada de conversão fluida, semântica e focada na excelência da experiência mobile (90%+ de acesso do público materno).',
    featured: false,
    tags: ['React', 'TailwindCSS', 'GSAP'],
    demoUrl: 'https://www.5dimensoesdosono.com.br/',
    githubUrl: 'https://github.com/jotaraujo/5_dimensoes_do_sono',
  },
];
