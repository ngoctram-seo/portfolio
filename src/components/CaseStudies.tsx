import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const cases = [
  {
    title: 'Scaling e-commerce SEO for 8,000+ commercial keywords',
    company: 'The Gioi Di Dong / Dienmayxanh.com',
    description: 'Managed SEO growth for 8,000+ commercial keywords across home appliance category pages, sustaining 90% of keywords in Google Top 1-3.',
    metrics: ['8,000+ commercial keywords', '90% in Google Top 1-3', '14,000+ keywords tracked weekly'],
    keywords: ['Technical SEO', 'Internal Linking', 'Core Web Vitals', 'Sitemap Optimization', 'E-commerce SEO']
  },
  {
    title: 'Automating SEO audits and keyword tracking',
    company: 'The Gioi Di Dong / MWG',
    description: 'Built Google Apps Script and AI-assisted workflows to automate internal linking audits, clean broken/orphan links, monitor keyword rankings, and reduce manual SEO effort.',
    metrics: ['~50 broken/orphan links cleaned weekly', '~6 hours saved per week', '20% rank tracking cost reduction', '14,000+ keywords monitored weekly'],
    keywords: ['Google Apps Script', 'Codex', 'Claude', 'AI Workflows', 'Automation', 'Rank Tracking']
  },
  {
    title: 'Driving organic growth in YMYL beauty and education',
    company: 'Tham My Quoc Te Linh Anh',
    description: 'Increased organic traffic by 45% in 4 months through Entity SEO, on-page optimization, Schema Data, internal linking, and indexation improvements.',
    metrics: ['45% organic traffic growth in 4 months', '172,434 organic sessions for thammylinhanh.vn', '36,000 organic sessions for linhanhacademy.edu.vn', 'Top 3 / Top 5 / Top 10 keyword growth'],
    keywords: ['Entity SEO', 'Schema Structured Data', 'YMYL SEO', 'On-page SEO', 'Indexation', 'Internal Linking']
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-charcoal px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Badge className="border-white/15 bg-white/10 text-white/70">Selected Work</Badge>
        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-[clamp(2.2rem,5vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.07em]">
            Case studies that prove scale.
          </h2>
          <p className="max-w-sm text-sm leading-7 text-white/55">
            Real SEO and GEO work across e-commerce, automation, YMYL, and education. No fake testimonials. No invented metrics.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cases.map((item, index) => (
            <Card key={item.title} className="group border-white/10 bg-white/[0.06] text-white transition duration-500 hover:-translate-y-1 hover:bg-white/[0.09]">
              <CardHeader>
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-teal">0{index + 1}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition duration-500 group-hover:-rotate-45 group-hover:bg-teal">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="text-sm font-medium text-white/48">{item.company}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em]">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-white/62">{item.description}</p>
                <div className="mt-6 grid gap-2">
                  {item.metrics.map((metric) => (
                    <div key={metric} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/75">
                      {metric}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.keywords.map((keyword) => (
                    <Badge key={keyword} className="border-white/10 bg-white/[0.04] text-white/55">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
