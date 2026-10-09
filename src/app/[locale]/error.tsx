"use client";

import { useTranslations } from "next-intl";

// Page-level boundary: keeps the locale layout and translated copy.
// global-error.tsx only handles failures in the layout itself.
export default function LocaleError({ reset }: { reset: () => void }) {
  const t = useTranslations("error");

  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <h1 className="font-serif font-black text-3xl">{t("title")}</h1>
        <p className="mt-4 text-body">{t("description")}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 h-12 rounded-lg bg-navy px-6 font-bold text-on-navy hover:bg-navy-raised transition-colors"
        >
          {t("retry")}
        </button>
      </div>
    </main>
  );
}
