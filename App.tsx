import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import Experience from '@/components/Experience';
import Stack from '@/components/Stack';
import Contact from '@/components/Contact';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-warm text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </div>
  );
}
