import { GraduationCap, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import LogoImg from '@/components/LogoImg';
import { useLang, content, toolDomain } from '@/i18n';

export default function Stack() {
  const { lang } = useLang();
  const t = content[lang].stack;
  const a = content[lang].about;

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
                    {group.items.map((item) => {
                      const domain = toolDomain(item);
                      return (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-full border border-ink/8 bg-white px-2.5 py-1 text-xs font-medium text-ink/80 shadow-sm"
                        >
                          {domain && (
                            <span className="flex h-4 w-4 items-center justify-center overflow-hidden rounded-sm">
                              <LogoImg domain={domain} alt={item} className="max-h-full max-w-full object-contain" />
                            </span>
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

        {/* Education + Certificates */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:ml-auto lg:w-[calc(75%-0.5rem)]">
          <Reveal>
            <Card className="h-full p-6">
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-teal">
                <GraduationCap className="h-4 w-4" /> {a.eduTitle}
              </p>
              <div className="mt-4 space-y-3">
                {a.education.map((e) => (
                  <div key={e.school}>
                    <p className="text-sm font-bold text-ink">{e.school}</p>
                    <p className="text-sm text-body">{e.degree}</p>
                    <p className="text-xs font-medium text-teal">{e.time}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card className="h-full p-6">
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-sky">
                <Award className="h-4 w-4" /> {a.certsTitle}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-body">
                {a.certs.map((c) => (
                  <li key={c} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-sky to-teal" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
