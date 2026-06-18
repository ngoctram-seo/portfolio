import { ArrowRight, Download, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';
import { useLang, content, CV, EMAIL } from '@/i18n';

export default function Contact() {
  const { lang } = useLang();
  const t = content[lang].contact;

  const channels = [
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Linkedin, label: 'linkedin.com/in/tram-le-seo', href: 'https://www.linkedin.com/in/tram-le-seo/' },
    { icon: Phone, label: '+84 908 083 219', href: 'tel:+84908083219' }
  ];

  return (
    <footer id="contact" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_100%,#eef2ff_0%,#f4f7fd_55%,#ecfeff_100%)]" />
      <div className="aurora aurora-3 right-[-4rem] top-10 h-72 w-72 bg-indigo/25" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal">{t.eyebrow}</p>
              <h2 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-ink lg:mx-0">
                {t.heading}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-body lg:mx-0">{t.lead}</p>
              {/* Primary CTA */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <Button asChild size="lg" className="cv-glow group bg-gradient-to-r from-indigo to-sky text-white hover:opacity-95">
                  <a href={`mailto:${EMAIL}`}>
                    <Mail className="mr-3 h-5 w-5" />
                    {t.contactNow}
                    <ArrowRight className="ml-3 h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-3">
              {channels.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  className="glass flex items-center justify-between rounded-2xl p-5 text-ink transition hover:-translate-y-0.5 hover:shadow-soft"
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <span className="flex items-center gap-3 text-sm font-medium">
                    <Icon className="h-5 w-5 text-teal" /> {label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-ink/40" />
                </a>
              ))}
              <div className="glass flex items-center gap-3 rounded-2xl p-5 text-sm text-body">
                <MapPin className="h-5 w-5 text-teal" /> {t.location}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="secondary">
              <a href={CV.en} target="_blank" rel="noreferrer">
                <Download className="mr-2 h-4 w-4" /> {t.downloadEN}
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={CV.vi} target="_blank" rel="noreferrer">
                <Download className="mr-2 h-4 w-4" /> {t.downloadVI}
              </a>
            </Button>
          </div>
        </Reveal>

        <p className="mt-16 text-xs text-body/70">{t.rights}</p>
      </div>
    </footer>
  );
}
