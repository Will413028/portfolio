"use client";

const testimonials = [
  {
    id: 1,
    title: "An Artist with Code Who Delivers Real SEO Results",
    content: "Aayush is an artist with code. We went from 'I want something high-tech and fast' to a fully built, high-ranking website in just over a week. He is constantly advancing his craft, ensuring our Sanity CMS implementation adheres to the newest standards for speed and efficiency.",
    author: "Michael Davis",
    role: "Founder/CTO",
    company: "Apex Consulting",
    initials: "MD",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Simply the best developer I've worked with.",
    content: "Aayush is the man! He is simply the best developer I've worked with. He took our design requirements and quite literally ran with them, translating everything into a robust, WCAG accessible platform. We are super happy with the final product.",
    author: "Jennifer Wilson",
    role: "Founder",
    company: "Blue Harbor Agency",
    initials: "JW",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Professional, Quick, and a Seamless CMS Integration",
    content: "Aayush was quick to respond, very professional, and delivered our fully SEO-optimized site ahead of schedule. The integration with our headless CMS was seamless and exactly what we needed for easy content management.",
    author: "Robert Johnson",
    role: "Startup Agency Owner",
    company: "",
    initials: "RJ",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "Excellent Communication and a Huge Jump in Core Web Vitals",
    content: "Excellent communication and professionalism from the start and throughout. Aayush calmly entertained a few additional requests, always maintaining an open-minded approach to suggestions and feedback. Our Core Web Vitals jumped immediately after deployment.",
    author: "Tony Parker",
    role: "Founder",
    company: "Metro Solutions Group",
    initials: "TP",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "His JavaScript/React Skills are Through the Roof",
    content: "I've been working with Aayush for a couple of months now and I can't express enough how impressed I am with his talent. His JavaScript/React web UI programming skills are through the roof. We have a streamlined workflow, and he's extremely responsive.",
    author: "Chris Taylor",
    role: "Chairperson",
    company: "Core Fitness Club",
    initials: "CT",
    color: "from-rose-500 to-pink-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900/50 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-medium">
            Word on the street <span className="font-serif italic gradient-text-pink">about me</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-white">{testimonial.title}</h3>
              <p className="text-zinc-400 text-sm mb-6 line-clamp-5">{testimonial.content}</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-semibold text-sm shadow-lg`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-400">{testimonial.author}</p>
                  <p className="text-xs text-zinc-500">
                    {testimonial.role} {testimonial.company && `· ${testimonial.company}`}
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
              <h3 className="text-lg font-semibold mb-4 text-white">{testimonial.title}</h3>
              <p className="text-zinc-400 text-sm mb-6 line-clamp-5">{testimonial.content}</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-semibold text-sm shadow-lg`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-400">{testimonial.author}</p>
                  <p className="text-xs text-zinc-500">
                    {testimonial.role} {testimonial.company && `· ${testimonial.company}`}
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
