import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'gitprofile',
    title: 'GitProfile',
    description: 'Aplicação web completa para busca e análise detalhada de perfis do GitHub. Integração com API REST, controle de estado global e cache de requisições.',
    featured: true,
    tags: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'Zod','Vitest', 'Supabase'],
    demoUrl: null,
    githubUrl: 'https://github.com/jotaraujo/GitProfile',
  },
];
