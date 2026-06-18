import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Typing from '@/components/Typing';
import Magnet from '@/components/Magnet';
import { useLang, content, CV, IMG } from '@/i18n';

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

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-32 sm:px-8 lg:pt-28">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-10">
          {/* Top text: status + name + role */}
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <div className="animate-fade-up flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1.5 text-xs font-semibold text-teal">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                </span>
                {t.status}
              </span>
              <span className="flex items-center gap-1.5">
                {t.modes.map((m, i) => (
                  <span
                    key={m}
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${i === 0 ? 'bg-indigo/12 text-indigo' : 'bg-sky/12 text-sky'}`}
                  >
                    {m}
                  </span>
                ))}
              </span>
            </div>

            <h1 className="animate-fade-up mt-5 font-display text-[clamp(2.6rem,7vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-ink [animation-delay:120ms]">
              {t.hello} <span className="gradient-text">{t.name}</span>.
            </h1>

            <div className="animate-fade-up mt-4 [animation-delay:200ms]">
              <p className="font-display text-[clamp(1.3rem,3vw,2.1rem)] font-bold tracking-[-0.02em] text-ink">{t.role}</p>
              <p className="mt-1 font-display text-[clamp(1rem,2vw,1.35rem)] font-semibold text-ink/55">
                <Typing words={t.rotating} className="gradient-text" />
              </p>
            </div>
          </div>

          {/* Portrait */}
          <Magnet
            className="order-2 mx-auto w-full max-w-[20rem] animate-fade-up sm:max-w-[24rem] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center [animation-delay:260ms]"
            padding={140}
            strength={6}
          >
            <img src={portrait} alt="Le Hoang Ngoc Tram" className="relative w-full drop-shadow-xl" loading="eager" />
          </Magnet>

          {/* Bottom text: intro + CTAs */}
          <div className="order-3 lg:col-start-1 lg:row-start-2">
            <p className="animate-fade-up max-w-2xl text-base leading-8 text-body [animation-delay:300ms]">{t.intro}</p>

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
        </div>

        {/* Stats */}
        <div className="animate-fade-up mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 [animation-delay:480ms]">
          {t.stats.map(([number, label], i) => (
            <div
              key={label}
              className={`glass rounded-2xl px-4 py-4 ${i === t.stats.length - 1 ? 'max-sm:col-span-2 max-sm:mx-auto max-sm:w-1/2' : ''}`}
            >
              <div className="gradient-text font-display text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">{number}</div>
              <div className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-body">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
