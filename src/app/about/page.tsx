import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Building custom web applications for startups and businesses. Specializing in Next.js, React, and headless CMS implementations.",
  },
  {
    role: "Frontend Developer",
    company: "Tech Startup",
    period: "2022 - 2023",
    description: "Developed responsive web applications using React and TypeScript. Implemented design systems and improved Core Web Vitals.",
  },
  {
    role: "Web Developer",
    company: "Digital Agency",
    period: "2021 - 2022",
    description: "Created websites and web applications for various clients. Worked with WordPress, React, and custom CMS solutions.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 pt-32 pb-16 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">About Me</p>
        <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-8">
          I'm Aayush Bharti, a
          <br />
          <span className="gradient-text-pink font-serif italic">passionate developer</span>
        </h1>
      </section>

      {/* Bio Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-medium mb-6">My Story</h2>
            <div className="space-y-4 text-zinc-400">
              <p>
                I started my journey in web development back in 2020, fascinated by the power of creating things that millions of people can use. What began as curiosity quickly turned into a passion.
              </p>
              <p>
                Today, I specialize in building modern web applications using React, Next.js, and TypeScript. I love working with startups and founders who have bold ideas and need someone to bring them to life.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing my knowledge through blog posts and mentoring.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-6">What I Value</h2>
            <div className="space-y-4">
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="font-medium text-white mb-2">Clean Code</h3>
                <p className="text-sm text-zinc-400">Writing maintainable, well-documented code that stands the test of time.</p>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="font-medium text-white mb-2">User Experience</h3>
                <p className="text-sm text-zinc-400">Creating intuitive interfaces that users love to interact with.</p>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="font-medium text-white mb-2">Continuous Learning</h3>
                <p className="text-sm text-zinc-400">Staying updated with the latest technologies and best practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-medium mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.category} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className="text-lg font-medium text-white mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-full text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto" id="experience">
        <h2 className="text-2xl font-medium mb-8">Work Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-white">{exp.role}</h3>
                  <p className="text-cyan-400">{exp.company}</p>
                </div>
                <span className="text-sm text-zinc-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-zinc-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-zinc-800 rounded-2xl text-center">
          <h2 className="text-2xl font-medium mb-4">Let's Work Together</h2>
          <p className="text-zinc-400 mb-6">Have a project in mind? I'd love to hear about it.</p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-colors"
          >
            Get In Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
