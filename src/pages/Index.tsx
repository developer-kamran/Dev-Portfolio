import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      <main>
        <HeroSection />
        {/* Divider */}
        <div className='container mx-auto px-6'>
          <div
            className='h-px w-full'
            style={{
              background:
                'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)',
            }}
          />
        </div>
        <AboutSection />
        <div className='container mx-auto px-6'>
          <div
            className='h-px w-full'
            style={{
              background:
                'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)',
            }}
          />
        </div>
        <ProjectsSection />
        <div className='container mx-auto px-6'>
          <div
            className='h-px w-full'
            style={{
              background:
                'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)',
            }}
          />
        </div>
        <SkillsSection />
        <div className='container mx-auto px-6'>
          <div
            className='h-px w-full'
            style={{
              background:
                'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)',
            }}
          />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
