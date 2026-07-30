import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'gitprofile',
    title: 'GitProfile',
    description: 'Aplicação web completa para busca e análise detalhada de perfis do GitHub. Integração com API REST, controle de estado global e cache de requisições.',
    featured: true,
    tags: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'Zod', 'Supabase', 'Vitest'],
    demoUrl: null,
    githubUrl: 'https://github.com/jotaraujo/GitProfile',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    description: 'Gerenciador de tarefas minimalista com suporte a drag-and-drop e persistência de dados local.',
    featured: false,
    tags: ['React', 'TailwindCSS'],
    demoUrl: null,
    githubUrl: 'https://github.com/jotaraujo',
  },
  {
    id: 'weathernow',
    title: 'WeatherNow',
    description: 'Dashboard de previsão meteorológica em tempo real com consumo de API externa e visualização limpa.',
    featured: false,
    tags: ['React', 'API REST'],
    demoUrl: null,
    githubUrl: 'https://github.com/jotaraujo',
  },
];
