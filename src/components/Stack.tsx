import { Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import LogoImg from '@/components/LogoImg';
import { useLang, content, toolDomain } from '@/i18n';

export default function Stack() {
  const { lang } = useLang();
  const t = content[lang].stack;

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

        {/* 5 boxes in a horizontal row */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <Card className="h-full p-5">
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-teal">{group.title}</h3>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
