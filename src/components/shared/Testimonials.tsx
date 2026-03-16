"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getTestimonials } from '@/lib/testimonials';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const locale = useLocale();
  const testimonials = getTestimonials(locale);
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900/50 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
            {t('label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-medium">
            {t('heading')}{" "}
            <span className="font-serif italic gradient-text-pink">
              {t('headingHighlight')}
            </span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-white">
                {testimonial.title}
              </h3>
              <p className="text-zinc-400 text-sm mb-6 line-clamp-5">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-semibold text-sm shadow-lg`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-400">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {testimonial.role}{" "}
                    {testimonial.company && `· ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-white">
                {testimonial.title}
              </h3>
              <p className="text-zinc-400 text-sm mb-6 line-clamp-5">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-semibold text-sm shadow-lg`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-400">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {testimonial.role}{" "}
                    {testimonial.company && `· ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
