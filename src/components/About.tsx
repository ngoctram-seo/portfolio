import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/Reveal';
import AnimatedText from '@/components/AnimatedText';
import { useLang, content } from '@/i18n';

const floatPos = [
  { top: '10%', left: '3%' },
  { top: '16%', right: '6%' },
  { top: '44%', left: '1%' },
  { bottom: '20%', right: '4%' },
  { bottom: '10%', left: '8%' },
  { top: '60%', right: '40%' },
  { top: '6%', left: '44%' },
  { bottom: '30%', right: '46%' }
];

export default function About() {
  const { lang } = useLang();
  const t = content[lang].about;
  const j = content[lang].journey;
  const floats = content[lang].hero.floats;

  return (
    <section id="about" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      {/* Animated backdrop */}
      <div className="about-bg" aria-hidden="true">
        <span className="about-orb about-orb-1" />
        <span className="about-orb about-orb-2" />
        <span className="about-orb about-orb-3" />
        <span className="about-grid" />
      </div>

      {/* Floating colored keyword chips (moved here from hero) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        {floats.map((label, i) => {
          const palette = [
            'border-indigo/25 bg-indigo/10 text-indigo',
            'border-sky/25 bg-sky/10 text-sky',
            'border-teal/25 bg-teal/10 text-teal'
          ];
          return (
            <span
              key={label}
              className={`float-fast float-fast-${(i % 3) + 1} absolute rounded-full border px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur ${palette[i % 3]}`}
              style={floatPos[i % floatPos.length]}
            >
              {label}
            </span>
          );
        })}
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Badge className="border-ink/10 bg-white/70 text-teal">{t.eyebrow}</Badge>
        </Reveal>
        <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <div>
              <h2 className="font-display text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[1] tracking-[-0.035em] text-ink">
                {t.heading}
              </h2>
              <AnimatedText text={t.lead} className="mt-6 block text-lg leading-8 text-ink" />
            </div>
          </Reveal>

          {/* Numbers + problems solved (replaces the old bullet list) */}
          <Reveal delay={120}>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">{j.metricsTitle}</h3>
              <div className="mt-5 overflow-hidden rounded-2xl border border-ink/8 bg-white/70">
                <div className="grid grid-cols-[0.8fr_1.7fr] border-b border-ink/8 bg-paper/60 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-teal">
                  <span>{j.metricsCols[0]}</span>
                  <span>{j.metricsCols[1]}</span>
                </div>
                {j.metrics.map((m) => (
                  <div
                    key={m.value + m.label}
                    className="metric-row grid grid-cols-[0.8fr_1.7fr] items-center gap-3 border-b border-ink/5 px-5 py-4 transition-colors last:border-0"
                  >
                    <div>
                      <div className="gradient-text font-display text-2xl font-extrabold tracking-[-0.03em]">{m.value}</div>
                      <div className="text-xs text-body">{m.label}</div>
                    </div>
                    <p className="text-sm leading-6 text-body">{m.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
