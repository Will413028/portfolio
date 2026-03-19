import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-[120px] md:text-[160px] font-medium leading-none gradient-text-pink font-serif select-none mb-4">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-4">
          {t("title")}
        </h1>
        <p className="text-zinc-400 mb-8">{t("description")}</p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-colors"
          >
            {t("goHome")}
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-zinc-700 text-zinc-300 rounded-full hover:border-zinc-500 hover:text-white transition-colors"
          >
            {t("contactMe")}
          </Link>
        </div>
      </div>
    </div>
  );
}
