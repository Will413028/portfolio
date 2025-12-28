import { getTranslations, setRequestLocale } from 'next-intl/server';

type IResumeProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IResumeProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Resume',
  });

  return {
    title: `${t('meta_title')} - DevPortfolio`,
    description: t('meta_description'),
  };
}

export default async function ResumePage(props: IResumeProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations('Resume');

  return (
    <div className="mx-auto max-w-[1000px] px-4 py-8 md:px-8">
      {/* Page Heading */}
      <section className="flex flex-wrap items-end justify-between gap-6 pb-12 pt-4">
        <div className="flex max-w-2xl flex-col gap-3">
          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
            {t('page_title')}
          </h1>
          <p className="text-lg font-normal leading-relaxed text-slate-600 dark:text-[#9da8b9]">
            {t('page_description')}
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg bg-slate-200 h-11 px-5 font-bold transition-colors hover:bg-slate-300 dark:bg-[#282f39] dark:text-white dark:hover:bg-[#3b4554]"
        >
          <span className="material-symbols-outlined text-[20px]">download</span>
          <span className="truncate">{t('download_button')}</span>
        </button>
      </section>

      {/* Work History Section */}
      <section className="mb-16">
        <h2 className="flex items-center gap-3 pb-6 text-[22px] font-bold leading-tight tracking-tight">
          <span className="material-symbols-outlined text-primary">work_history</span>
          {t('work_history_title')}
        </h2>
        <div className="relative pl-4 md:pl-0">
          <div className="absolute left-[19px] top-2 bottom-0 hidden w-[2px] bg-slate-200 dark:bg-[#282f39] md:block"></div>
          <div className="flex flex-col gap-10">
            {[
              {
                title: t('job_senior_title'),
                company: t('job_senior_company'),
                period: t('job_senior_period'),
                icon: 'rocket_launch',
                current: true,
                tasks: [t('job_senior_task1'), t('job_senior_task2'), t('job_senior_task3')],
                tags: ['React', 'Node.js', 'TypeScript', 'AWS'],
              },
              {
                title: t('job_backend_title'),
                company: t('job_backend_company'),
                period: t('job_backend_period'),
                icon: 'code',
                tasks: [t('job_backend_task1'), t('job_backend_task2'), t('job_backend_task3')],
                tags: ['Python', 'Django', 'PostgreSQL', 'Redis'],
              },
              {
                title: t('job_freelance_title'),
                company: t('job_freelance_company'),
                period: t('job_freelance_period'),
                icon: 'draw',
                tasks: [
                  t('job_freelance_task1'),
                  t('job_freelance_task2'),
                  t('job_freelance_task3'),
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
          {t('tech_skills_title')}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Frontend Card */}
          <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-[#282f39] dark:bg-card-dark">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                <span className="material-symbols-outlined text-[20px]">html</span>
              </div>
              <h3 className="text-lg font-bold">{t('frontend_title')}</h3>
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
              <h3 className="text-lg font-bold">{t('backend_title')}</h3>
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
              <h3 className="text-lg font-bold">{t('devops_title')}</h3>
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
              <h3 className="text-lg font-bold">{t('tools_title')}</h3>
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
              {t('education_title')}
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: t('edu_cs_title'),
                  school: t('edu_cs_school'),
                  period: t('edu_cs_period'),
                  icon: 'school',
                },
                {
                  title: t('edu_bootcamp_title'),
                  school: t('edu_bootcamp_school'),
                  period: t('edu_bootcamp_period'),
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
              {t('certifications_title')}
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: t('cert_aws_title'),
                  issuer: t('cert_aws_issuer'),
                  period: t('cert_aws_period'),
                  icon: 'cloud_done',
                  color: 'text-[#FF9900]',
                  bg: 'bg-[#FF9900]/10',
                },
                {
                  title: t('cert_google_title'),
                  issuer: t('cert_google_issuer'),
                  period: t('cert_google_period'),
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
    </div>
  );
}
