import { TrendingUp, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import LogoImg from '@/components/LogoImg';
import { useLang, content, IMG, companyDomain } from '@/i18n';

export default function Journey() {
  const { lang } = useLang();
  const t = content[lang].journey;
  const chart = `${IMG}linhanh-traffic.png`;

  return (
    <section id="journey" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_0%,#eef2ff,transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <Badge className="border-ink/10 bg-white/70 text-teal">{t.eyebrow}</Badge>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-extrabold leading-[1] tracking-[-0.04em] text-ink">
            {t.heading}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-body">{t.sub}</p>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-12 pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-2 h-full w-[2px] bg-gradient-to-b from-indigo via-sky to-teal sm:left-[11px]" />
          <div className="space-y-8">
            {t.items.map((item, index) => (
              <Reveal key={item.company} delay={index * 90}>
                <div className="relative">
                  <span className="absolute -left-8 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-indigo to-sky ring-4 ring-paper sm:-left-10" />
                  <Card className="p-6 sm:p-7">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        {companyDomain(item.company) && (
                          <span className="flex h-11 w-11 flex-none items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-white shadow-sm">
                            {/MWG|Di Động/i.test(item.company) ? (
                              <img src={`${IMG}logo-mwg.png`} alt={item.company} className="h-full w-full object-cover" loading="lazy" />
                            ) : (
                              <LogoImg domain={companyDomain(item.company)} alt={item.company} className="max-h-[70%] max-w-[70%] object-contain" />
                            )}
                          </span>
                        )}
                        <div>
                          <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">{item.role}</h3>
                          <p className="text-sm font-medium text-teal">{item.company}</p>
                        </div>
                      </div>
                      <span className="rounded-full border border-ink/10 bg-paper px-3 py-1 text-xs font-semibold text-body">
                        {item.date}
                      </span>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-ink">
                          <TrendingUp className="h-4 w-4 text-teal" /> {item.achievementsLabel}
                        </p>
                        <ul className="mt-3 space-y-2.5 text-sm leading-6 text-body">
                          {item.achievements.map((a) => (
                            <li key={a} className="flex gap-2.5">
                              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-indigo to-sky" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-ink">
                          <Wrench className="h-4 w-4 text-sky" /> {item.implementedLabel}
                        </p>
                        <ul className="mt-3 space-y-2.5 text-sm leading-6 text-body">
                          {item.implemented.map((a) => (
                            <li key={a} className="flex gap-2.5">
                              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-sky to-teal" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {item.chart && (
                      <div className="mt-6 rounded-2xl border border-ink/5 bg-white p-2">
                        <img src={chart} alt={t.chartCaption} className="w-full rounded-xl" loading="lazy" />
                        <p className="px-2 py-2 text-xs text-body">{t.chartCaption}</p>
                      </div>
                    )}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-ink/8 bg-paper px-3 py-1 text-xs text-body">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
