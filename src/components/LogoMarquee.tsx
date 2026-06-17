import LogoImg from '@/components/LogoImg';
import { useLang, COMPANIES, MARQUEE_TITLE } from '@/i18n';

export default function LogoMarquee() {
  const { lang } = useLang();
  const loop = [...COMPANIES, ...COMPANIES];

  const Item = ({ name, domain }: { name: string; domain: string }) => (
    <div className="flex shrink-0 items-center gap-4 opacity-75 transition hover:opacity-100">
      <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-white p-2.5 shadow-sm">
        <LogoImg domain={domain} alt={name} className="max-h-full max-w-full object-contain" />
      </span>
      <span className="whitespace-nowrap font-display text-2xl font-bold tracking-tight text-ink/80">{name}</span>
    </div>
  );

  return (
    <section className="relative overflow-hidden border-y border-ink/5 bg-white/55 py-14">
      <p className="mb-9 text-center font-display text-2xl font-bold tracking-[-0.02em] text-ink">
        {MARQUEE_TITLE[lang]}
      </p>
      <div className="marquee-mask relative flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-14 pr-14">
          {loop.map((c, i) => <Item key={i} name={c.name} domain={c.domain} />)}
        </div>
        <div className="marquee-track flex shrink-0 items-center gap-14 pr-14" aria-hidden="true">
          {loop.map((c, i) => <Item key={i} name={c.name} domain={c.domain} />)}
        </div>
      </div>
    </section>
  );
}
