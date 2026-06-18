import { useEffect, useState } from 'react';
import { Search, BarChart3, Bot, Wrench, Users, Sparkles } from 'lucide-react';
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
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setStart((s) => (s + 1) % groups.length), 3500);
    return () => clearInterval(id);
  }, [paused, groups.length]);

  const visible = [0, 1, 2].map((o) => (start + o) % groups.length);

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

        {/* Carousel: 3 cards at a time, auto-rotating */}
        <div
          className="mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div key={start} className="grid animate-fade-up gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((gi) => {
              const group = groups[gi];
              const Icon = ICONS[gi % ICONS.length];
              return (
                <Card key={group.title} className="h-full p-5">
                  <span className="liquid relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/70 bg-white/80 px-3.5 py-2 text-sm font-bold tracking-tight text-ink shadow-sm backdrop-blur">
                    <Icon className="h-4 w-4 text-teal" />
                    {group.title}
                  </span>
                  <div className="mt-4 flex flex-wrap gap-2">
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
                </Card>
              );
            })}
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {groups.map((g, i) => (
              <button
                key={g.title}
                onClick={() => setStart(i)}
                aria-label={`Nhóm ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === start ? 'w-6 bg-teal' : 'w-2 bg-ink/20 hover:bg-ink/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
