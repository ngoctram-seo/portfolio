import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const experience = [
  {
    role: 'E-Commerce SEO Specialist',
    company: 'The Gioi Di Dong (MWG)',
    date: 'Nov 2024 - Present',
    highlights: [
      'Managed SEO growth for 8,000+ commercial keywords on Dienmayxanh.com home appliance pages.',
      'Automated internal linking and SEO audits with Google Apps Script.',
      'Built keyword tracking workflow with Codex and Claude.',
      'Authored entity-rich category infoboxes that earned AI Overview citations for competitive commercial queries including “điều hòa” and “máy lọc nước.”',
      'Improved Core Web Vitals through sitewide image optimization and sitemap enhancements.'
    ]
  },
  {
    role: 'SEO Specialist',
    company: 'Tham My Quoc Te Linh Anh',
    date: 'Jun 2022 - Oct 2024',
    highlights: [
      'Increased organic traffic by 45% in 4 months through Entity SEO, on-page optimization, Schema Data, internal linking, and indexation improvements.',
      'Scaled thammylinhanh.vn to 172,434 organic sessions.',
      'Grew linhanhacademy.edu.vn to 36,000 organic sessions.',
      'Led SEO strategy across Beauty & Spa YMYL and Education verticals.'
    ]
  },
  {
    role: 'SEO Executive',
    company: 'GTV SEO Agency',
    date: 'Mar 2021 - Apr 2022',
    highlights: [
      'Grew deco-crystal.com to 8,000 organic sessions in 10 months.',
      'Strengthened digiphone.vn domain authority within 3 months through off-page SEO and e-commerce SEO execution.',
      'Designed SEO-friendly UX-UI wireframes and site architecture independently in Figma.'
    ]
  }
];

export default function Experience() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Badge>Experience</Badge>
        <h2 className="mt-6 max-w-4xl text-[clamp(2.2rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-charcoal">
          A timeline of measurable organic growth.
        </h2>
        <div className="mt-12">
          {experience.map((item, index) => (
            <div key={item.role}>
              <div className="grid gap-6 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal">{item.date}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-charcoal">{item.role}</h3>
                  <p className="mt-1 text-charcoal/55">{item.company}</p>
                </div>
                <ul className="space-y-3 text-sm leading-7 text-charcoal/68">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-orange" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {index !== experience.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
