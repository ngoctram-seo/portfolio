import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Reveal from '@/components/Reveal';
import { useLang, content } from '@/i18n';

export default function Experience() {
  const { lang } = useLang();
  const t = content[lang].experience;

  return (
    <section id="experience" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div className="aurora aurora-1 left-[-6rem] top-20 h-64 w-64 bg-teal/20" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Badge className="border-ink/10 bg-white/70 text-teal">{t.eyebrow}</Badge>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[1] tracking-[-0.035em] text-ink">
            {t.heading}
          </h2>
        </Reveal>
        <div className="mt-12">
          {t.items.map((item, index) => (
            <Reveal key={item.role} delay={index * 80}>
              <div>
                <div className="grid gap-6 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal">{item.date}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.02em] text-ink">{item.role}</h3>
                    <p className="mt-1 text-body">{item.company}</p>
                  </div>
                  <ul className="space-y-3 text-sm leading-7 text-body">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-sky to-teal" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index !== t.items.length - 1 && <Separator className="bg-ink/8" />}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
