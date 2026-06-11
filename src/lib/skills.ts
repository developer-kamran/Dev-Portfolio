import { Monitor, Server, Database, Wrench } from 'lucide-react';

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Monitor,
    color: 'cyan',
    skills: [
      { name: 'React.js', level: 95, icon: '⚛️' },
      { name: 'Next.js', level: 90, icon: '▲' },
      { name: 'TypeScript', level: 92, icon: '🔷' },
      { name: 'Vue.js', level: 70, icon: '💚' },
      { name: 'Tailwind CSS', level: 95, icon: '🎨' },
      { name: 'Redux Toolkit', level: 85, icon: '🔄' },
      { name: 'GraphQL', level: 85, icon: '◈' },
      { name: 'Framer Motion', level: 82, icon: '✨' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    color: 'purple',
    skills: [
      { name: 'Node.js', level: 93, icon: '🟢' },
      { name: 'Express.js', level: 90, icon: '⚡' },
      { name: 'Django', level: 99, icon: '🐍' },
      { name: 'Flask', level: 85, icon: '🌶️' },
      { name: 'FastAPI', level: 78, icon: '🚀' },
      { name: 'GraphQL', level: 75, icon: '🕸️' },
      { name: 'Beautiful Soup (Scraping)', level: 95, icon: '🕷️' },
      { name: 'WebSockets', level: 72, icon: '📡' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: Database,
    color: 'cyan',
    skills: [
      { name: 'PostgreSQL', level: 90, icon: '🐘' },
      { name: 'MongoDB', level: 90, icon: '🍃' },
      { name: 'MySQL', level: 82, icon: '🐬' },
      { name: 'Supabase', level: 88, icon: '⚡' },
      { name: 'Firebase', level: 75, icon: '🔥' },
      { name: 'Redis', level: 78, icon: '🔴' },
      { name: 'Prisma ORM', level: 85, icon: '🔺' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: Wrench,
    color: 'purple',
    skills: [
      { name: 'Git / GitHub', level: 95, icon: '🐙' },
      { name: 'AWS', level: 78, icon: '☁️' },
      { name: 'Docker', level: 85, icon: '🐳' },
      { name: 'CI/CD Pipelines', level: 80, icon: '🔄' },
      { name: 'Jest / Mocha', level: 82, icon: '🧪' },
      { name: 'Nginx', level: 75, icon: '🌐' },
    ],
  },
];

export const PROFICIENCY_LEVELS = [
  'Beginner',
  'Familiar',
  'Proficient',
  'Advanced',
  'Expert',
] as const;
type Proficiency = (typeof PROFICIENCY_LEVELS)[number];

export function levelFromPercent(level: number): Proficiency {
  if (level >= 90) return 'Expert';
  if (level >= 80) return 'Advanced';
  if (level >= 70) return 'Proficient';
  if (level >= 55) return 'Familiar';
  return 'Beginner';
}
