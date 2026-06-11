import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-card'
          : 'bg-transparent'
      }`}
    >
      <nav className='container mx-auto px-6 h-16 flex items-center justify-between'>
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className='flex items-center gap-2 group'
        >
          <div className='w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-primary shadow-glow'>
            <Code2 className='w-4 h-4 text-primary-foreground' />
          </div>
          <span className='font-bold text-lg text-foreground group-hover:text-cyan transition-colors'>
            Dev <span className='gradient-text'>Kamran</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className='btn-primary text-sm py-2'
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className='md:hidden p-2 rounded-lg border border-border text-muted-foreground hover:text-cyan hover:border-cyan/50 transition-all'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          {isOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className='md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden'
          >
            <div className='container mx-auto px-6 py-4 flex flex-col gap-1'>
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.href.slice(1)
                      ? 'text-cyan bg-cyan/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className='pt-2 pb-1'>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className='btn-primary w-full justify-center'
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
