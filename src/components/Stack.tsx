import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const groups = [
  {
    title: 'SEO & GEO',
    items: ['Technical SEO', 'Entity SEO', 'Semantic SEO', 'On-page SEO', 'Off-page SEO', 'Generative Engine Optimization', 'Schema Markup', 'E-E-A-T', 'Keyword Research', 'Link Building', 'Core Web Vitals', 'Internal Linking']
  },
  {
    title: 'Analytics & Reporting',
    items: ['Google Analytics 4', 'Google Search Console', 'Looker Studio', 'Ahrefs', 'Semrush', 'Screaming Frog', 'WebSite Auditor', 'Keywordtool.io']
  },
  {
    title: 'AI & Automation',
    items: ['Claude', 'ChatGPT', 'Codex', 'Perplexity', 'Gemini', 'NotebookLM', 'Google Apps Script', 'n8n', 'Make', 'IFTTT']
  },
  {
    title: 'Technical Skills',
    items: ['Figma', 'HTML Basics', 'Sitemap Optimization', 'Image Optimization', 'UX-UI Wireframing']
  }
];

export default function Stack() {
  return (
    <section id="stack" className="bg-warm px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Badge>Stack</Badge>
        <div className="mt-6 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-[clamp(2.2rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-charcoal">
            Tools for search, systems, and scale.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {groups.map((group) => (
              <Card key={group.title} className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-charcoal/10 bg-white/60 px-3 py-1 text-xs text-charcoal/65">
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
