import { Github, Linkedin, Twitter } from 'lucide-react';
import { FiverrIcon } from '@/components/icons/fiverr';
import { UpworkIcon } from '@/components/icons/upwork';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  {
    icon: UpworkIcon,
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~01ae778456dc5eb147',
    username: 'Kamran I.',
    color: 'upwork',
  },
  {
    icon: FiverrIcon,
    label: 'Fiverr',
    href: 'https://www.fiverr.com/fsd_kamran',
    username: '@fsd_kamran',
    color: 'fiverr',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/developer-kamran-iqbal/',
    username: 'Kamran Iqbal',
    color: 'cyan',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/developer-kamran',
    username: '@developer-kamran',
    color: 'foreground',
  },
];
