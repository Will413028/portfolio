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

const testimonialsEn: Testimonial[] = [];

const testimonialsZhTw: Testimonial[] = [];

const testimonialsByLocale: Record<string, Testimonial[]> = {
  en: testimonialsEn,
  "zh-TW": testimonialsZhTw,
};

export function getTestimonials(locale: string = "en"): Testimonial[] {
  return testimonialsByLocale[locale] || testimonialsByLocale.en;
}
