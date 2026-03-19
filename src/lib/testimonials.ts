export interface Testimonial {
  id: number;
  title: string;
  content: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  color: string;
}

const testimonialsEn: Testimonial[] = [
  {
    id: 1,
    title: "An Artist with Code Who Delivers Real SEO Results",
    content:
      "Will is an artist with code. We went from 'I want something high-tech and fast' to a fully built, high-ranking website in just over a week. He is constantly advancing his craft, ensuring our Sanity CMS implementation adheres to the newest standards for speed and efficiency.",
    author: "Michael Davis",
    role: "Founder/CTO",
    company: "Apex Consulting",
    initials: "MD",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Simply the best developer I've worked with.",
    content:
      "Will is the man! He is simply the best developer I've worked with. He took our design requirements and quite literally ran with them, translating everything into a robust, WCAG accessible platform. We are super happy with the final product.",
    author: "Jennifer Wilson",
    role: "Founder",
    company: "Blue Harbor Agency",
    initials: "JW",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Professional, Quick, and a Seamless CMS Integration",
    content:
      "Will was quick to respond, very professional, and delivered our fully SEO-optimized site ahead of schedule. The integration with our headless CMS was seamless and exactly what we needed for easy content management.",
    author: "Robert Johnson",
    role: "Startup Agency Owner",
    company: "",
    initials: "RJ",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "Excellent Communication and a Huge Jump in Core Web Vitals",
    content:
      "Excellent communication and professionalism from the start and throughout. Will calmly entertained a few additional requests, always maintaining an open-minded approach to suggestions and feedback. Our Core Web Vitals jumped immediately after deployment.",
    author: "Tony Parker",
    role: "Founder",
    company: "Metro Solutions Group",
    initials: "TP",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "His JavaScript/React Skills are Through the Roof",
    content:
      "I've been working with Will for a couple of months now and I can't express enough how impressed I am with his talent. His JavaScript/React web UI programming skills are through the roof. We have a streamlined workflow, and he's extremely responsive.",
    author: "Chris Taylor",
    role: "Chairperson",
    company: "Core Fitness Club",
    initials: "CT",
    color: "from-rose-500 to-pink-500",
  },
];

const testimonialsZhTw: Testimonial[] = [
  {
    id: 1,
    title: "用程式碼創造藝術，帶來真實的 SEO 成果",
    content:
      "Will 是程式碼的藝術家。我們從「我想要一個高科技且快速的網站」到完整建成、排名優異的網站，只花了一週多。他不斷精進技術，確保我們的 Sanity CMS 實作符合最新的速度和效率標準。",
    author: "Michael Davis",
    role: "創辦人/技術長",
    company: "Apex Consulting",
    initials: "MD",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "我合作過最優秀的開發者。",
    content:
      "Will 太厲害了！他是我合作過最優秀的開發者。他接下我們的設計需求，完全按照要求執行，將一切轉化為一個穩健、符合 WCAG 無障礙標準的平台。我們對最終成品非常滿意。",
    author: "Jennifer Wilson",
    role: "創辦人",
    company: "Blue Harbor Agency",
    initials: "JW",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "專業、快速，無縫的 CMS 整合",
    content:
      "Will 回覆迅速，非常專業，並且提前交付了我們完全 SEO 優化的網站。與我們的 headless CMS 整合非常順暢，完全符合我們輕鬆管理內容的需求。",
    author: "Robert Johnson",
    role: "新創代理商負責人",
    company: "",
    initials: "RJ",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "優秀的溝通能力和 Core Web Vitals 的大幅提升",
    content:
      "從一開始到結束都展現了優秀的溝通和專業精神。Will 從容地處理了一些額外的需求，始終對建議和回饋保持開放態度。我們的 Core Web Vitals 在部署後立即大幅提升。",
    author: "Tony Parker",
    role: "創辦人",
    company: "Metro Solutions Group",
    initials: "TP",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "他的 JavaScript/React 技能出類拔萃",
    content:
      "我與 Will 合作了幾個月，對他的才華讚嘆不已。他的 JavaScript/React Web UI 程式設計技能非常出色。我們有一套流暢的工作流程，他的回應也非常迅速。",
    author: "Chris Taylor",
    role: "主席",
    company: "Core Fitness Club",
    initials: "CT",
    color: "from-rose-500 to-pink-500",
  },
];

const testimonialsByLocale: Record<string, Testimonial[]> = {
  en: testimonialsEn,
  "zh-TW": testimonialsZhTw,
};

export function getTestimonials(locale: string = "en"): Testimonial[] {
  return testimonialsByLocale[locale] || testimonialsByLocale.en;
}
