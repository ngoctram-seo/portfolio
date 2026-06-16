import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLang, content, CV } from '@/i18n';

export default function Hero() {
  const { lang } = useLang();
  const t = content[lang].hero;
  const portrait = `${import.meta.env.BASE_URL}img/tram-portrait.jpg`;

  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-paper">
      {/* Bright gradient base + ambient aurora blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_0%,#eef2ff_0%,#f4f7fd_45%,#ecfeff_100%)]" />
      <div className="aurora aurora-1 left-[-6rem] top-24 h-72 w-72 bg-indigo/40" />
      <div className="aurora aurora-2 right-[-4rem] top-40 h-80 w-80 bg-sky/40" />
      <div className="aurora aurora-3 bottom-[-6rem] left-1/3 h-72 w-72 bg-teal/30" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-32 sm:px-8 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.26em] text-teal sm:text-sm">
              {t.eyebrow}
            </p>
            <h1 className="animate-fade-up mt-5 font-display text-[clamp(2.6rem,7vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-ink [animation-delay:120ms]">
              {t.hello} <span className="gradient-text">{t.name}</span>.
            </h1>
            <p className="animate-fade-up mt-5 max-w-2xl font-display text-[clamp(1.15rem,2.4vw,1.85rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink/80 [animation-delay:200ms]">
              {t.tagline}
            </p>
            <p className="animate-fade-up mt-5 max-w-2xl text-base leading-8 text-body [animation-delay:300ms]">
              {t.intro}
            </p>

            <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:400ms]">
              <Button asChild size="lg" className="cv-glow group bg-gradient-to-r from-indigo to-sky text-white hover:opacity-95">
                <a href={CV[lang]} target="_blank" rel="noreferrer" aria-label={t.downloadCV}>
                  <Download className="mr-3 h-5 w-5 transition duration-300 group-hover:translate-y-0.5" />
                  {t.downloadCV}
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="group">
                <a href="#case-studies" aria-label={t.viewCases}>
                  {t.viewCases}
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white transition duration-500 group-hover:-rotate-45">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="animate-fade-up relative mx-auto w-full max-w-xs sm:max-w-sm [animation-delay:260ms]">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo/30 via-sky/25 to-teal/30 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[2rem] p-2">
              <img src={portrait} alt="Le Hoang Ngoc Tram" className="w-full rounded-[1.5rem] object-cover" loading="eager" />
            </div>
          </div>
        </div>

        {/* Stats strip (in normal flow) */}
        <div className="animate-fade-up mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 [animation-delay:480ms]">
          {t.stats.map(([number, label]) => (
            <div key={label} className="glass rounded-2xl px-4 py-3">
              <div className="font-display text-2xl font-bold tracking-[-0.03em] text-ink">{number}</div>
              <div className="mt-0.5 text-[0.68rem] uppercase tracking-[0.1em] text-body">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
