import { LanguageProvider } from '@/i18n';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Contact from '@/components/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Journey />
          <Projects />
          <Stack />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}
