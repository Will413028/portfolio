import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/libs/I18nNavigation';

type IResumeProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return {
    title: 'Resume - DevPortfolio',
    description: 'Professional journey and technical skills.',
  };
}

export default async function ResumePage(props: IResumeProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="mx-auto max-w-[1000px] px-4 py-8 md:px-8">
      {/* Page Heading */}
      <section className="flex flex-wrap items-end justify-between gap-6 pb-12 pt-4">
        <div className="flex max-w-2xl flex-col gap-3">
          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Professional Journey
          </h1>
          <p className="text-lg font-normal leading-relaxed text-slate-600 dark:text-[#9da8b9]">
            A timeline of building scalable software solutions, leading technical teams, and
            delivering value through code. Expert in full-stack development and cloud architecture.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg bg-slate-200 h-11 px-5 font-bold transition-colors hover:bg-slate-300 dark:bg-[#282f39] dark:text-white dark:hover:bg-[#3b4554]"
        >
          <span className="material-symbols-outlined text-[20px]">download</span>
          <span className="truncate">Download Resume (PDF)</span>
        </button>
      </section>

      {/* Work History Section */}
      <section className="mb-16">
        <h2 className="flex items-center gap-3 pb-6 text-[22px] font-bold leading-tight tracking-tight">
          <span className="material-symbols-outlined text-primary">work_history</span>
          Work History
        </h2>
        <div className="relative pl-4 md:pl-0">
          <div className="absolute left-[19px] top-2 bottom-0 hidden w-[2px] bg-slate-200 dark:bg-[#282f39] md:block"></div>
          <div className="flex flex-col gap-10">
            {[
              {
                title: 'Senior Full Stack Engineer',
                company: 'TechFlow Solutions',
                period: '2021 - Present',
                icon: 'rocket_launch',
                current: true,
                tasks: [
                  'Architected and led the development of a microservices-based SaaS platform serving 50k+ daily users.',
                  'Optimized database queries and API response times, reducing latency by 40% and AWS costs by 25%.',
                  'Mentored 3 junior developers and introduced automated CI/CD pipelines using GitHub Actions.',
                ],
                tags: ['React', 'Node.js', 'TypeScript', 'AWS'],
              },
              {
                title: 'Backend Developer',
                company: 'DataSystems Corp',
                period: '2019 - 2021',
                icon: 'code',
                tasks: [
                  'Developed robust RESTful APIs for a fintech application processing $1M+ in monthly transactions.',
                  'Implemented Redis caching strategies to handle high-traffic spikes during market opening hours.',
                  'Collaborated with frontend teams to integrate complex data visualization features.',
                ],
                tags: ['Python', 'Django', 'PostgreSQL', 'Redis'],
              },
              {
                title: 'Freelance Web Developer',
                company: 'Self-Employed',
                period: '2017 - 2019',
                icon: 'draw',
                tasks: [
                  'Delivered 15+ custom websites and e-commerce solutions for SMB clients.',
                  'Managed full project lifecycle from requirement gathering and design to deployment and maintenance.',
                  'Achieved 100% client satisfaction rate with multiple repeat contracts.',
                ],
                tags: ['WordPress', 'PHP', 'JavaScript', 'Shopify'],
              },
            ].map((job) => (
              <div key={job.company} className="relative grid gap-x-6 md:grid-cols-[40px_1fr]">
                <div className="hidden flex-col items-center md:flex">
                  <div
                    className={`z-10 flex size-10 items-center justify-center rounded-full ${job.current ? 'bg-primary shadow-[0_0_0_4px_rgba(19,109,236,0.2)]' : 'bg-slate-200 dark:bg-[#282f39]'}`}
                  >
                    <span
                      className={`material-symbols-outlined text-[20px] ${job.current ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}
                    >
                      {job.icon}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-primary/50 dark:border-[#282f39] dark:bg-card-dark">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {job.title}
                      </h3>
                      <p
                        className={`${job.current ? 'text-primary' : 'text-slate-500 dark:text-slate-400'} font-medium`}
                      >
                        {job.company}
                      </p>
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 dark:border-[#282f39] dark:bg-[#111418] dark:text-slate-400">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mb-6 ml-5 list-outside list-disc space-y-2 text-sm leading-relaxed text-slate-600 dark:text-[#9da8b9]">
                    {job.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded px-2.5 py-1 text-xs font-medium ${job.current ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-600 dark:bg-[#111418] dark:text-slate-400'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-16">
        <h2 className="flex items-center gap-3 pb-6 text-[22px] font-bold leading-tight tracking-tight">
          <span className="material-symbols-outlined text-primary">terminal</span>
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Frontend Card */}
          <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-[#282f39] dark:bg-card-dark">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                <span className="material-symbols-outlined text-[20px]">html</span>
              </div>
              <h3 className="text-lg font-bold">Frontend Development</h3>
            </div>
            {[
              { name: 'React / Next.js', value: '95%' },
              { name: 'TypeScript', value: '90%' },
            ].map((skill) => (
              <div key={skill.name} className="flex flex-col gap-3">
                <div className="mb-1 flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="font-bold text-primary">{skill.value}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-[#111418]">
                  <div className="h-full bg-primary" style={{ width: skill.value }}></div>
                </div>
              </div>
            ))}
            <div className="mt-2 flex flex-wrap gap-2">
              {['Tailwind CSS', 'Vue.js', 'Redux', 'Framer Motion'].map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-slate-100 px-2 py-1 text-xs dark:bg-[#111418]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Backend Card */}
          <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-[#282f39] dark:bg-card-dark">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                <span className="material-symbols-outlined text-[20px]">database</span>
              </div>
              <h3 className="text-lg font-bold">Backend & Data</h3>
            </div>
            {[
              {
                name: 'Node.js / Express',
                value: '90%',
                color: 'text-green-500',
                barColor: 'bg-green-500',
              },
              {
                name: 'Python / Django',
                value: '85%',
                color: 'text-green-500',
                barColor: 'bg-green-500',
              },
            ].map((skill) => (
              <div key={skill.name} className="flex flex-col gap-3">
                <div className="mb-1 flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className={`font-bold ${skill.color}`}>{skill.value}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-[#111418]">
                  <div className={`h-full ${skill.barColor}`} style={{ width: skill.value }}></div>
                </div>
              </div>
            ))}
            <div className="mt-2 flex flex-wrap gap-2">
              {['PostgreSQL', 'MongoDB', 'Go', 'GraphQL'].map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-slate-100 px-2 py-1 text-xs dark:bg-[#111418]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* DevOps Card */}
          <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-[#282f39] dark:bg-card-dark">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
                <span className="material-symbols-outlined text-[20px]">cloud</span>
              </div>
              <h3 className="text-lg font-bold">DevOps & Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'Kubernetes', 'AWS', 'CI/CD Pipelines', 'Terraform', 'Nginx'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm dark:border-[#282f39] dark:bg-[#111418]"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
          {/* Tools Card */}
          <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-[#282f39] dark:bg-card-dark">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                <span className="material-symbols-outlined text-[20px]">build</span>
              </div>
              <h3 className="text-lg font-bold">Tools & Workflow</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Git & GitHub', 'Jira / Linear', 'Figma', 'Postman', 'VS Code'].map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm dark:border-[#282f39] dark:bg-[#111418]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="mb-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h2 className="flex items-center gap-3 pb-6 text-[22px] font-bold leading-tight tracking-tight">
              <span className="material-symbols-outlined text-primary">school</span>
              Education
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: 'B.S. in Computer Science',
                  school: 'National Technology University',
                  period: '2013 - 2017 • GPA 3.8/4.0',
                  icon: 'school',
                },
                {
                  title: 'Full Stack Web Bootcamp',
                  school: 'CodeAcademy Pro',
                  period: '2017 • Intensive 12-week program',
                  icon: 'menu_book',
                },
              ].map((edu) => (
                <div
                  key={edu.title}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-[#282f39] dark:bg-card-dark"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-[#111418]">
                    <span className="material-symbols-outlined text-slate-500">{edu.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold">{edu.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{edu.school}</p>
                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Certifications */}
          <div>
            <h2 className="flex items-center gap-3 pb-6 text-[22px] font-bold leading-tight tracking-tight">
              <span className="material-symbols-outlined text-primary">verified</span>
              Certifications
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: 'AWS Certified Solutions Architect',
                  issuer: 'Amazon Web Services',
                  period: 'Issued: Jan 2023 • Valid until 2026',
                  icon: 'cloud_done',
                  color: 'text-[#FF9900]',
                  bg: 'bg-[#FF9900]/10',
                },
                {
                  title: 'Google Professional Cloud Dev',
                  issuer: 'Google Cloud',
                  period: 'Issued: Aug 2022 • Valid until 2024',
                  icon: 'workspace_premium',
                  color: 'text-[#4285F4]',
                  bg: 'bg-[#4285F4]/10',
                },
              ].map((cert) => (
                <div
                  key={cert.title}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-[#282f39] dark:bg-card-dark"
                >
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${cert.bg}`}
                  >
                    <span className={`material-symbols-outlined ${cert.color}`}>{cert.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold">{cert.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{cert.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Freelance CTA */}
      <section className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-linear-to-r from-primary to-blue-700 p-8 shadow-xl shadow-primary/20 md:flex-row md:p-12 md:text-left text-center">
        <div className="max-w-xl">
          <h2 className="mb-3 text-3xl font-bold text-white">Ready to build your next project?</h2>
          <p className="text-lg text-blue-100">
            I'm currently available for freelance projects and consulting. Let's turn your idea into
            a high-performance reality.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-white px-8 py-3 font-bold text-primary shadow-lg transition-colors hover:bg-slate-100"
          >
            Start a Project
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-blue-600 bg-blue-800 px-8 py-3 font-bold text-white transition-colors hover:bg-blue-900"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
