import { useTranslations } from "next-intl";

export default function Closing() {
  const t = useTranslations("closing");

  return (
    <section aria-labelledby="closing-title" className="bg-navy text-on-navy">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:py-24 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2
            id="closing-title"
            className="font-serif font-black text-4xl md:text-5xl leading-tight"
          >
            {t("title")}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-on-navy-muted">
            {t("text")}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:will413028@gmail.com"
            className="inline-flex h-12 items-center rounded-lg bg-bright px-6 font-bold text-navy hover:bg-peach transition-colors"
          >
            will413028@gmail.com
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex h-12 items-center rounded-lg border border-navy-line px-6 font-medium text-on-navy hover:border-on-navy-muted transition-colors"
          >
            {t("resume")}
          </a>
        </div>
      </div>
    </section>
  );
}
