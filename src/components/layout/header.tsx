"use client";

import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";

export default function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const otherLocale = locale === "zh-TW" ? "en" : "zh-TW";

  const links = [
    { href: "/work", label: t("work") },
    { href: "/#judgments", label: t("judgments") },
    { href: "/about", label: t("about") },
    { href: "/resume", label: t("resume") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy text-on-navy border-b border-navy-line">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-on-navy focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
      >
        {t("skip")}
      </a>
      <nav
        aria-label={t("label")}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-display font-bold text-xl">Will Wu</span>
          <span className="hidden text-sm text-on-navy-muted sm:inline">
            {t("role")}
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="text-sm text-on-navy-muted hover:text-on-navy aria-[current=page]:text-on-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={pathname}
            locale={otherLocale}
            className="inline-flex h-10 items-center rounded-lg border border-navy-line px-3 text-sm hover:border-on-navy-muted transition-colors"
          >
            {t("otherLanguage")}
          </Link>
          <a
            href="/resume.pdf"
            className="inline-flex h-10 items-center rounded-lg bg-on-navy px-4 text-sm font-bold text-navy hover:bg-peach transition-colors"
          >
            {t("downloadResume")}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-on-navy-muted hover:text-on-navy md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-navy-line px-6 pb-6 md:hidden"
        >
          <ul className="flex flex-col py-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-on-navy"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <Link
              href={pathname}
              locale={otherLocale}
              onClick={() => setOpen(false)}
              className="inline-flex h-11 items-center rounded-lg border border-navy-line px-4 text-sm"
            >
              {t("otherLanguage")}
            </Link>
            <a
              href="/resume.pdf"
              className="inline-flex h-11 items-center rounded-lg bg-on-navy px-4 text-sm font-bold text-navy"
            >
              {t("downloadResume")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
