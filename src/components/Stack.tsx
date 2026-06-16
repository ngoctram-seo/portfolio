import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import { useLang, content } from '@/i18n';

export default function Stack() {
  const { lang } = useLang();
  const t = content[lang].stack;

  return (
    <section id="stack" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_10%_100%,#ecfeff,transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Badge className="border-ink/10 bg-white/70 text-teal">{t.eyebrow}</Badge>
        </Reveal>
        <div className="mt-6 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[1] tracking-[-0.035em] text-ink">
              {t.heading}
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.groups.map((group, i) => (
              <Reveal key={group.title} delay={i * 80}>
                <Card className="h-full p-6">
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-teal">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-ink/8 bg-paper px-3 py-1 text-xs font-medium text-ink/75">
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
