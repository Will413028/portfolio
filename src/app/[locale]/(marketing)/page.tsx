import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/libs/I18nNavigation';

export default async function Index(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex flex-1 flex-col items-start gap-6 lg:gap-8">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-primary"></span>
                Available for Freelance Projects
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                Building Scalable <br className="hidden lg:block" />
                <span className="bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Web Solutions
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
                Hi, I'm a Senior Software Engineer specializing in full-stack development. I help
                businesses transform ideas into robust, high-performance digital products.
              </p>
              <div className="flex w-full flex-wrap gap-4 sm:w-auto">
                <Link
                  href="/portfolio"
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:bg-primary/90 sm:flex-none"
                >
                  View My Services
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 text-base font-bold text-gray-900 shadow-sm transition-all hover:scale-[1.02] hover:bg-gray-50 dark:border-[#282f39] dark:bg-background-card dark:text-white dark:hover:bg-[#282f39] sm:flex-none"
                >
                  <span className="material-symbols-outlined mr-2 text-[20px]">download</span>
                  Download Resume
                </Link>
              </div>
            </div>
            <div className="relative flex-1 lg:flex lg:justify-end">
              <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl bg-linear-to-br from-primary/20 via-primary/5 to-transparent p-4 lg:ml-auto">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="h-full w-full overflow-hidden rounded-xl bg-gray-800">
                  <div
                    className="h-full w-full bg-cover bg-center bg-no-repeat duration-700 transition-transform hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq2geKzyFBF1OIeiBeDFx-bMcKsHpag9SnldRVRRbU2Eq1zgNecXljejmga4f6uu43GVQ9KLe-WfVRr0pMSGmyrCYNaWt7bRDBpsW_oKAEham4th4WCtEbIvCgiI5AZA_xtl0L78SbBQCRt1OeZZiSIjC0gORQyPiKT5V52KmLZxOy0xU-gfPlLyLvU-4NZ_gCU_rc5nO2rKvXriNYbbWXnI6oC5yv_sn7F823X3OItd5hCrMXL9YADbkUgH5p5UQ6wVyn8Htcz04')",
                    }}
                  ></div>
                </div>
                <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-background-card md:flex">
                  <div className="flex -space-x-3">
                    <div
                      className="h-10 w-10 rounded-full border-2 border-white bg-gray-300 bg-cover dark:border-background-card"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWmf4WU1vX6En2YOvPR5pmtccELWXvH-kdXpr9ySYC_8WK_przath07DAzXbCD41fdLkOG39IfV86zJfwff_a99XrcllLBein_XUAkD0F4O-SZwnhHQapKrlE41X505xwFTOXpIgRK8FUmaCLSQ5M4aLq2lYiOLajUDLITp5CPACmZk-M2nr-fWo4KQ2Wm8sYIIgavN7C50m_-hMq48we8AfnvGHqhGn4hdcFQDigm4X88LZwkrp3mXH6Blim05R7fh8EShDOppY0')",
                      }}
                    ></div>
                    <div
                      className="h-10 w-10 rounded-full border-2 border-white bg-gray-300 bg-cover dark:border-background-card"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWUv6X-OuI28lFD2InUkExSzeYo-CRP7h4JumGvChSFy6sqw2rcSw3yVEbOgoNBevfxvEkUsenZLRCyyexzPUXV4_6fr56F-Y1kPRZmRcijdD6wdhEQKcUz8CAH5_QqtoZTnPLdI4Ryq7c5LuHOj-DQaeChJ4VcMaGlj-JyV10q3j8WI9oEGhF8gfP6rq5F4Dh6v6LT5IsxwRbdr_QJC2X8w8nTULP6Cp4fpQsE0mNvecls-_Vtc7YZt2xgE7mmknCuecFN5n8AKw')",
                      }}
                    ></div>
                    <div
                      className="h-10 w-10 rounded-full border-2 border-white bg-gray-300 bg-cover dark:border-background-card"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBo0tDJyzm7bDiBEsrayXNCCZepkevs6kuERX4hfavdcgrZ6xgOijC3DWaPpj3FYu6QSeDjDhnRJiKuwtVH_RZODZmrT0KTtnkbqxfO_-z2T4NA4DQTwDUxxrpdsArH84yoaf8fZ35kmF86oxESRukPhdTLhqGOuIcaLzbvdr-JARQxycOka6GDTXauz1_e-D2_bScqQBwe6I6O8faT_8S9qFlrBHwqd4K_xFlIO6XT6bSx3p3Ou1kDqChOZyTnhgH3SofTZ93EtQs')",
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      50+ Projects
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Delivered Successfully
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-200 bg-white dark:border-[#282f39] dark:bg-background-dark">
        <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Professional Experience', value: '5+ Years', icon: 'verified' },
              { label: 'Completed & Delivered', value: '30+ Projects', icon: 'dataset' },
              { label: 'Worldwide Satisfaction', value: '25+ Clients', icon: 'groups' },
              { label: 'Technologies Mastered', value: '10+ Stacks', icon: 'code' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 rounded-xl bg-background-light p-6 transition-transform hover:-translate-y-1 dark:bg-background-card"
              >
                <div className="mb-2 w-fit rounded-lg bg-primary/10 p-2 text-primary">
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tech Section */}
      <section className="py-16 md:py-24" id="about">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Technical Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              I leverage cutting-edge technologies to build efficient, scalable, and secure
              applications. Here is my current tech stack.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Frontend Development', icon: 'html' },
              { name: 'Backend Architecture', icon: 'dns' },
              { name: 'Cloud Services (AWS)', icon: 'cloud' },
              { name: 'DevOps & CI/CD', icon: 'rocket_launch' },
              { name: 'Database Management', icon: 'storage' },
              { name: 'React & Vue.js', icon: 'code_blocks' },
              { name: 'Node.js & Python', icon: 'terminal' },
              { name: 'System Design', icon: 'schema' },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-5 shadow-sm transition-colors hover:border-primary/50 dark:border-[#282f39] dark:bg-background-card"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">
                  {skill.icon}
                </span>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 dark:bg-background-dark/50 md:py-24" id="services">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Services I Provide
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Comprehensive development services tailored to your business needs, from concept to
                deployment.
              </p>
            </div>
            <Link
              className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80"
              href="/contact"
            >
              Start a Project{' '}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Custom Web Development',
                icon: 'web',
                desc: 'High-performance websites and web applications built with modern frameworks like React, Next.js, and Vue. Responsive, accessible, and fast.',
              },
              {
                title: 'API & Backend Systems',
                icon: 'api',
                desc: 'Robust RESTful and GraphQL APIs designed for scalability. Secure authentication, database optimization, and seamless 3rd-party integrations.',
              },
              {
                title: 'Cloud & DevOps',
                icon: 'cloud_sync',
                desc: 'End-to-end deployment solutions using AWS or Docker. CI/CD pipelines setup to automate testing and deployment for your team.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md dark:border-[#282f39] dark:bg-background-card"
              >
                <div>
                  <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-400">{service.desc}</p>
                </div>
                <div className="mt-8">
                  <span className="text-sm font-semibold text-primary group-hover:underline">
                    Learn more
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="border-t border-gray-200 py-16 dark:border-[#282f39] md:py-24"
        id="contact"
      >
        <div className="mx-auto max-w-[960px] px-4 text-center sm:px-6">
          <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Ready to launch your next project?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            I'm currently available for freelance work and open to discussing new opportunities.
            Let's build something amazing together.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:bg-primary/90"
            >
              Contact Me
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-base font-bold text-gray-900 shadow-sm transition-all hover:bg-gray-50 dark:border-[#282f39] dark:bg-card-dark dark:text-white dark:hover:bg-[#282f39]"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
