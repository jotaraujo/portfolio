import type React from 'react'
import {
  React as ReactIcon,
  TypeScript as TypeScriptIcon,
  TailwindCSS as TailwindIcon,
  FramerLight as FramerIcon,
  ReactQuery as QueryIcon,
  Git as GitIcon,
  Biome,
  Supabase,
  PostgreSQL,
  Prisma,
} from 'developer-icons'
import GsapIcon from '../assets/gsap.svg?react'

export interface Skill {
  name: string
  Logo?: React.ComponentType<{ size?: number; className?: string }>
}

export const FRONTEND_SKILLS: Skill[] = [
  { name: 'React', Logo: ReactIcon },
  { name: 'TypeScript', Logo: TypeScriptIcon },
  { name: 'TailwindCSS', Logo: TailwindIcon },
  { name: 'Framer Motion', Logo: FramerIcon },
  { name: 'TanStack Query', Logo: QueryIcon },
  { name: 'GSAP', Logo: GsapIcon },
]

export const BACKEND_TOOLING_SKILLS: Skill[] = [
  { name: 'PostgreSQL', Logo: PostgreSQL },
  { name: 'Supabase', Logo: Supabase },
  { name: 'Prisma', Logo: Prisma },
  { name: 'Biome', Logo: Biome },
  { name: 'Git / GitHub', Logo: GitIcon },
]

export const SKILLS = [...FRONTEND_SKILLS, ...BACKEND_TOOLING_SKILLS]
