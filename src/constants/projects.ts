import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'gitprofile',
    title: 'GitProfile',
    img: '/gitprofile.png',
    description:
      'Estruturei a arquitetura antes de qualquer acabamento com estado global com Zustand e cache com TanStack Query para o refinamento da UI acontecer sobre uma base sólida.',
    featured: true,
    tags: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'Zod','Vitest', 'Supabase'],
    demoUrl: 'https://git-profile-lemon.vercel.app/',
    githubUrl: 'https://github.com/jotaraujo/GitProfile',
  },
];
