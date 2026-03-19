"use client";

import { ChevronDown, Command, Globe, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  en: "EN",
  "zh-TW": "中文",
};

export default function Navigation() {
  const t = useTranslations("nav");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/work", label: t("work") },
    { href: "/blog", label: t("blog") },
    { href: "/resume", label: t("resume") },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localeMenuOpen, setLocaleMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
    setLocaleMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4" aria-label="Main navigation">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:font-medium"
      >
        Skip to main content
      </a>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Home">
          <svg
            width="32"
            height="32"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M20 5L35 35H5L20 5Z"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M20 15L28 35H12L20 15Z"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M12 27H28" stroke="white" strokeWidth="1.5" />
          </svg>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-0.5 bg-zinc-900/90 backdrop-blur-xl rounded-full px-1.5 py-1 border border-zinc-800/80">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 ${
                pathname === link.href
                  ? "text-white bg-zinc-800"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className="flex items-center gap-1 px-4 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800/50 transition-all duration-200"
          >
            {t("more")} <ChevronDown size={14} />
          </button>
          <div className="w-px h-5 bg-zinc-700 mx-1" />
          <Link
            href="/contact"
            className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 ${
              pathname === "/contact"
                ? "text-white bg-zinc-800"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
            }`}
          >
            {t("bookACall")}
          </Link>
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLocaleMenuOpen(!localeMenuOpen)}
              aria-expanded={localeMenuOpen}
              aria-haspopup="true"
              aria-label="Switch language"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200 text-sm"
            >
              <Globe size={14} />
              {localeLabels[locale] || locale}
            </button>
            {localeMenuOpen && (
              <div className="absolute right-0 top-full mt-1 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl overflow-hidden min-w-[100px]">
                {routing.locales.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => switchLocale(loc)}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      loc === locale
                        ? "text-white bg-zinc-800"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    {localeLabels[loc] || loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Command palette trigger */}
          <button
            type="button"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all duration-200"
          >
            <Command size={16} />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900/98 backdrop-blur-xl border-t border-zinc-800 p-6 shadow-2xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-white bg-zinc-800"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-zinc-800 my-2" />
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-lg transition-colors ${
                pathname === "/contact"
                  ? "text-white bg-zinc-800"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              {t("bookACall")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
