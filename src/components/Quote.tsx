import Reveal from '@/components/Reveal';

export default function Quote() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,#eef2ff,transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="signature bg-gradient-to-r from-indigo via-sky to-teal bg-clip-text text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.15] text-transparent">
            Focus on the user and all else will follow
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.22em] text-body">— Google</p>
        </Reveal>
      </div>
    </section>
  );
}
