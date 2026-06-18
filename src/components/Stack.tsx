import { useEffect, useState } from 'react';
import { Search, BarChart3, Bot, Wrench, Users, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import LogoImg from '@/components/LogoImg';
import { useLang, content, toolDomain } from '@/i18n';

const ICONS = [Search, BarChart3, Bot, Wrench, Users];

export default function Stack() {
  const { lang } = useLang();
  const t = content[lang].stack;
  const groups = t.groups;
  const n = groups.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 2500);
    return () => clearInterval(id);
  }, [paused, n]);

  return (
    <section id="stack" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_10%_100%,#ecfeff,transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <Badge className="border-ink/10 bg-white/70 text-teal">{t.eyebrow}</Badge>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[1] tracking-[-0.035em] text-ink">
            {t.heading}
          </h2>
        </Reveal>

        {/* Coverflow carousel */}
        <div
          className="relative mx-auto mt-12 h-[440px] max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev / Next arrows (liquid glass) */}
          <button
            type="button"
            onClick={() => setActive((a) => (a - 1 + n) % n)}
            aria-label="Trước"
            className="liquid absolute left-0 top-[40%] z-40 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-white/70 text-ink shadow-soft backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/90 sm:-left-3 lg:-left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setActive((a) => (a + 1) % n)}
            aria-label="Sau"
            className="liquid absolute right-0 top-[40%] z-40 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-white/70 text-ink shadow-soft backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/90 sm:-right-3 lg:-right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {groups.map((group, i) => {
            let d = i - active;
            if (d > n / 2) d -= n;
            if (d < -n / 2) d += n;
            const isCenter = d === 0;
            const visible = Math.abs(d) <= 1;
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={group.title}
                onClick={() => !isCenter && setActive(i)}
                className={`group absolute left-1/2 top-0 w-[84%] sm:w-[62%] lg:w-[46%] transition-all duration-700 ease-out ${
                  isCenter ? 'z-30 cursor-default' : 'cursor-pointer hover:opacity-100'
                }`}
                style={{
                  transform: `translateX(calc(-50% + ${d * 58}%)) scale(${isCenter ? 1 : 0.82})`,
                  opacity: visible ? 1 : 0,
                  zIndex: visible ? (isCenter ? 30 : 20) : 0,
                  pointerEvents: visible ? 'auto' : 'none'
                }}
                aria-hidden={!isCenter}
              >
                <Card className="relative h-[400px] overflow-hidden p-6">
                  <div className="flex justify-center">
                    <span className="liquid relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/70 bg-white/85 px-4 py-2 text-sm font-bold tracking-tight text-ink shadow-sm backdrop-blur">
                      <Icon className="h-4 w-4 text-teal" />
                      {group.title}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {group.items.map((item) => {
                      const domain = toolDomain(item);
                      return (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-full border border-ink/8 bg-white px-2.5 py-1 text-xs font-medium text-ink/80 shadow-sm"
                        >
                          {domain ? (
                            <span className="flex h-4 w-4 items-center justify-center overflow-hidden rounded-sm">
                              <LogoImg domain={domain} alt={item} className="max-h-full max-w-full object-contain" />
                            </span>
                          ) : (
                            <Sparkles className="h-3 w-3 text-teal/70" />
                          )}
                          {item}
                        </span>
                      );
                    })}
                  </div>
                  {/* Dim overlay for side cards (lightens on hover) */}
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-[inherit] transition-all duration-500 ${
                      isCenter ? 'bg-transparent' : 'bg-ink/35 group-hover:bg-ink/10'
                    }`}
                  />
                </Card>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {groups.map((g, i) => (
            <button
              key={g.title}
              onClick={() => setActive(i)}
              aria-label={`Nhóm ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === active ? 'w-6 bg-teal' : 'w-2 bg-ink/20 hover:bg-ink/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
