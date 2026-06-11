import { Code2, ArrowUp, Heart } from 'lucide-react';
import { socialLinks, navLinks } from '@/lib/links';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className='relative border-t'
      style={{ borderColor: 'hsl(var(--border))' }}
    >
      {/* Subtle top glow */}
      <div
        className='absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px'
        style={{
          background:
            'linear-gradient(90deg, transparent, hsl(var(--cyan) / 0.4), transparent)',
        }}
      />

      <div className='container mx-auto px-6'>
        {/* Main footer content */}
        <div className='py-12 grid md:grid-cols-3 gap-10'>
          {/* Brand column */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-primary'>
                <Code2 className='w-4 h-4 text-primary-foreground' />
              </div>
              <span className='font-bold text-lg text-foreground'>
                Dev <span className='gradient-text'>Kamran</span>
              </span>
            </div>
            <p className='text-sm text-muted-foreground leading-relaxed max-w-xs'>
              Building scalable web applications with passion and precision.
              Available for freelance and full-time opportunities.
            </p>
            <div className='flex items-center gap-3'>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel='noopener noreferrer'
                  aria-label={label}
                  className='w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 border-border text-muted-foreground hover:border-cyan/50 hover:text-cyan hover:bg-cyan/10'
                >
                  <Icon className='w-4 h-4' />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className='text-sm font-semibold text-foreground mb-4 uppercase tracking-wider'>
              Navigation
            </h4>
            <ul className='space-y-2.5'>
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className='text-sm text-muted-foreground hover:text-cyan transition-colors text-left'
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className='text-sm font-semibold text-foreground mb-4 uppercase tracking-wider'>
              Contact
            </h4>
            <ul className='space-y-2.5'>
              <li>
                <a
                  href='mailto:developer.kamraniqbal@gmail.com'
                  className='text-sm text-muted-foreground hover:text-cyan transition-colors'
                >
                  developer.kamraniqbal@gmail.com
                </a>
              </li>
              <li className='text-sm text-muted-foreground'>
                Karachi, Pakistan
              </li>
              <li>
                <span
                  className='inline-flex items-center gap-1.5 text-sm'
                  style={{ color: 'hsl(var(--green-accent))' }}
                >
                  <span className='w-1.5 h-1.5 rounded-full bg-green-accent animate-pulse' />
                  Available for work
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className='py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t'
          style={{ borderColor: 'hsl(var(--border))' }}
        >
          <p className='text-sm text-muted-foreground flex items-center gap-1.5'>
            © {new Date().getFullYear()} Kamran Iqbal. Built with
            <Heart
              className='w-3.5 h-3.5 inline'
              style={{ color: 'hsl(var(--destructive))' }}
            />
            using React & Tailwind
          </p>

          <button
            onClick={scrollToTop}
            className='flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan transition-colors group'
          >
            <span>Back to top</span>
            <div className='w-7 h-7 rounded-md border border-border flex items-center justify-center group-hover:border-cyan/50 group-hover:bg-cyan/10 transition-all'>
              <ArrowUp className='w-3.5 h-3.5' />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
