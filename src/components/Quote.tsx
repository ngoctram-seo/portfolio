import Reveal from '@/components/Reveal';

export default function Quote() {
  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(110%_120%_at_50%_0%,#eef2ff,transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="mx-auto mb-5 flex items-center justify-center gap-3 text-teal/40">
            <span className="h-px w-10 bg-current" />
            <span className="font-display text-3xl leading-none">&ldquo;</span>
            <span className="h-px w-10 bg-current" />
          </div>
        </Reveal>
        <Reveal delay={60}>
          <p className="signature text-[clamp(1.7rem,3.6vw,2.9rem)] leading-[1.25] text-ink">
            Focus on the user and all else will follow
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-teal">Google</p>
        </Reveal>
      </div>
    </section>
  );
}
