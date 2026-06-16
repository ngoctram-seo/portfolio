import LogoImg from '@/components/LogoImg';
import { useLang, COMPANIES, MARQUEE_TITLE } from '@/i18n';

export default function LogoMarquee() {
  const { lang } = useLang();
  const loop = [...COMPANIES, ...COMPANIES];

  return (
    <section className="relative overflow-hidden border-y border-ink/5 bg-white/60 py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.26em] text-teal">
        {MARQUEE_TITLE[lang]}
      </p>
      <div className="marquee-mask relative flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
          {loop.map((c, i) => (
            <div key={i} className="flex shrink-0 items-center gap-3 opacity-70 transition hover:opacity-100">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-ink/10 bg-white p-1.5 shadow-sm">
                <LogoImg domain={c.domain} alt={c.name} className="max-h-full max-w-full object-contain" />
              </span>
              <span className="whitespace-nowrap font-display text-base font-bold tracking-tight text-ink/75">
                {c.name}
              </span>
            </div>
          ))}
        </div>
        <div className="marquee-track flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
          {loop.map((c, i) => (
            <div key={i} className="flex shrink-0 items-center gap-3 opacity-70">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-ink/10 bg-white p-1.5 shadow-sm">
                <LogoImg domain={c.domain} alt={c.name} className="max-h-full max-w-full object-contain" />
              </span>
              <span className="whitespace-nowrap font-display text-base font-bold tracking-tight text-ink/75">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
