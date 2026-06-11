import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, MapPin, ExternalLink } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';
import { highlights } from '@/lib/about';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const certifications = [
  {
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA — DLI Certificate',
    date: 'Issued Sept. 2025 · No Expiration',
    credentialUrl: '/NVIDIA_Deep_Learning Certificate.pdf', // replace with your actual credential URL
    accentColor: '#76b900', // NVIDIA green
    bgColor: 'rgba(118, 185, 0, 0.08)',
    borderColor: 'rgba(118, 185, 0, 0.25)',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id='about' className='py-24 relative overflow-hidden' ref={ref}>
      {/* Background accent */}
      <div
        className='absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse at right, hsl(265 60% 65%), transparent 70%)',
        }}
      />

      <div className='container mx-auto px-6'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='grid lg:grid-cols-2 gap-16 items-center'
        >
          {/* Image Side */}
          <motion.div
            variants={itemVariants}
            className='flex justify-center lg:justify-start'
          >
            <div className='relative'>
              <div
                className='absolute -inset-4 rounded-2xl opacity-20 animate-spin-slow'
                style={{
                  background:
                    'conic-gradient(from 0deg, hsl(var(--cyan)), hsl(var(--purple)), hsl(var(--cyan)))',
                  borderRadius: '1.5rem',
                }}
              />
              <div
                className='absolute -inset-3 rounded-2xl opacity-30'
                style={{
                  background: 'hsl(var(--cyan) / 0.1)',
                  borderRadius: '1.25rem',
                }}
              />
              <div
                className='relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-2'
                style={{ borderColor: 'hsl(var(--cyan) / 0.3)' }}
              >
                <img
                  src={profileImg}
                  alt='Profile'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent' />
              </div>

              <div
                className='absolute -bottom-4 -right-4 px-4 py-2.5 rounded-xl border shadow-card'
                style={{
                  background: 'hsl(var(--card))',
                  borderColor: 'hsl(var(--cyan) / 0.3)',
                }}
              >
                <div className='flex items-center gap-2'>
                  <span className='w-2.5 h-2.5 rounded-full bg-green-accent animate-pulse' />
                  <span className='text-sm font-semibold text-foreground'>
                    Open to work
                  </span>
                </div>
              </div>

              <div
                className='absolute -top-4 -left-4 px-3 py-2 rounded-xl border shadow-card flex items-center gap-1.5'
                style={{
                  background: 'hsl(var(--card))',
                  borderColor: 'hsl(var(--purple) / 0.3)',
                  color: 'hsl(var(--purple))',
                }}
              >
                <MapPin className='w-3.5 h-3.5' />
                <span className='text-xs font-medium'>Karachi, PK</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div variants={itemVariants} className='space-y-6'>
            <div>
              <p
                className='text-sm font-mono mb-2'
                style={{ color: 'hsl(var(--cyan))' }}
              >
                // about me
              </p>
              <h2 className='section-title mb-3'>
                Passionate Developer,{' '}
                <span className='gradient-text'>Problem Solver</span>
              </h2>
              <div className='section-divider !mx-0' />
            </div>

            <div className='space-y-4 text-muted-foreground leading-relaxed'>
              <p>
                I'm a full stack developer with
                <span className='gradient-text'> 3+ years </span> of hands-on
                experience building web applications that scale, gained through
                freelance work, personal projects, and academic
                collaborations—with a focus on creating impactful solutions
                across AI, e-commerce, and SaaS domains.
              </p>
              <p>
                Currently, I'm a final-year Computer Science undergraduate at{' '}
                <span className='gradient-text'>
                  UBIT (University of Karachi)
                </span>
                , where I've developed a strong foundation in software
                engineering while applying my skills to real-world projects.
              </p>
              <p>
                I'm passionate about writing clean, maintainable code and
                creating developer experiences that teams love to work with.
                When I'm not coding, you'll find me contributing to open source
                or mentoring junior developers.
              </p>
            </div>

            {/* Highlights grid */}
            <div className='grid grid-cols-2 gap-4'>
              {highlights.map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className='p-4 rounded-xl border card-hover'
                  style={{
                    background: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                  }}
                >
                  <div className='flex items-center gap-3'>
                    <div
                      className='w-10 h-10 rounded-lg flex items-center justify-center'
                      style={{
                        background:
                          color === 'cyan'
                            ? 'hsl(var(--cyan) / 0.12)'
                            : 'hsl(var(--purple) / 0.12)',
                      }}
                    >
                      <Icon
                        className='w-5 h-5'
                        style={{
                          color:
                            color === 'cyan'
                              ? 'hsl(var(--cyan))'
                              : 'hsl(var(--purple))',
                        }}
                      />
                    </div>
                    <div>
                      <p className='font-bold text-foreground text-lg leading-tight'>
                        {value}
                      </p>
                      <p className='text-xs text-muted-foreground'>{label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Certifications ── */}
            <div>
              <p
                className='text-sm font-mono mb-3'
                style={{ color: 'hsl(var(--cyan))' }}
              >
                // certifications
              </p>
              <div className='space-y-3'>
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className='relative flex items-center gap-4 p-4 rounded-xl border card-hover overflow-hidden'
                    style={{
                      background: 'hsl(var(--card))',
                      borderColor: cert.borderColor,
                    }}
                  >
                    {/* Left accent bar */}
                    <div
                      className='absolute left-0 top-0 bottom-0 w-1 rounded-l-xl'
                      style={{ background: cert.accentColor }}
                    />

                    {/* Icon badge */}
                    <div
                      className='ml-2 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'
                      style={{ background: cert.bgColor }}
                    >
                      <svg
                        viewBox='0 0 24 24'
                        className='w-5 h-5'
                        fill={cert.accentColor}
                      >
                        <path d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z' />
                      </svg>
                    </div>

                    {/* Text */}
                    <div className='flex-1 min-w-0'>
                      <p className='font-semibold text-foreground text-sm leading-tight'>
                        {cert.title}
                      </p>
                      <p
                        className='text-xs font-mono mt-0.5'
                        style={{ color: cert.accentColor }}
                      >
                        {cert.issuer}
                      </p>
                      <p className='text-xs text-muted-foreground mt-0.5'>
                        {cert.date}
                      </p>
                    </div>

                    {/* Verify link */}
                    <a
                      href={cert.credentialUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium flex-shrink-0 transition-opacity hover:opacity-80'
                      style={{
                        background: cert.bgColor,
                        color: cert.accentColor,
                        border: `1px solid ${cert.borderColor}`,
                      }}
                    >
                      <ExternalLink className='w-3 h-3' />
                      Verify
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <a
              href='/resume-kamran-iqbal.pdf'
              download
              className='btn-primary inline-flex'
            >
              <Download className='w-5 h-5' />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
