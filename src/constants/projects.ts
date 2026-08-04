import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'gitprofile',
    title: 'GitProfile',
    subtitle: 'Plataforma de triagem de candidatos no GitHub',
    img: '/projects/gitprofile.png',
    overview:
      'Recrutadores avaliam devs pelo perfil público, mas o GitHub não foi feito para triar — comparar candidatos vira um trabalho manual de abas abertas.',
    result:
      'Automatizo isso com auth de dois papéis, triagem por requisitos dinâmicos e comparação de stacks — no mesmo padrão de todo projeto: TypeScript strict sem erros, Conventional Commits e documentação do PRD ao DESIGN. É esse rigor que sustenta os 99/100/100 do Lighthouse, com o app em produção na Vercel.',
    featured: true,
    tags: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'Zod', 'Vitest', 'Supabase'],
    demoUrl: 'https://git-profile-lemon.vercel.app/',
    githubUrl: 'https://github.com/jotaraujo/GitProfile',
  },
];
