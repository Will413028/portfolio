import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <p className="font-display font-bold text-8xl text-navy">404</p>
        <h1 className="mt-6 font-serif font-black text-3xl">{t("title")}</h1>
        <p className="mt-4 text-body">{t("description")}</p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center rounded-lg bg-navy px-6 font-bold text-on-navy hover:bg-navy-raised transition-colors"
        >
          {t("goHome")}
        </Link>
      </div>
    </main>
  );
}
