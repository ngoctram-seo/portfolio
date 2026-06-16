import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  ['5+', 'years in SEO'],
  ['8K+', 'commercial keywords'],
  ['14K+', 'tracked weekly'],
  ['90%', 'Google Top 1-3'],
  ['45%', 'traffic growth'],
  ['20%', 'cost reduction']
];

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,118,110,0.45),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.25),transparent_30%),linear-gradient(135deg,#0f1412,#1f2925_45%,#0f1412)]" />
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-screen"
        src={`${import.meta.env.BASE_URL}video/hero-bg.mp4`}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/90" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="max-w-5xl">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.28em] text-teal/90 sm:text-sm">
            SEO & GEO Specialist · Ho Chi Minh City
          </p>
          <h1 className="animate-fade-up mt-6 max-w-5xl text-[clamp(2.5rem,8vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.075em] text-white [animation-delay:120ms]">
            I help websites rank — and build the systems that make SEO scale faster.
          </h1>
          <p className="animate-fade-up mt-7 max-w-3xl text-base leading-8 text-white/72 sm:text-lg [animation-delay:220ms]">
            SEO Specialist with 5+ years of experience across e-commerce, YMYL beauty & healthcare, education, and interior design. I combine Technical SEO, Entity SEO, Semantic SEO, GEO, AI workflows, and automation to grow organic visibility at scale.
          </p>

          <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row [animation-delay:320ms]">
            <Button asChild size="lg" className="group bg-teal text-white hover:bg-teal/90">
              <a href="#case-studies" aria-label="View Joyce Le case studies">
                View case studies
                <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-teal transition duration-500 group-hover:-rotate-45">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="group">
              <a href={`${import.meta.env.BASE_URL}cv/Joyce_Le_CV_EN.pdf`} aria-label="Download Joyce Le CV">
                Download CV
                <Download className="ml-3 h-4 w-4 transition duration-300 group-hover:translate-y-0.5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map(([number, label]) => (
            <div key={label} className="liquid-glass rounded-3xl p-4 text-white">
              <div className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{number}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
