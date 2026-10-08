import { ArrowRight, FileText } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Closing() {
  const t = useTranslations("closing");

  return (
    <section className="px-6 py-28 max-w-3xl mx-auto text-center">
      <p className="text-2xl md:text-4xl font-serif italic text-white leading-snug mb-6">
        {t("line")}
      </p>
      <p className="text-zinc-400 max-w-xl mx-auto mb-10">{t("text")}</p>

      <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
        <a
          href="mailto:will413028@gmail.com"
          className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-all duration-200 shadow-lg shadow-white/10"
        >
          {t("email")}
          <span className="flex items-center justify-center w-6 h-6 bg-zinc-900 rounded-full">
            <ArrowRight
              size={14}
              className="text-white group-hover:translate-x-0.5 transition-transform"
            />
          </span>
        </a>
        <a
          href="/resume.pdf"
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
        >
          <FileText size={16} />
          {t("resume")}
        </a>
      </div>

      <p className="text-sm text-zinc-500">
        will413028@gmail.com ·{" "}
        <a
          href="https://github.com/will413028"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          GitHub
        </a>{" "}
        ·{" "}
        <a
          href="https://www.linkedin.com/in/will4130/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </p>
    </section>
  );
}
