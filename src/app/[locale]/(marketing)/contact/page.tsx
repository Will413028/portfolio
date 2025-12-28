import { getTranslations, setRequestLocale } from 'next-intl/server';

type IContactProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IContactProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Contact',
  });

  return {
    title: `${t('meta_title')} - DevPortfolio`,
    description: t('meta_description'),
  };
}

export default async function ContactPage(props: IContactProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations('Contact');

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 md:px-8">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20 text-gray-900 dark:text-white">
        {/* Left Column: Info & Socials */}
        <div className="flex flex-col gap-8 lg:col-span-5">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-black leading-tight tracking-tight lg:text-5xl">
              {t('page_title')}
            </h1>
            <p className="text-lg font-normal leading-relaxed text-slate-600 dark:text-[#9da8b9]">
              {t('page_description')}
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-6">
            {/* Email Card */}
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div className="flex flex-col">
                <p className="mb-1 text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-[#9da8b9]">
                  {t('email_label')}
                </p>
                <a
                  className="text-lg font-semibold transition-colors hover:text-primary"
                  href="mailto:hello@devportfolio.com"
                >
                  hello@devportfolio.com
                </a>
              </div>
            </div>
            {/* Location Card */}
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div className="flex flex-col">
                <p className="mb-1 text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-[#9da8b9]">
                  {t('location_label')}
                </p>
                <p className="text-lg font-semibold">{t('location_value')}</p>
              </div>
            </div>
          </div>
          <div className="my-2 h-px w-full bg-gray-200 dark:bg-[#282f39]"></div>
          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-[#9da8b9]">
              {t('social_label')}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  name: 'LinkedIn',
                  icon: 'work',
                  color: 'group-hover:text-[#0077b5]',
                  href: 'https://linkedin.com',
                },
                {
                  name: 'GitHub',
                  icon: 'code',
                  color: 'group-hover:text-white',
                  href: 'https://github.com',
                },
                {
                  name: 'Instagram',
                  icon: 'photo_camera',
                  color: 'group-hover:text-pink-500',
                  href: 'https://instagram.com',
                },
              ].map((social) => (
                <a
                  key={social.name}
                  className="group flex items-center gap-3 rounded-lg border border-transparent bg-gray-100 px-5 py-3 transition-all duration-200 hover:border-gray-200 hover:bg-white dark:bg-[#1c2027] dark:hover:border-[#3b4554] dark:hover:bg-[#282f39]"
                  href={social.href}
                >
                  <span
                    className={`material-symbols-outlined text-gray-500 transition-colors dark:text-gray-400 ${social.color}`}
                  >
                    {social.icon}
                  </span>
                  <span className="font-medium text-slate-700 dark:text-gray-200">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 dark:border-border-dark dark:bg-card-dark dark:shadow-none md:p-10">
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              {t('form_title')}
            </h3>
            <form className="flex flex-col gap-6">
              {/* Name & Email Row */}
              <div className="flex flex-col gap-6 md:flex-row">
                <label className="flex flex-1 flex-col">
                  <span className="mb-2 ml-1 text-sm font-semibold text-slate-700 dark:text-gray-200">
                    {t('name_label')}
                  </span>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="material-symbols-outlined text-[20px] text-gray-400">
                        person
                      </span>
                    </div>
                    <input
                      className="h-12 w-full rounded-lg border border-gray-300 bg-gray-50 pl-10 text-slate-900 placeholder:text-gray-400 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#3b4554] dark:bg-[#111418] dark:text-white dark:placeholder:text-[#6b7280]"
                      placeholder={t('name_placeholder')}
                      type="text"
                    />
                  </div>
                </label>
                <label className="flex flex-1 flex-col">
                  <span className="mb-2 ml-1 text-sm font-semibold text-slate-700 dark:text-gray-200">
                    {t('email_label')}
                  </span>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="material-symbols-outlined text-[20px] text-gray-400">
                        alternate_email
                      </span>
                    </div>
                    <input
                      className="h-12 w-full rounded-lg border border-gray-300 bg-gray-50 pl-10 text-slate-900 placeholder:text-gray-400 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#3b4554] dark:bg-[#111418] dark:text-white dark:placeholder:text-[#6b7280]"
                      placeholder={t('email_placeholder')}
                      type="email"
                    />
                  </div>
                </label>
              </div>
              {/* Subject */}
              <label className="flex flex-col">
                <span className="mb-2 ml-1 text-sm font-semibold text-slate-700 dark:text-gray-200">
                  {t('subject_label')}
                </span>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="material-symbols-outlined text-[20px] text-gray-400">
                      title
                    </span>
                  </div>
                  <input
                    className="h-12 w-full rounded-lg border border-gray-300 bg-gray-50 pl-10 text-slate-900 placeholder:text-gray-400 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#3b4554] dark:bg-[#111418] dark:text-white dark:placeholder:text-[#6b7280]"
                    placeholder={t('subject_placeholder')}
                    type="text"
                  />
                </div>
              </label>
              {/* Message */}
              <label className="flex flex-col">
                <span className="mb-2 ml-1 text-sm font-semibold text-slate-700 dark:text-gray-200">
                  {t('message_label')}
                </span>
                <textarea
                  className="min-h-[160px] w-full resize-y rounded-lg border border-gray-300 bg-gray-50 p-4 text-slate-900 placeholder:text-gray-400 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#3b4554] dark:bg-[#111418] dark:text-white dark:placeholder:text-[#6b7280]"
                  placeholder={t('message_placeholder')}
                ></textarea>
              </label>
              {/* Submit Button */}
              <div className="pt-2">
                <button
                  className="group relative flex w-full min-w-[160px] items-center justify-center overflow-hidden rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 active:scale-[0.98] md:w-auto"
                  type="button"
                >
                  <span className="absolute inset-0 h-full w-full -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    {t('send_button')}
                    <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                      send
                    </span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
