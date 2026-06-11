import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  skillCategories,
  levelFromPercent,
  PROFICIENCY_LEVELS,
} from '../../lib/skills';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

function SkillCard({
  name,
  level,
  icon,
  color,
}: {
  name: string;
  level: number;
  icon: string;
  color: string;
}) {
  const proficiency = levelFromPercent(level);
  const filledDots = PROFICIENCY_LEVELS.indexOf(proficiency) + 1;
  const accentColor =
    color === 'cyan' ? 'hsl(var(--cyan))' : 'hsl(var(--purple))';

  return (
    <motion.div
      variants={itemVariants}
      className='group flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-200'
      style={{
        background: 'hsl(var(--surface))',
        borderColor: 'hsl(var(--surface-border))',
      }}
      whileHover={{
        borderColor:
          color === 'cyan'
            ? 'hsl(var(--cyan) / 0.4)'
            : 'hsl(var(--purple) / 0.4)',
        background:
          color === 'cyan'
            ? 'hsl(var(--cyan) / 0.05)'
            : 'hsl(var(--purple) / 0.05)',
      }}
    >
      <div className='flex items-center gap-3'>
        <span className='text-lg leading-none'>{icon}</span>
        <span className='text-sm font-medium text-foreground'>{name}</span>
      </div>
      <div className='flex items-center gap-2'>
        <span
          className='text-[10px] font-mono uppercase tracking-wider'
          style={{ color: 'hsl(var(--muted-foreground))' }}
        >
          {proficiency}
        </span>
        <div className='flex items-center gap-0.5'>
          {PROFICIENCY_LEVELS.map((_, i) => (
            <span
              key={i}
              className='w-1.5 h-1.5 rounded-full transition-colors'
              style={{
                background: i < filledDots ? accentColor : 'hsl(var(--border))',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('frontend');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const activeCategory = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section id='skills' className='py-24 relative overflow-hidden' ref={ref}>
      {/* bg accent */}
      <div
        className='absolute top-0 left-0 w-1/3 h-full opacity-5 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse at left, hsl(186 100% 50%), transparent 70%)',
        }}
      />

      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <p
            className='text-sm font-mono mb-2'
            style={{ color: 'hsl(var(--cyan))' }}
          >
            // my toolkit
          </p>
          <h2 className='section-title'>
            Technical <span className='gradient-text'>Skills</span>
          </h2>
          <div className='section-divider' />
          <p className='section-subtitle mx-auto'>
            A curated set of technologies I use to build modern,
            production-grade applications.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-3 mb-10'
        >
          {skillCategories.map(({ id, label, icon: Icon, color }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border ${
                activeTab === id
                  ? color === 'cyan'
                    ? 'border-cyan/50 bg-cyan/10 text-cyan shadow-glow'
                    : 'border-purple/50 bg-purple/10 text-purple'
                  : 'border-border text-muted-foreground hover:border-border hover:text-foreground'
              }`}
            >
              <Icon className='w-4 h-4' />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'
        >
          {activeCategory.skills.map((skill) => (
            <SkillCard
              key={skill.name}
              {...skill}
              color={activeCategory.color}
            />
          ))}
        </motion.div>

        {/* All skills cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='mt-16 text-center'
        >
          <p className='text-sm text-muted-foreground mb-5'>
            Also familiar with:
          </p>
          <div className='flex flex-wrap justify-center gap-2'>
            {[
              'OpenAI API',
              'shadcn/ui',
              'Celery',
              'Stripe API',
              'tRPC',
              'JWT',
              'OAuth2',
              'TanStack Query',
              'GSAP',
              'Material UI',
              'Cloudinary',
              'Vercel',
            ].map((tag) => (
              <span key={tag} className='skill-tag cursor-default'>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
