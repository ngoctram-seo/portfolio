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
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem('lang', lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

// CV file per language (placed in public/cv/)
export const CV = {
  en: `${import.meta.env.BASE_URL}cv/Tram_Le_CV_EN.pdf`,
  vi: `${import.meta.env.BASE_URL}cv/Tram_Le_CV_VI.pdf`
};

type Dict = {
  nav: { work: string; cases: string; experience: string; stack: string; contact: string; downloadCV: string; contactCta: string };
  hero: {
    eyebrow: string;
    hello: string;
    name: string;
    tagline: string;
    intro: string;
    viewCases: string;
    downloadCV: string;
    stats: [string, string][];
  };
  about: { eyebrow: string; heading: string; lead: string; highlights: string[] };
  cases: {
    eyebrow: string;
    heading: string;
    sub: string;
    chartCaption: string;
    items: { company: string; title: string; description: string; metrics: string[]; tags: string[]; chart?: boolean }[];
  };
  experience: { eyebrow: string; heading: string; items: { role: string; company: string; date: string; points: string[] }[] };
  stack: { eyebrow: string; heading: string; groups: { title: string; items: string[] }[] };
  contact: {
    eyebrow: string;
    heading: string;
    lead: string;
    location: string;
    downloadEN: string;
    downloadVI: string;
    rights: string;
  };
};

export const content: Record<Lang, Dict> = {
  vi: {
    nav: { work: 'Giới thiệu', cases: 'Dự án', experience: 'Kinh nghiệm', stack: 'Kỹ năng', contact: 'Liên hệ', downloadCV: 'Tải CV', contactCta: 'Liên hệ' },
    hero: {
      eyebrow: 'SEO & GEO Specialist · TP. Hồ Chí Minh',
      hello: 'Xin chào, tôi là',
      name: 'Trâm',
      tagline: 'Giúp website lên top — và xây hệ thống để SEO mở rộng nhanh hơn.',
      intro:
        'Chuyên viên SEO với hơn 5 năm kinh nghiệm trên e-commerce, YMYL (làm đẹp & y tế), giáo dục và nội thất. Kết hợp Technical SEO, Entity SEO, Semantic SEO, GEO, quy trình AI và tự động hóa để tăng trưởng organic ở quy mô lớn.',
      viewCases: 'Xem dự án',
      downloadCV: 'Tải CV',
      stats: [
        ['5+', 'năm làm SEO'],
        ['8K+', 'từ khóa thương mại'],
        ['14K+', 'từ khóa theo dõi/tuần'],
        ['90%', 'Top 1-3 Google'],
        ['45%', 'tăng trưởng traffic'],
        ['20%', 'giảm chi phí']
      ]
    },
    about: {
      eyebrow: 'Giới thiệu',
      heading: 'Tăng trưởng organic, xây bằng hệ thống.',
      lead:
        'Trâm là chuyên viên SEO tập trung vào tăng trưởng organic có khả năng mở rộng trong các ngành cạnh tranh cao. Đã làm cả môi trường in-house lẫn agency, quản lý danh mục từ 100 đến hơn 10.000 từ khóa và xây quy trình giảm công sức SEO thủ công.',
      highlights: [
        'Hiện phụ trách SEO e-commerce cho Dienmayxanh.com thuộc Thế Giới Di Động (MWG) — một trong những công ty e-commerce top đầu Việt Nam.',
        'Quản lý SEO cho hơn 8.000 từ khóa thương mại ngành điện máy.',
        'Duy trì 90% từ khóa thương mại theo dõi trong Top 1-3 Google.',
        'Xây quy trình SEO ứng dụng AI: Claude, ChatGPT, Codex, Perplexity, Gemini, NotebookLM và Google Apps Script.',
        'Sử dụng Google Search Console, GA4, Looker Studio, Ahrefs, Semrush, Screaming Frog.'
      ]
    },
    cases: {
      eyebrow: 'Dự án tiêu biểu',
      heading: 'Case studies',
      sub: 'SEO và GEO thực tế trên e-commerce, tự động hóa, YMYL và giáo dục. Không testimonial giả, không số liệu bịa.',
      chartCaption: 'Tăng trưởng organic traffic của hệ sinh thái Linh Anh (nguồn: Ahrefs).',
      items: [
        {
          company: 'Thế Giới Di Động / Dienmayxanh.com',
          title: 'Mở rộng SEO e-commerce cho 8.000+ từ khóa thương mại',
          description:
            'Quản lý tăng trưởng SEO cho hơn 8.000 từ khóa thương mại trên các trang danh mục ngành điện máy, duy trì 90% từ khóa trong Top 1-3 Google.',
          metrics: ['8.000+ từ khóa thương mại', '90% trong Top 1-3 Google', '14.000+ từ khóa theo dõi/tuần'],
          tags: ['Technical SEO', 'Internal Linking', 'Core Web Vitals', 'Tối ưu Sitemap', 'E-commerce SEO']
        },
        {
          company: 'Thế Giới Di Động / MWG',
          title: 'Tự động hóa audit SEO và theo dõi từ khóa',
          description:
            'Xây quy trình Google Apps Script kết hợp AI để tự động audit internal link, làm sạch link gãy/orphan, theo dõi thứ hạng và giảm công sức thủ công.',
          metrics: ['~50 link gãy/orphan làm sạch mỗi tuần', 'Tiết kiệm ~6 giờ/tuần', 'Giảm 20% chi phí theo dõi thứ hạng', '14.000+ từ khóa theo dõi/tuần'],
          tags: ['Google Apps Script', 'Codex', 'Claude', 'AI Workflows', 'Automation', 'Rank Tracking']
        },
        {
          company: 'Thẩm Mỹ Quốc Tế Linh Anh',
          title: 'Tăng trưởng organic ngành YMYL làm đẹp & giáo dục',
          description:
            'Tăng 45% organic traffic trong 4 tháng qua Entity SEO, tối ưu on-page, Schema Data, internal linking và cải thiện lập chỉ mục.',
          metrics: ['+45% organic traffic trong 4 tháng', '172.434 phiên/tháng cho thammylinhanh.vn', '36.000 phiên cho linhanhacademy.edu.vn', 'Tăng thứ hạng Top 3 / Top 5 / Top 10'],
          tags: ['Entity SEO', 'Schema', 'YMYL SEO', 'On-page SEO', 'Indexation', 'Internal Linking'],
          chart: true
        }
      ]
    },
    experience: {
      eyebrow: 'Kinh nghiệm',
      heading: 'Professional Experience',
      items: [
        {
          role: 'Chuyên Viên SEO E-Commerce',
          company: 'Công ty CP Đầu tư Thế Giới Di Động (MWG)',
          date: '11/2024 - Hiện tại',
          points: [
            'Quản lý tăng trưởng SEO cho 8.000+ từ khóa thương mại trên các trang điện máy của Dienmayxanh.com.',
            'Tự động hóa internal linking và audit SEO bằng Google Apps Script.',
            'Xây công cụ theo dõi từ khóa bằng Codex và Claude.',
            'Soạn các infobox danh mục giàu entity — đạt trích dẫn AI Overview cho truy vấn cạnh tranh như "điều hòa", "máy lọc nước".',
            'Cải thiện Core Web Vitals qua tối ưu hình ảnh toàn site và nâng cấp sitemap.'
          ]
        },
        {
          role: 'Chuyên Viên SEO',
          company: 'Thẩm Mỹ Quốc Tế Linh Anh',
          date: '06/2022 - 10/2024',
          points: [
            'Tăng 45% organic traffic trong 4 tháng qua Entity SEO, on-page, Schema, internal linking và lập chỉ mục.',
            'Đưa thammylinhanh.vn lên 172.434 phiên organic/tháng.',
            'Mở rộng linhanhacademy.edu.vn lên 36.000 phiên organic.',
            'Dẫn dắt chiến lược SEO cho ngành Làm đẹp & Spa (YMYL) và Giáo dục.'
          ]
        },
        {
          role: 'Nhân Viên SEO',
          company: 'GTV SEO Agency',
          date: '03/2021 - 04/2022',
          points: [
            'Đưa deco-crystal.com lên 8.000 phiên organic/tháng trong 10 tháng.',
            'Tăng độ uy tín tên miền cho digiphone.vn trong 3 tháng qua off-page và e-commerce SEO.',
            'Tự thiết kế wireframe UX-UI chuẩn SEO và kiến trúc site bằng Figma.'
          ]
        }
      ]
    },
    stack: {
      eyebrow: 'Kỹ năng',
      heading: 'Tools and Skills',
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
      downloadEN: 'Tải CV tiếng Anh',
      downloadVI: 'Tải CV tiếng Việt',
      rights: '© 2026 Lê Hoàng Ngọc Trâm. Xây bằng React, Vite, Tailwind CSS & TypeScript.'
    }
  },
  en: {
    nav: { work: 'About', cases: 'Case studies', experience: 'Experience', stack: 'Skills', contact: 'Contact', downloadCV: 'Download CV', contactCta: 'Contact' },
    hero: {
      eyebrow: 'SEO & GEO Specialist · Ho Chi Minh City',
      hello: 'Hello, my name is',
      name: 'Tram',
      tagline: 'I help websites rank — and build the systems that make SEO scale faster.',
      intro:
        'SEO Specialist with 5+ years across e-commerce, YMYL beauty & healthcare, education, and interior design. I combine Technical SEO, Entity SEO, Semantic SEO, GEO, AI workflows, and automation to grow organic visibility at scale.',
      viewCases: 'View case studies',
      downloadCV: 'Download CV',
      stats: [
        ['5+', 'years in SEO'],
        ['8K+', 'commercial keywords'],
        ['14K+', 'tracked weekly'],
        ['90%', 'Google Top 1-3'],
        ['45%', 'traffic growth'],
        ['20%', 'cost reduction']
      ]
    },
    about: {
      eyebrow: 'About',
      heading: 'Organic growth, built with systems.',
      lead:
        'Tram is an SEO Specialist focused on scalable organic growth across competitive verticals. She has worked across in-house and agency environments, managing keyword portfolios from 100 to 10,000+ keywords and building workflows that reduce manual SEO effort.',
      highlights: [
        'Currently leads e-commerce SEO for Dienmayxanh.com under The Gioi Di Dong (MWG), a top-3 Vietnam e-commerce company.',
        'Manages SEO for 8,000+ commercial keywords in the home appliance category.',
        'Sustains 90% of tracked commercial keywords in Google Top 1-3.',
        'Builds AI-powered SEO workflows using Claude, ChatGPT, Codex, Perplexity, Gemini, NotebookLM, and Google Apps Script.',
        'Uses Google Search Console, GA4, Looker Studio, Ahrefs, Semrush, and Screaming Frog.'
      ]
    },
    cases: {
      eyebrow: 'Selected work',
      heading: 'Case studies',
      sub: 'Real SEO and GEO work across e-commerce, automation, YMYL, and education. No fake testimonials. No invented metrics.',
      chartCaption: 'Organic traffic growth across the Linh Anh ecosystem (source: Ahrefs).',
      items: [
        {
          company: 'The Gioi Di Dong / Dienmayxanh.com',
          title: 'Scaling e-commerce SEO for 8,000+ commercial keywords',
          description:
            'Managed SEO growth for 8,000+ commercial keywords across home appliance category pages, sustaining 90% of keywords in Google Top 1-3.',
          metrics: ['8,000+ commercial keywords', '90% in Google Top 1-3', '14,000+ keywords tracked weekly'],
          tags: ['Technical SEO', 'Internal Linking', 'Core Web Vitals', 'Sitemap Optimization', 'E-commerce SEO']
        },
        {
          company: 'The Gioi Di Dong / MWG',
          title: 'Automating SEO audits and keyword tracking',
          description:
            'Built Google Apps Script and AI-assisted workflows to automate internal linking audits, clean broken/orphan links, monitor rankings, and reduce manual effort.',
          metrics: ['~50 broken/orphan links cleaned weekly', '~6 hours saved per week', '20% rank tracking cost reduction', '14,000+ keywords monitored weekly'],
          tags: ['Google Apps Script', 'Codex', 'Claude', 'AI Workflows', 'Automation', 'Rank Tracking']
        },
        {
          company: 'Tham My Quoc Te Linh Anh',
          title: 'Driving organic growth in YMYL beauty and education',
          description:
            'Increased organic traffic by 45% in 4 months through Entity SEO, on-page optimization, Schema Data, internal linking, and indexation improvements.',
          metrics: ['+45% organic traffic in 4 months', '172,434 sessions/mo for thammylinhanh.vn', '36,000 sessions for linhanhacademy.edu.vn', 'Top 3 / Top 5 / Top 10 keyword growth'],
          tags: ['Entity SEO', 'Schema', 'YMYL SEO', 'On-page SEO', 'Indexation', 'Internal Linking'],
          chart: true
        }
      ]
    },
    experience: {
      eyebrow: 'Experience',
      heading: 'Professional Experience',
      items: [
        {
          role: 'E-Commerce SEO Specialist',
          company: 'The Gioi Di Dong (MWG)',
          date: 'Nov 2024 - Present',
          points: [
            'Manage SEO growth for 8,000+ commercial keywords on Dienmayxanh.com home appliance pages.',
            'Automated internal linking and SEO audits with Google Apps Script.',
            'Built a keyword tracking workflow with Codex and Claude.',
            'Authored entity-rich category infoboxes that earned AI Overview citations for competitive queries like "điều hòa" and "máy lọc nước".',
            'Improved Core Web Vitals through sitewide image optimization and sitemap enhancements.'
          ]
        },
        {
          role: 'SEO Specialist',
          company: 'Tham My Quoc Te Linh Anh',
          date: 'Jun 2022 - Oct 2024',
          points: [
            'Increased organic traffic by 45% in 4 months through Entity SEO, on-page, Schema, internal linking, and indexation.',
            'Scaled thammylinhanh.vn to 172,434 organic sessions.',
            'Grew linhanhacademy.edu.vn to 36,000 organic sessions.',
            'Led SEO strategy across Beauty & Spa (YMYL) and Education verticals.'
          ]
        },
        {
          role: 'SEO Executive',
          company: 'GTV SEO Agency',
          date: 'Mar 2021 - Apr 2022',
          points: [
            'Grew deco-crystal.com to 8,000 organic sessions in 10 months.',
            'Strengthened digiphone.vn domain authority within 3 months through off-page and e-commerce SEO.',
            'Designed SEO-friendly UX-UI wireframes and site architecture in Figma.'
          ]
        }
      ]
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
      downloadEN: 'Download English CV',
      downloadVI: 'Download Vietnamese CV',
      rights: '© 2026 Le Hoang Ngoc Tram (Tram Le). Built with React, Vite, Tailwind CSS & TypeScript.'
    }
  }
};
