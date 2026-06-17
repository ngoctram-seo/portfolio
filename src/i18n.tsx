import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'vi' | 'en';

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'vi',
  setLang: () => {}
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('vi');
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('lang') as Lang | null;
      if (saved === 'vi' || saved === 'en') setLang(saved);
    } catch { /* ignore */ }
  }, []);
  useEffect(() => {
    try { window.localStorage.setItem('lang', lang); } catch { /* ignore */ }
    document.documentElement.lang = lang;
  }, [lang]);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export const CV = {
  en: `${import.meta.env.BASE_URL}cv/Tram_Le_CV_EN.pdf`,
  vi: `${import.meta.env.BASE_URL}cv/Tram_Le_CV_VI.pdf`
};
export const IMG = `${import.meta.env.BASE_URL}img/`;
export const EMAIL = 'tramle37@gmail.com';
export const PHONE = '0908083219';
export const ZALO = 'https://zalo.me/0908083219';

export const COMPANIES = [
  { name: 'Điện Máy Xanh', domain: 'dienmayxanh.com' },
  { name: 'Thẩm Mỹ Linh Anh', domain: 'thammylinhanh.vn' },
  { name: 'F Interior', domain: 'finterior.com.vn' },
  { name: 'Deco Crystal', domain: 'deco-crystal.com' },
  { name: 'eTest', domain: 'etest.edu.vn' },
  { name: 'Digiphone', domain: 'digiphone.vn' }
];

export const MARQUEE_TITLE = {
  vi: 'Những dự án đã thực hiện',
  en: "Projects I've worked on"
};

// Logo domain for each journey company (small node logo)
export const companyDomain = (company: string): string => {
  if (/Di Động|MWG|Dienmayxanh/i.test(company)) return 'dienmayxanh.com';
  if (/Linh Anh/i.test(company)) return 'thammylinhanh.vn';
  if (/GTV/i.test(company)) return 'gtvseo.com';
  return '';
};

type TimelineItem = {
  company: string;
  role: string;
  date: string;
  achievementsLabel: string;
  achievements: string[];
  implementedLabel: string;
  implemented: string[];
  tags: string[];
  chart?: boolean;
};

type Project = { title: string; blurb: string; href: string; img: string };

type Dict = {
  nav: { about: string; journey: string; projects: string; stack: string; contact: string; downloadCV: string; contactNow: string };
  hero: {
    status: string;
    modes: string[];
    hello: string;
    name: string;
    role: string;
    rotating: string[];
    intro: string;
    viewJourney: string;
    downloadCV: string;
    stats: [string, string][];
    floats: string[];
  };
  about: { eyebrow: string; heading: string; lead: string; highlights: string[]; eduTitle: string; education: { school: string; degree: string; time: string }[]; certsTitle: string; certs: string[] };
  journey: { eyebrow: string; heading: string; sub: string; chartCaption: string; items: TimelineItem[] };
  projects: { eyebrow: string; heading: string; sub: string; more: string; items: Project[] };
  stack: { eyebrow: string; heading: string; groups: { title: string; items: string[] }[] };
  contact: { eyebrow: string; heading: string; lead: string; location: string; contactNow: string; downloadEN: string; downloadVI: string; rights: string };
};

const placeholderProjects = (more: string): Project[] =>
  Array.from({ length: 6 }, (_, i) => ({
    title: `${more} ${i + 1}`,
    blurb: '',
    href: '#',
    img: ''
  }));

export const content: Record<Lang, Dict> = {
  vi: {
    nav: { about: 'Giới thiệu', journey: 'Hành trình', projects: 'Dự án', stack: 'Kỹ năng', contact: 'Liên hệ', downloadCV: 'Tải CV', contactNow: 'Liên hệ ngay' },
    hero: {
      status: 'Sẵn sàng cho cơ hội mới · TP.HCM, Việt Nam',
      modes: ['Remote', 'Onsite'],
      hello: 'Xin chào, tôi là',
      name: 'Trâm',
      role: 'SEO & GEO Specialist',
      rotating: ['Technical SEO', 'GEO', 'Entity SEO', 'Semantic SEO', 'AI Workflows', 'Automation'],
      intro:
        'Chuyên viên SEO với hơn 5 năm kinh nghiệm trên e-commerce, YMYL (làm đẹp & y tế), giáo dục và nội thất. Kết hợp Technical SEO, Entity SEO, Semantic SEO, GEO, quy trình AI và tự động hóa để tăng trưởng organic ở quy mô lớn.',
      viewJourney: 'Xem hành trình',
      downloadCV: 'Tải CV',
      stats: [
        ['5+', 'năm làm SEO'],
        ['8K+', 'từ khóa thương mại'],
        ['90%', 'Top 1-3 Google'],
        ['45%', 'tăng trưởng traffic'],
        ['20%', 'giảm chi phí']
      ],
      floats: ['Technical SEO', 'GEO', 'Entity SEO', 'AI Workflows', '+45% traffic', '172K phiên/tháng', 'Google Apps Script', 'Core Web Vitals']
    },
    about: {
      eyebrow: 'Giới thiệu',
      heading: 'Tôi giải quyết vấn đề gì cho doanh nghiệp?',
      lead:
        'Tôi là chuyên viên SEO tập trung vào tăng trưởng organic có khả năng mở rộng trong các ngành cạnh tranh cao — cả môi trường in-house lẫn agency, quản lý danh mục từ 100 đến hơn 10.000 từ khóa và xây quy trình giảm công sức SEO thủ công.',
      highlights: [
        'Tăng organic traffic và thứ hạng cho ngành e-commerce, YMYL (làm đẹp & y tế), giáo dục và nội thất.',
        'Xây kiến trúc internal linking và lập chỉ mục ở quy mô hàng nghìn trang.',
        'Tự động hóa audit SEO và theo dõi từ khóa bằng Google Apps Script + AI — tiết kiệm hàng giờ mỗi tuần.',
        'Đạt trích dẫn AI Overview (GEO) trên các truy vấn sản phẩm cạnh tranh.',
        'Ra quyết định dựa trên dữ liệu với GA4, Search Console, Looker Studio, Ahrefs, Semrush.'
      ],
      eduTitle: 'Học vấn',
      education: [
        { school: 'Đại học Tài chính – Marketing (UFM)', degree: 'Cử nhân Quản trị Marketing', time: '2017 – 2020' }
      ],
      certsTitle: 'Chứng chỉ',
      certs: ['HubSpot Digital Marketing (2021)', 'SEO Google Maps (2024)', 'HSK 3 Tiếng Trung (2024)', 'IELTS (2020)']
    },
    journey: {
      eyebrow: 'Kinh nghiệm & Thành tựu',
      heading: 'Hành trình 5 năm thực chiến',
      sub: 'Mỗi cột mốc gồm thành tựu đo lường được và những gì đã triển khai để đạt được.',
      chartCaption: 'Tăng trưởng organic traffic của hệ sinh thái Linh Anh (nguồn: Ahrefs).',
      items: [
        {
          company: 'Công ty CP Đầu tư Thế Giới Di Động (MWG)',
          role: 'Chuyên Viên SEO E-Commerce',
          date: '11/2024 - Hiện tại',
          achievementsLabel: 'Thành tựu',
          achievements: [
            'Duy trì 90% trong số 8.000+ từ khóa thương mại ở Top 1-3 Google.',
            'Theo dõi 14.000+ từ khóa/tuần, giảm 20% chi phí theo dõi thứ hạng.',
            'Làm sạch ~50 link gãy/orphan mỗi tuần, tiết kiệm ~6 giờ/tuần cho đội ngũ.',
            'Đạt trích dẫn AI Overview cho truy vấn cạnh tranh ("điều hòa", "máy lọc nước").'
          ],
          implementedLabel: 'Đã triển khai',
          implemented: [
            'Technical SEO + kiến trúc internal linking cho trang danh mục Dienmayxanh.com.',
            'Tự động hóa audit SEO & theo dõi từ khóa bằng Google Apps Script, Codex, Claude.',
            'Soạn infobox danh mục giàu entity theo chuẩn GEO.',
            'Cải thiện Core Web Vitals qua tối ưu hình ảnh toàn site và nâng cấp sitemap.',
            'Triển khai Full-Stack SEO, phối hợp QC, BA, Dev để đưa yêu cầu kỹ thuật lên sản phẩm.'
          ],
          tags: ['Technical SEO', 'GEO', 'AI Workflows', 'Internal Linking', 'Core Web Vitals', 'E-commerce SEO']
        },
        {
          company: 'Thẩm Mỹ Quốc Tế Linh Anh',
          role: 'Chuyên Viên SEO',
          date: '06/2022 - 10/2024',
          achievementsLabel: 'Thành tựu',
          achievements: [
            'Tăng 45% organic traffic chỉ trong 4 tháng.',
            'Đưa thammylinhanh.vn lên 172.434 phiên/tháng (chiếm ~58% tổng traffic).',
            'Mở rộng linhanhacademy.edu.vn lên 36.000 phiên organic.',
            'Thứ hạng từ khóa: Top 3 ~30%, Top 5 ~51%, Top 10 ~81%.'
          ],
          implementedLabel: 'Đã triển khai',
          implemented: [
            'Xây hệ sinh thái nội dung YMYL theo chuẩn E-E-A-T.',
            'Entity SEO, tối ưu on-page, Schema Data và internal linking.',
            'Cải thiện lập chỉ mục và dẫn dắt chiến lược SEO ngành làm đẹp & giáo dục.'
          ],
          tags: ['Entity SEO', 'Schema', 'YMYL SEO', 'On-page SEO', 'Indexation'],
          chart: true
        },
        {
          company: 'GTV SEO Agency',
          role: 'Nhân Viên SEO',
          date: '03/2021 - 04/2022',
          achievementsLabel: 'Thành tựu',
          achievements: [
            'Đưa deco-crystal.com lên 8.000 phiên organic/tháng trong 10 tháng.',
            'Tăng độ uy tín tên miền cho digiphone.vn trong 3 tháng.'
          ],
          implementedLabel: 'Đã triển khai',
          implemented: [
            'Off-page và e-commerce SEO cho nhiều dự án khách hàng.',
            'Tự thiết kế wireframe UX-UI chuẩn SEO và kiến trúc site bằng Figma.'
          ],
          tags: ['Off-page SEO', 'E-commerce SEO', 'UX-UI', 'Figma']
        }
      ]
    },
    projects: {
      eyebrow: 'Portfolio',
      heading: 'Sản phẩm & Giải pháp',
      sub: 'Nơi tôi trưng bày các sản phẩm, dự án và thành tựu tiêu biểu.',
      more: 'Xem thêm',
      items: placeholderProjects('Dự án')
    },
    stack: {
      eyebrow: 'Kỹ năng',
      heading: 'Bộ kỹ năng toàn diện',
      groups: [
        { title: 'SEO & GEO', items: ['Technical SEO', 'Entity SEO', 'Semantic SEO', 'On-page SEO', 'Off-page SEO', 'GEO', 'Schema Markup', 'E-E-A-T', 'Keyword Research', 'Link Building', 'Core Web Vitals', 'Internal Linking'] },
        { title: 'Phân tích & Báo cáo', items: ['Google Analytics 4', 'Google Search Console', 'Looker Studio', 'Ahrefs', 'Semrush', 'Screaming Frog', 'WebSite Auditor', 'Keywordtool.io'] },
        { title: 'AI & Tự động hóa', items: ['Claude', 'ChatGPT', 'Codex', 'Perplexity', 'Gemini', 'NotebookLM', 'Google Apps Script', 'n8n', 'Make', 'IFTTT'] },
        { title: 'Kỹ năng kỹ thuật', items: ['Figma', 'HTML cơ bản', 'Tối ưu Sitemap', 'Tối ưu hình ảnh', 'UX-UI Wireframing'] }
      ]
    },
    contact: {
      eyebrow: 'Liên hệ',
      heading: 'Cùng tăng trưởng organic nào.',
      lead: 'Sẵn sàng cho các cơ hội SEO, GEO, organic growth và technical SEO — tại TP. Hồ Chí Minh hoặc remote.',
      location: 'TP. Hồ Chí Minh, Việt Nam',
      contactNow: 'Liên hệ ngay',
      downloadEN: 'Tải CV tiếng Anh',
      downloadVI: 'Tải CV tiếng Việt',
      rights: '© 2026 Lê Hoàng Ngọc Trâm. Xây bằng React, Vite, Tailwind CSS & TypeScript.'
    }
  },
  en: {
    nav: { about: 'About', journey: 'Journey', projects: 'Projects', stack: 'Skills', contact: 'Contact', downloadCV: 'Download CV', contactNow: 'Contact now' },
    hero: {
      status: 'Open to new opportunities · Ho Chi Minh City, Vietnam',
      modes: ['Remote', 'Onsite'],
      hello: 'Hello, my name is',
      name: 'Tram',
      role: 'SEO & GEO Specialist',
      rotating: ['Technical SEO', 'GEO', 'Entity SEO', 'Semantic SEO', 'AI Workflows', 'Automation'],
      intro:
        'SEO Specialist with 5+ years across e-commerce, YMYL beauty & healthcare, education, and interior design. I combine Technical SEO, Entity SEO, Semantic SEO, GEO, AI workflows, and automation to grow organic visibility at scale.',
      viewJourney: 'View journey',
      downloadCV: 'Download CV',
      stats: [
        ['5+', 'years in SEO'],
        ['8K+', 'commercial keywords'],
        ['90%', 'Google Top 1-3'],
        ['45%', 'traffic growth'],
        ['20%', 'cost reduction']
      ],
      floats: ['Technical SEO', 'GEO', 'Entity SEO', 'AI Workflows', '+45% traffic', '172K sessions/mo', 'Google Apps Script', 'Core Web Vitals']
    },
    about: {
      eyebrow: 'About',
      heading: 'What problems I solve for businesses?',
      lead:
        'Tram is an SEO Specialist focused on scalable organic growth across competitive verticals — in-house and agency, managing keyword portfolios from 100 to 10,000+ and building workflows that cut manual SEO effort.',
      highlights: [
        'Grows organic traffic and rankings for e-commerce, YMYL beauty & healthcare, education, and interior design.',
        'Builds internal linking architecture and indexation at the scale of thousands of pages.',
        'Automates SEO audits and keyword tracking with Google Apps Script + AI — saving hours every week.',
        'Earns AI Overview citations (GEO) on competitive product queries.',
        'Makes data-driven decisions with GA4, Search Console, Looker Studio, Ahrefs, and Semrush.'
      ],
      eduTitle: 'Education',
      education: [
        { school: 'University of Finance – Marketing (UFM)', degree: 'BBA in Marketing Management', time: '2017 – 2020' }
      ],
      certsTitle: 'Certificates',
      certs: ['HubSpot Digital Marketing (2021)', 'SEO Google Maps (2024)', 'HSK 3 Chinese (2024)', 'IELTS (2020)']
    },
    journey: {
      eyebrow: 'Experience & Results',
      heading: '5 Years in the Trenches',
      sub: 'Each milestone pairs measurable results with what was implemented to get there.',
      chartCaption: 'Organic traffic growth across the Linh Anh ecosystem (source: Ahrefs).',
      items: [
        {
          company: 'The Gioi Di Dong (MWG)',
          role: 'E-Commerce SEO Specialist',
          date: 'Nov 2024 - Present',
          achievementsLabel: 'Results',
          achievements: [
            'Sustained 90% of 8,000+ commercial keywords in Google Top 1-3.',
            'Tracked 14,000+ keywords weekly; cut rank-tracking cost by 20%.',
            'Cleaned ~50 broken/orphan links weekly, saving the team ~6 hours/week.',
            'Earned AI Overview citations for competitive queries ("điều hòa", "máy lọc nước").'
          ],
          implementedLabel: 'What I built',
          implemented: [
            'Technical SEO + internal linking architecture for Dienmayxanh.com category pages.',
            'Automated SEO audits & keyword tracking with Google Apps Script, Codex, Claude.',
            'Entity-rich category infoboxes following GEO best practices.',
            'Core Web Vitals improvements via sitewide image optimization and sitemap upgrades.',
            'Full-Stack SEO, collaborating with QC, BA, and Dev to ship technical requirements.'
          ],
          tags: ['Technical SEO', 'GEO', 'AI Workflows', 'Internal Linking', 'Core Web Vitals', 'E-commerce SEO']
        },
        {
          company: 'Tham My Quoc Te Linh Anh',
          role: 'SEO Specialist',
          date: 'Jun 2022 - Oct 2024',
          achievementsLabel: 'Results',
          achievements: [
            'Increased organic traffic by 45% in just 4 months.',
            'Scaled thammylinhanh.vn to 172,434 sessions/mo (~58% of total traffic).',
            'Grew linhanhacademy.edu.vn to 36,000 organic sessions.',
            'Keyword rankings: Top 3 ~30%, Top 5 ~51%, Top 10 ~81%.'
          ],
          implementedLabel: 'What I built',
          implemented: [
            'Built a YMYL content ecosystem to E-E-A-T standards.',
            'Entity SEO, on-page optimization, Schema Data, and internal linking.',
            'Improved indexation and led SEO strategy for beauty & education verticals.'
          ],
          tags: ['Entity SEO', 'Schema', 'YMYL SEO', 'On-page SEO', 'Indexation'],
          chart: true
        },
        {
          company: 'GTV SEO Agency',
          role: 'SEO Executive',
          date: 'Mar 2021 - Apr 2022',
          achievementsLabel: 'Results',
          achievements: [
            'Grew deco-crystal.com to 8,000 organic sessions/mo in 10 months.',
            'Strengthened digiphone.vn domain authority within 3 months.'
          ],
          implementedLabel: 'What I built',
          implemented: [
            'Off-page and e-commerce SEO across multiple client projects.',
            'Designed SEO-friendly UX-UI wireframes and site architecture in Figma.'
          ],
          tags: ['Off-page SEO', 'E-commerce SEO', 'UX-UI', 'Figma']
        }
      ]
    },
    projects: {
      eyebrow: 'Portfolio',
      heading: 'Products & Solutions',
      sub: 'Where I showcase my standout products, projects, and achievements.',
      more: 'View more',
      items: placeholderProjects('Project')
    },
    stack: {
      eyebrow: 'Skills',
      heading: 'Tools and Skills',
      groups: [
        { title: 'SEO & GEO', items: ['Technical SEO', 'Entity SEO', 'Semantic SEO', 'On-page SEO', 'Off-page SEO', 'GEO', 'Schema Markup', 'E-E-A-T', 'Keyword Research', 'Link Building', 'Core Web Vitals', 'Internal Linking'] },
        { title: 'Analytics & Reporting', items: ['Google Analytics 4', 'Google Search Console', 'Looker Studio', 'Ahrefs', 'Semrush', 'Screaming Frog', 'WebSite Auditor', 'Keywordtool.io'] },
        { title: 'AI & Automation', items: ['Claude', 'ChatGPT', 'Codex', 'Perplexity', 'Gemini', 'NotebookLM', 'Google Apps Script', 'n8n', 'Make', 'IFTTT'] },
        { title: 'Technical Skills', items: ['Figma', 'HTML Basics', 'Sitemap Optimization', 'Image Optimization', 'UX-UI Wireframing'] }
      ]
    },
    contact: {
      eyebrow: 'Contact',
      heading: "Let's grow something organic.",
      lead: 'Open to SEO, GEO, organic growth, and technical SEO opportunities — on-site in Ho Chi Minh City or remote.',
      location: 'Ho Chi Minh City, Vietnam',
      contactNow: 'Contact now',
      downloadEN: 'Download English CV',
      downloadVI: 'Download Vietnamese CV',
      rights: '© 2026 Le Hoang Ngoc Tram (Tram Le). Built with React, Vite, Tailwind CSS & TypeScript.'
    }
  }
};
