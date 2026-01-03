import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/libs/I18nNavigation';

export default async function Index(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations('Index');

  return (
    <div className="bg-background-dark text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex flex-1 flex-col items-start gap-6 lg:gap-8">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-primary"></span>
                {t('hero_badge')}
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                {t
                  .raw('hero_title')
                  .split('{br}')
                  .map((text: string, i: number, arr: string[]) => (
                    <span key={text}>
                      {text}
                      {i < arr.length - 1 && <br className="hidden lg:block" />}
                    </span>
                  ))}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-gray-400 sm:text-xl">
                {t('hero_description')}
              </p>
              <div className="flex w-full flex-wrap gap-4 sm:w-auto">
                <Link
                  href="/portfolio"
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:bg-primary/90 sm:flex-none"
                >
                  {t('button_services')}
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-8 text-base font-bold text-white shadow-sm transition-all hover:scale-[1.02] hover:bg-white/10 sm:flex-none"
                >
                  <span className="material-symbols-outlined mr-2 text-[20px]">download</span>
                  {t('button_resume')}
                </Link>
              </div>
            </div>
            <div className="relative flex-1 lg:flex lg:justify-end">
              <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl bg-linear-to-br from-primary/20 via-primary/5 to-transparent p-4 lg:ml-auto">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="h-full w-full overflow-hidden rounded-xl bg-card-dark">
                  <div
                    className="h-full w-full bg-cover bg-center bg-no-repeat duration-700 transition-transform hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq2geKzyFBF1OIeiBeDFx-bMcKsHpag9SnldRVRRbU2Eq1zgNecXljejmga4f6uu43GVQ9KLe-WfVRr0pMSGmyrCYNaWt7bRDBpsW_oKAEham4th4WCtEbIvCgiI5AZA_xtl0L78SbBQCRt1OeZZiSIjC0gORQyPiKT5V52KmLZxOy0xU-gfPlLyLvU-4NZ_gCU_rc5nO2rKvXriNYbbWXnI6oC5yv_sn7F823X3OItd5hCrMXL9YADbkUgH5p5UQ6wVyn8Htcz04')",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/10 bg-background-dark">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: t('stats_exp_label'), value: t('stats_exp_val'), icon: 'verified' },
              { label: t('stats_comp_label'), value: t('stats_comp_val'), icon: 'dataset' },
              {
                label: t('stats_satisfaction_label'),
                value: t('stats_satisfaction_val'),
                icon: 'groups',
              },
              { label: t('stats_tech_label'), value: t('stats_tech_val'), icon: 'code' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 rounded-xl border border-white/5 bg-card-dark p-6 transition-transform hover:-translate-y-1"
              >
                <div className="mb-2 w-fit rounded-lg bg-primary/10 p-2 text-primary">
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <p className="text-3xl font-bold tracking-tight text-white">{stat.value}</p>
                <p className="text-sm font-medium text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills \u0026 Tech Section */}
      <section className="py-16 md:py-24" id="about">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-serif italic mb-4">
              {t('skills_title')}
            </h2>
            <p className="mt-4 text-lg text-gray-400">{t('skills_description')}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Frontend Development', icon: 'html' },
              { name: 'Backend Architecture', icon: 'dns' },
              { name: 'Cloud Services (AWS)', icon: 'cloud' },
              { name: 'DevOps \u0026 CI/CD', icon: 'rocket_launch' },
              { name: 'Database Management', icon: 'storage' },
              { name: 'React \u0026 Vue.js', icon: 'code_blocks' },
              { name: 'Node.js \u0026 Python', icon: 'terminal' },
              { name: 'System Design', icon: 'schema' },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg border border-white/10 bg-surface-dark px-5 shadow-sm transition-colors hover:border-primary/50"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">
                  {skill.icon}
                </span>
                <p className="text-sm font-medium text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white/5 py-16 md:py-24" id="services">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-serif italic mb-4">
                {t('services_title')}
              </h2>
              <p className="mt-4 text-lg text-gray-400">{t('services_description')}</p>
            </div>
            <Link
              className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80"
              href="/contact"
            >
              {t('services_cta')}{' '}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: t('service_web_title'),
                icon: 'web',
                desc: t('service_web_desc'),
              },
              {
                title: t('service_api_title'),
                icon: 'api',
                desc: t('service_api_desc'),
              },
              {
                title: t('service_cloud_title'),
                icon: 'cloud_sync',
                desc: t('service_cloud_desc'),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-card-dark p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <div>
                  <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                  <p className="leading-relaxed text-gray-400">{service.desc}</p>
                </div>
                <div className="mt-8">
                  <span className="text-sm font-semibold text-primary group-hover:underline">
                    {t('service_learn_more')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
