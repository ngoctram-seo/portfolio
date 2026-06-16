import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import { useLang, content } from '@/i18n';

export default function CaseStudies() {
  const { lang } = useLang();
  const t = content[lang].cases;
  const chart = `${import.meta.env.BASE_URL}img/linhanh-traffic.png`;

  return (
    <section id="case-studies" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_0%,#eef2ff,transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Badge className="border-ink/10 bg-white/70 text-teal">{t.eyebrow}</Badge>
        </Reveal>
        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-extrabold leading-[1] tracking-[-0.04em] text-ink">
              {t.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-sm leading-7 text-body">{t.sub}</p>
          </Reveal>
        </div>

        {/* Featured chart: Linh Anh organic traffic */}
        <Reveal delay={120}>
          <Card className="mt-10 overflow-hidden p-3 sm:p-5">
            <div className="rounded-2xl bg-white p-2">
              <img src={chart} alt={t.chartCaption} className="w-full rounded-xl" loading="lazy" />
            </div>
            <p className="px-2 pt-3 text-xs text-body">{t.chartCaption}</p>
          </Card>
        </Reveal>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {t.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <Card className="group h-full transition duration-500 hover:-translate-y-1 hover:shadow-soft">
                <CardHeader>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="gradient-text font-display text-base font-extrabold">0{index + 1}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink transition duration-500 group-hover:bg-gradient-to-br group-hover:from-indigo group-hover:to-sky group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal">{item.company}</p>
                  <h3 className="mt-2 font-display text-xl font-bold leading-tight tracking-[-0.02em] text-ink">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-body">{item.description}</p>
                  <div className="mt-5 grid gap-2">
                    {item.metrics.map((metric) => (
                      <div key={metric} className="rounded-2xl border border-ink/5 bg-paper px-4 py-2.5 text-sm font-medium text-ink/80">
                        {metric}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-ink/8 bg-white px-3 py-1 text-xs text-body">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
