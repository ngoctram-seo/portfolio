import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Typing from '@/components/Typing';
import CountUp from '@/components/CountUp';
import Magnet from '@/components/Magnet';
import { useLang, content, CV, IMG } from '@/i18n';

const floatPos = [
  { top: '8%', left: '2%' },
  { top: '20%', right: '40%' },
  { top: '4%', right: '6%' },
  { top: '46%', left: '0%' },
  { bottom: '30%', right: '2%' },
  { bottom: '14%', left: '6%' },
  { top: '60%', right: '38%' },
  { bottom: '6%', right: '30%' }
];

export default function Hero() {
  const { lang } = useLang();
  const t = content[lang].hero;
  const portrait = `${IMG}tram-hero.png`;

  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-paper">
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_0%,#eef2ff_0%,#f4f7fd_45%,#ecfeff_100%)]" />
      <div className="aurora aurora-1 left-[-6rem] top-24 h-72 w-72 bg-indigo/40" />
      <div className="aurora aurora-2 right-[-4rem] top-40 h-80 w-80 bg-sky/40" />
      <div className="aurora aurora-3 bottom-[-6rem] left-1/3 h-72 w-72 bg-teal/30" />

      {/* Floating keyword chips (constellation feel) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {t.floats.map((label, i) => (
          <span
            key={label}
            className={`aurora-${(i % 3) + 1} absolute rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-xs font-medium text-ink/70 shadow-sm backdrop-blur`}
            style={floatPos[i % floatPos.length]}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-32 sm:px-8 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
          <div>
            {/* Availability status */}
            <div className="animate-fade-up flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1.5 text-xs font-semibold text-teal">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                </span>
                {t.status}
              </span>
              <span className="flex items-center gap-1.5">
                {t.modes.map((m) => (
                  <span key={m} className="rounded-full border border-ink/10 bg-white/70 px-2.5 py-1 text-xs font-medium text-ink/70">
                    {m}
                  </span>
                ))}
              </span>
            </div>

            <h1 className="animate-fade-up mt-5 font-display text-[clamp(2.6rem,7vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-ink [animation-delay:120ms]">
              {t.hello} <span className="gradient-text">{t.name}</span>.
            </h1>

            {/* Role line (replaces old tagline) + typing specialties */}
            <div className="animate-fade-up mt-4 [animation-delay:200ms]">
              <p className="font-display text-[clamp(1.3rem,3vw,2.1rem)] font-bold tracking-[-0.02em] text-ink">
                {t.role}
              </p>
              <p className="mt-1 font-display text-[clamp(1rem,2vw,1.35rem)] font-semibold text-ink/55">
                <Typing words={t.rotating} className="gradient-text" />
              </p>
            </div>

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
                <a href="#journey" aria-label={t.viewJourney}>
                  {t.viewJourney}
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white transition duration-500 group-hover:translate-y-0.5">
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </span>
                </a>
              </Button>
            </div>
          </div>

          {/* Portrait (image already has its own glowing oval ring) */}
          <Magnet className="animate-fade-up relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem] [animation-delay:260ms]" padding={140} strength={6}>
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-indigo/30 via-sky/25 to-teal/30 blur-3xl" />
            <img src={portrait} alt="Le Hoang Ngoc Tram" className="relative w-full drop-shadow-xl" loading="eager" />
          </Magnet>
        </div>

        {/* Stats with count-up */}
        <div className="animate-fade-up mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 [animation-delay:480ms]">
          {t.stats.map(([number, label]) => (
            <div key={label} className="glass rounded-2xl px-4 py-3">
              <CountUp value={number} className="font-display text-2xl font-bold tracking-[-0.03em] text-ink" />
              <div className="mt-0.5 text-[0.68rem] uppercase tracking-[0.1em] text-body">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
