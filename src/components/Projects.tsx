import { ArrowUpRight, ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import { useLang, content, IMG } from '@/i18n';

export default function Projects() {
  const { lang } = useLang();
  const t = content[lang].projects;

  return (
    <section id="projects" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_10%_100%,#ecfeff,transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Badge className="border-ink/10 bg-white/70 text-teal">{t.eyebrow}</Badge>
        </Reveal>
        <div className="mt-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[1] tracking-[-0.035em] text-ink">
              {t.heading}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-md text-pretty text-sm leading-7 text-body">{t.sub}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((p, i) => {
            const hasLink = p.href && p.href !== '#';
            return (
              <Reveal key={i} delay={(i % 3) * 90}>
                <Card className="group flex h-full flex-col overflow-hidden transition duration-500 hover:-translate-y-1 hover:shadow-soft">
                  {/* Thumbnail (image if provided, else gradient placeholder) */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {p.img ? (
                      <img
                        src={p.img.startsWith('http') ? p.img : `${IMG}${p.img}`}
                        alt={p.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-indigo/15 via-sky/15 to-teal/15 text-ink/35">
                        <ImageIcon className="h-8 w-8" />
                        <span className="text-xs font-medium">Thumbnail</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-ink">{p.title}</h3>
                    {p.blurb && <p className="mt-2 text-sm leading-6 text-body">{p.blurb}</p>}
                    <a
                      href={p.href}
                      target={hasLink ? '_blank' : undefined}
                      rel="noreferrer"
                      className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${
                        hasLink ? 'text-teal hover:gap-2.5' : 'cursor-default text-ink/30'
                      } transition-all`}
                    >
                      {t.more}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
