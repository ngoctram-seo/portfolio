import { ArrowRight, Download, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <footer id="contact" className="bg-charcoal px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal">Contact</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.5rem,6vw,6rem)] font-semibold leading-[0.92] tracking-[-0.075em]">
              Let’s grow something organic.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
              Open to SEO, GEO, organic growth, and technical SEO opportunities — on-site in Ho Chi Minh City or remote.
            </p>
          </div>
          <div className="grid gap-3">
            <a className="liquid-glass flex items-center justify-between rounded-3xl p-5 text-white transition hover:bg-white/10" href="mailto:tramle37@gmail.com" aria-label="Email Joyce Le">
              <span className="flex items-center gap-3"><Mail className="h-5 w-5 text-teal" /> tramle37@gmail.com</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a className="liquid-glass flex items-center justify-between rounded-3xl p-5 text-white transition hover:bg-white/10" href="https://www.linkedin.com/in/tram-le-seo/" target="_blank" rel="noreferrer" aria-label="Open Joyce Le LinkedIn">
              <span className="flex items-center gap-3"><Linkedin className="h-5 w-5 text-teal" /> linkedin.com/in/tram-le-seo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a className="liquid-glass flex items-center justify-between rounded-3xl p-5 text-white transition hover:bg-white/10" href="tel:+84908083219" aria-label="Call Joyce Le">
              <span className="flex items-center gap-3"><Phone className="h-5 w-5 text-teal" /> +84 908 083 219</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="liquid-glass flex items-center gap-3 rounded-3xl p-5 text-white/70">
              <MapPin className="h-5 w-5 text-teal" /> Ho Chi Minh City, Vietnam
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-teal hover:bg-teal/90">
            <a href={`${import.meta.env.BASE_URL}cv/Joyce_Le_CV_EN.pdf`} aria-label="Download English CV">
              <Download className="mr-2 h-4 w-4" /> Download English CV
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`${import.meta.env.BASE_URL}cv/Joyce_Le_CV_VI.pdf`} aria-label="Download Vietnamese CV">
              <Download className="mr-2 h-4 w-4" /> Download Vietnamese CV
            </a>
          </Button>
        </div>

        <p className="mt-16 text-xs text-white/35">© 2026 Le Hoang Ngoc Tram (Joyce Le). Built with React, Vite, Tailwind CSS, TypeScript, and shadcn/ui.</p>
      </div>
    </footer>
  );
}
