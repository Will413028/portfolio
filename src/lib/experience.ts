export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

const experienceEn: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description:
      "Building custom web applications for startups and businesses. Specializing in Next.js, React, and headless CMS implementations.",
  },
  {
    role: "Frontend Developer",
    company: "Tech Startup",
    period: "2022 - 2023",
    description:
      "Developed responsive web applications using React and TypeScript. Implemented design systems and improved Core Web Vitals.",
  },
  {
    role: "Web Developer",
    company: "Digital Agency",
    period: "2021 - 2022",
    description:
      "Created websites and web applications for various clients. Worked with WordPress, React, and custom CMS solutions.",
  },
];

const experienceZhTw: Experience[] = [
  {
    role: "全端開發者",
    company: "自由接案",
    period: "2023 - 至今",
    description:
      "為新創公司和企業打造客製化網頁應用程式。專精於 Next.js、React 和 headless CMS 的實作。",
  },
  {
    role: "前端開發者",
    company: "科技新創公司",
    period: "2022 - 2023",
    description:
      "使用 React 和 TypeScript 開發響應式網頁應用程式。實作設計系統並改善 Core Web Vitals。",
  },
  {
    role: "網頁開發者",
    company: "數位行銷公司",
    period: "2021 - 2022",
    description:
      "為各類客戶建立網站和網頁應用程式。使用 WordPress、React 和客製化 CMS 方案。",
  },
];

const skillsEn: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma"],
  },
];

const skillsZhTw: SkillCategory[] = [
  {
    category: "前端",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "後端",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "工具",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma"],
  },
];

const experienceByLocale: Record<string, Experience[]> = {
  en: experienceEn,
  "zh-TW": experienceZhTw,
};

const skillsByLocale: Record<string, SkillCategory[]> = {
  en: skillsEn,
  "zh-TW": skillsZhTw,
};

export function getExperience(locale: string = "en"): Experience[] {
  return experienceByLocale[locale] || experienceByLocale.en;
}

export function getSkills(locale: string = "en"): SkillCategory[] {
  return skillsByLocale[locale] || skillsByLocale.en;
}
