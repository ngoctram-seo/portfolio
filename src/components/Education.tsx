import { GraduationCap, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Reveal from '@/components/Reveal';
import { useLang, content, IMG } from '@/i18n';

export default function Education() {
  const { lang } = useLang();
  const a = content[lang].about;

  return (
    <section id="education" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_90%_0%,#eef2ff,transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Animated 3D emblem */}
        <Reveal>
          <div className="edu-scene mx-auto">
            <div className="edu-orb">
              <div className="edu-orb-face">
                <GraduationCap className="h-24 w-24 text-white" strokeWidth={1.4} />
              </div>
            </div>
            <span className="edu-ring edu-ring-1" />
            <span className="edu-ring edu-ring-2" />
            <span className="edu-dot edu-dot-1" />
            <span className="edu-dot edu-dot-2" />
            <span className="edu-dot edu-dot-3" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Badge className="border-ink/10 bg-white/70 text-teal">{a.eduTitle} &amp; {a.certsTitle}</Badge>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <Card className="h-full p-6">
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-teal">
                  <GraduationCap className="h-4 w-4" /> {a.eduTitle}
                </p>
                <div className="mt-4 space-y-3">
                  {a.education.map((e) => (
                    <div key={e.school} className="flex items-start gap-3">
                      <img
                        src={`${IMG}logo-ufm.png`}
                        alt="UFM"
                        className="mt-0.5 h-9 w-9 flex-none rounded-full object-contain"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-bold text-ink">{e.school}</p>
                        <p className="text-sm text-body">{e.degree}</p>
                        <p className="text-xs font-medium text-teal">{e.time}</p>
                      </div>
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
      </div>
    </section>
  );
}
