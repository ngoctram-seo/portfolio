import { GraduationCap, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import AnimatedText from '@/components/AnimatedText';
import { useLang, content } from '@/i18n';

export default function About() {
  const { lang } = useLang();
  const t = content[lang].about;

  return (
    <section id="about" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      {/* Animated backdrop — this section is important, make it lively */}
      <div className="about-bg" aria-hidden="true">
        <span className="about-orb about-orb-1" />
        <span className="about-orb about-orb-2" />
        <span className="about-orb about-orb-3" />
        <span className="about-grid" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Badge className="border-ink/10 bg-white/70 text-teal">{t.eyebrow}</Badge>
        </Reveal>
        <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[1] tracking-[-0.035em] text-ink">
              {t.heading}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6">
              <AnimatedText text={t.lead} className="text-lg leading-8 text-ink" />
              <Card className="p-6">
                <ul className="space-y-4 text-sm leading-7 text-body">
                  {t.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-indigo to-sky" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Education + Certificates */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="p-6">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-ink">
                    <GraduationCap className="h-4 w-4 text-teal" /> {t.eduTitle}
                  </p>
                  <div className="mt-4 space-y-3">
                    {t.education.map((e) => (
                      <div key={e.school}>
                        <p className="text-sm font-bold text-ink">{e.school}</p>
                        <p className="text-sm text-body">{e.degree}</p>
                        <p className="text-xs font-medium text-teal">{e.time}</p>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card className="p-6">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-ink">
                    <Award className="h-4 w-4 text-sky" /> {t.certsTitle}
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm leading-6 text-body">
                    {t.certs.map((c) => (
                      <li key={c} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-sky to-teal" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
