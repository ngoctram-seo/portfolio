import { LanguageProvider } from '@/i18n';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Journey from '@/components/Journey';
import LogoMarquee from '@/components/LogoMarquee';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import BackToTop from '@/components/BackToTop';
import ZaloButton from '@/components/ZaloButton';
import CustomCursor from '@/components/CustomCursor';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-hidden text-ink">
        {/* Animated ambient background across the whole page */}
        <div className="page-bg" aria-hidden="true">
          <span className="page-blob page-blob-1" />
          <span className="page-blob page-blob-2" />
          <span className="page-blob page-blob-3" />
        </div>

        <Navbar />
        <main className="relative">
          <Hero />
          <About />
          <Journey />
          <LogoMarquee />
          <Projects />
          <Stack />
          <Education />
          <Contact />
        </main>

        <BackToTop />
        <ZaloButton />
        <CustomCursor />
      </div>
    </LanguageProvider>
  );
}
