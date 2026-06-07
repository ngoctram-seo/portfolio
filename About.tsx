import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const highlights = [
  'Currently works on e-commerce SEO for Dienmayxanh.com under The Gioi Di Dong (MWG), a top-3 Vietnam e-commerce company.',
  'Manages SEO for 8,000+ commercial keywords in the home appliance category.',
  'Sustains 90% of tracked commercial keywords in Google Top 1-3.',
  'Builds AI-powered SEO workflows using Claude, ChatGPT, Codex, Perplexity, Gemini, NotebookLM, and Google Apps Script.',
  'Uses Google Search Console, GA4, Looker Studio, Ahrefs, Semrush, Screaming Frog, WebSite Auditor, and Keywordtool.io.'
];

export default function About() {
  return (
    <section id="work" className="bg-warm px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Badge>About Joyce</Badge>
        <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <h2 className="text-[clamp(2.2rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-charcoal">
              Organic growth, built with systems.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-8 text-charcoal/70">
              Joyce Le is an SEO Specialist focused on scalable organic growth across competitive verticals. She has worked across in-house and agency environments, managing keyword portfolios from 100 to 10,000+ keywords and building workflows that reduce manual SEO effort.
            </p>
            <Card className="p-6">
              <ul className="space-y-4 text-sm leading-7 text-charcoal/72">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
