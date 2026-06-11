import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Terminal } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Background */}
      <div className='absolute inset-0'>
        <img
          src={heroBg}
          alt='Hero background'
          className='w-full h-full object-cover opacity-30'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background' />
        <div className='absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80' />
      </div>

      {/* Ambient orbs */}
      <div
        className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.07] blur-3xl pointer-events-none'
        style={{ background: 'hsl(var(--cyan))' }}
      />
      <div
        className='absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full opacity-[0.04] blur-3xl pointer-events-none'
        style={{ background: 'hsl(var(--cyan-glow))' }}
      />

      {/* Grid overlay */}
      <div
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage: `linear-gradient(hsl(186 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(186 100% 50%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className='relative z-10 container mx-auto px-6 py-32 text-center'>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex items-center justify-center mb-6'
        >
          <span
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium'
            style={{
              borderColor: 'hsl(var(--cyan) / 0.3)',
              background: 'hsl(var(--cyan) / 0.08)',
              color: 'hsl(var(--cyan))',
            }}
          >
            <span className='w-2 h-2 rounded-full bg-green-accent animate-pulse' />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className='text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight mb-4'>
            <span className='text-foreground'>Hi, I'm </span>
            <span className='gradient-text glow-text'>Kamran Iqbal</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='flex items-center justify-center gap-3 mb-6'
        >
          <div
            className='h-px flex-1 max-w-16'
            style={{ background: 'hsl(var(--cyan) / 0.4)' }}
          />
          <div
            className='flex items-center gap-2 font-mono text-sm'
            style={{ color: 'hsl(var(--cyan))' }}
          >
            <Terminal className='w-4 h-4' />
            <span>Full Stack Developer</span>
          </div>
          <div
            className='h-px flex-1 max-w-16'
            style={{ background: 'hsl(var(--cyan) / 0.4)' }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className='text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-muted-foreground'
        >
          I build{' '}
          <span className='text-foreground font-medium'>
            scalable, high-performance web applications
          </span>{' '}
          using modern technologies, transforming complex challenges into{' '}
          <span className='gradient-text font-medium'>
            elegant digital experiences
          </span>
          .
        </motion.p>

        {/* Tech stack chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='flex flex-wrap items-center justify-center gap-2 mb-10'
        >
          {['React', 'Node.js', 'Django', 'PostgreSQL', 'Docker', 'AWS'].map(
            (tech) => (
              <span key={tech} className='tech-badge font-mono text-xs'>
                {tech}
              </span>
            ),
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='flex flex-col sm:flex-row items-center justify-center gap-4'
        >
          <button
            onClick={() => scrollTo('#projects')}
            className='btn-primary text-base px-8 py-4 animate-pulse-glow'
          >
            <ExternalLink className='w-5 h-5' />
            View My Work
          </button>
          <a
            href='/resume-kamran-iqbal.pdf'
            download
            className='btn-outline text-base px-8 py-4'
          >
            <Download className='w-5 h-5' />
            Download CV
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className='absolute bottom-10 left-1/2 -translate-x-1/2'
        >
          <button
            onClick={() => scrollTo('#about')}
            className='flex flex-col items-center gap-2 text-muted-foreground hover:text-cyan transition-colors group'
          >
            <span className='text-xs font-mono tracking-widest uppercase'>
              Scroll
            </span>
            <ArrowDown className='w-4 h-4 animate-bounce group-hover:text-cyan' />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
