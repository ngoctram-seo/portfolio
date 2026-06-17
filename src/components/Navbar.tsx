import { useEffect, useState } from 'react';
import { ArrowRight, Download, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLang, content, CV, EMAIL } from '@/i18n';

export default function Navbar() {
  const { lang, setLang } = useLang();
  const t = content[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['about', 'journey', 'projects', 'stack', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const links = [
    { label: t.about, href: '#about' },
    { label: t.journey, href: '#journey' },
    { label: t.projects, href: '#projects' },
    { label: t.stack, href: '#stack' },
    { label: t.contact, href: '#contact' }
  ];

  const LangToggle = () => (
    <div className="flex items-center rounded-full border border-ink/10 bg-white/70 p-0.5 text-xs font-semibold">
      {(['vi', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 transition ${lang === l ? 'bg-ink text-white' : 'text-ink/55 hover:text-ink'}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Primary navigation"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all duration-300 ${
          scrolled ? 'glass shadow-soft' : 'glass'
        }`}
      >
        <a href="#hero" className="flex items-center gap-3" aria-label="Tram Le portfolio home">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white shadow-sm">
            <span className="signature -mt-1 text-[1.7rem] leading-none text-ink">tl</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => {
            const isActive = link.href === `#${active}`;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition ${isActive ? 'text-teal' : 'text-ink/70 hover:text-ink'}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LangToggle />
          <Button asChild size="sm" className="cv-glow group gap-2 bg-gradient-to-r from-indigo to-sky text-white hover:opacity-95">
            <a href={CV[lang]} target="_blank" rel="noreferrer" aria-label={t.downloadCV}>
              <Download className="h-4 w-4 transition group-hover:translate-y-0.5" />
              {t.downloadCV}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="default" size="icon" aria-label="Open mobile menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mb-8 pr-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">SEO &amp; GEO Specialist</p>
                <p className="mt-2 text-sm text-ink/60">{content[lang].contact.location}</p>
              </div>
              <div className="grid gap-4">
                {links.map((link) => (
                  <a key={link.href} href={link.href} className="font-display text-3xl font-bold tracking-[-0.04em] text-ink">
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-8 grid gap-3">
                <Button asChild className="cv-glow justify-between bg-gradient-to-r from-indigo to-sky pr-2 text-white">
                  <a href={CV[lang]} target="_blank" rel="noreferrer">
                    {t.downloadCV}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25">
                      <Download className="h-4 w-4" />
                    </span>
                  </a>
                </Button>
                <Button asChild variant="secondary" className="justify-between pr-2">
                  <a href={`mailto:${EMAIL}`}>
                    {t.contactNow}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
