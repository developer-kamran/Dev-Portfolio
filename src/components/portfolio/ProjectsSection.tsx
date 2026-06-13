import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'SKTech AI Assistant',
    subtitle: 'AI Chat Application',
    description:
      'A company-wide AI assistant powered by RAG, enabling employees to query internal policies and documentation in natural language — featuring hybrid search, neural re-ranking, real-time streaming responses, conversation history, and automatic source citations.',
    points: [
      'Hybrid RAG pipeline combining BM25, FAISS, and neural re-ranking for high-precision retrieval',
      'Real-time streaming responses with Redis sessions, and zero-downtime document refresh',
      'Multi-domain intent routing with source citations and department attribution per response',
    ],
    tech: [
      'Flask',
      'React',
      'FAISS',
      'BM25',
      'Redis',
      'OpenRouter',
      'Watchdog',
    ],
    image:
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    liveUrl: 'https://github.com/developer-kamran/SK_Tech_ai_company_assistant',
    githubUrl:
      'https://github.com/developer-kamran/SK_Tech_ai_company_assistant',
    featured: true,
    gradient: 'from-cyan/20 to-blue-900/20',
  },
  {
    id: 2,
    title: 'Digivault',
    subtitle: 'A Digital Marketplace',
    description:
      'A digital marketplace for purchasing downloadable products, featuring secure payments via Stripe, email order confirmations, and an intuitive admin dashboard for managing products and sales..',
    points: [
      'Admin Dashboard for viewing analytics and managing products, customer and sales',
      'Secure Stripe payment integration with email order confirmations and downloadable product delivery',
    ],
    tech: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Prisma',
      'Stripe',
      'Resend',
      'shadcn/ui',
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    liveUrl: 'https://github.com/developer-kamran/Nextjs-digital-marketplace',
    githubUrl: 'https://github.com/developer-kamran/Nextjs-digital-marketplace',
    featured: true,
    gradient: 'from-purple/20 to-indigo-900/20',
  },
  {
    id: 3,
    title: 'CodeWear',
    subtitle: 'E-Commerce Platform',
    description:
      'Built a modern ecommerce platform with customer authentication, advanced checkout features, Stripe payments, promo code functionality, and comprehensive order tracking.',
    points: [
      'Customer login and registration for purchases, along with product listings organized by categories and discounted prices.',
      'Advanced checkout system capturing shipping and billing addresses, integrated with Stripe payment and promo code functionality.',
      'Order tracking with a delivery timeline.',
    ],
    tech: ['Django', 'PostgreSQL', 'Stripe', 'Bootstrap'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    liveUrl: 'https://github.com/developer-kamran/Django-ecommerce-store',
    githubUrl: 'https://github.com/developer-kamran/Django-ecommerce-store',
    featured: false,
    gradient: 'from-purple/20 to-pink-900/20',
  },
  {
    id: 4,
    title: 'ProjectHub CRM',
    subtitle: 'Project Management Platform',
    description:
      'Developed a full-stack project management application for managing clients and their associated projects',
    points: [
      'Built client management functionality to add and store essential client contact information',
      'Implemented project creation, assignment, updating, and deletion features linked to specific clients',
      'Integrated GraphQL with Apollo Client for efficient data fetching, mutations, and state management',
    ],
    tech: ['React', 'Express', 'MongoDB', 'GraphQL', 'Apollo Client'],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    liveUrl:
      'https://github.com/developer-kamran/Fullstack-project-management-app',
    githubUrl:
      'https://github.com/developer-kamran/Fullstack-project-management-app',
    featured: false,
    gradient: 'from-green-900/20 to-cyan/20',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id='projects' className='py-24 relative overflow-hidden' ref={ref}>
      <div
        className='absolute bottom-0 right-0 w-1/2 h-1/2 opacity-5 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse at right bottom, hsl(265 60% 65%), transparent 70%)',
        }}
      />

      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <p
            className='text-sm font-mono mb-2'
            style={{ color: 'hsl(var(--cyan))' }}
          >
            // what i've built
          </p>
          <h2 className='section-title'>
            Featured <span className='gradient-text'>Projects</span>
          </h2>
          <div className='section-divider' />
          <p className='section-subtitle mx-auto'>
            A selection of projects that showcase my skills across the full
            stack.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-5xl mx-auto'
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className='group relative rounded-2xl overflow-hidden border card-hover cursor-pointer'
              style={{
                background: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div
                  className='absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold'
                  style={{
                    background: 'hsl(var(--cyan) / 0.15)',
                    color: 'hsl(var(--cyan))',
                    border: '1px solid hsl(var(--cyan) / 0.3)',
                  }}
                >
                  <Star className='w-3 h-3 fill-current' />
                  Featured
                </div>
              )}

              {/* Project image */}
              <div className='relative h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-60`}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent' />
              </div>

              {/* Card content */}
              <div className='p-6'>
                <div className='mb-1'>
                  <span
                    className='text-xs font-mono'
                    style={{ color: 'hsl(var(--cyan))' }}
                  >
                    {project.subtitle}
                  </span>
                </div>
                <h3 className='text-xl font-bold text-foreground mb-3 group-hover:text-cyan transition-colors'>
                  {project.title}
                </h3>

                <p className='text-muted-foreground text-sm leading-relaxed mb-4'>
                  {project.description}
                </p>

                {/* Key points */}
                <ul className='space-y-1.5 mb-5'>
                  {project.points.map((point, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-2 text-xs text-muted-foreground'
                    >
                      <span
                        className='mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0'
                        style={{ background: 'hsl(var(--cyan))' }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className='flex flex-wrap gap-1.5 mb-5'>
                  {project.tech.map((t) => (
                    <span key={t} className='tech-badge'>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className='flex gap-3'>
                  <a
                    href={project.liveUrl}
                    className='flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200'
                    style={{
                      background: 'hsl(var(--cyan) / 0.12)',
                      color: 'hsl(var(--cyan))',
                      border: '1px solid hsl(var(--cyan) / 0.25)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        'hsl(var(--cyan) / 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        'hsl(var(--cyan) / 0.12)';
                    }}
                  >
                    <ExternalLink className='w-4 h-4' />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className='flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200'
                    style={{
                      borderColor: 'hsl(var(--border))',
                      color: 'hsl(var(--muted-foreground))',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        'hsl(var(--foreground) / 0.3)';
                      e.currentTarget.style.color = 'hsl(var(--foreground))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'hsl(var(--border))';
                      e.currentTarget.style.color =
                        'hsl(var(--muted-foreground))';
                    }}
                  >
                    <Github className='w-4 h-4' />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className='text-center mt-12'
        >
          <a
            href='https://github.com/developer-kamran?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-outline'
          >
            <Github className='w-5 h-5' />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
