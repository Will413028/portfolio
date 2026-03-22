"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");

  const generalLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("projects"), href: "/work" },
  ];

  const specificsLinks = [
    { label: t("bookACall"), href: "/contact" },
    { label: t("rss"), href: "/feed.xml", external: true },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/will413028",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/will4130/",
    },
  ];

  return (
    <footer className="px-6 py-16 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                <span className="text-lg font-bold">WW</span>
              </div>
            </div>
            <p className="text-sm text-zinc-500">{t("brand")}</p>
          </div>

          {/* General */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              {t("general")}
            </h4>
            <ul className="space-y-2">
              {generalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifics */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              {t("specifics")}
            </h4>
            <ul className="space-y-2">
              {specificsLinks.map((link) =>
                "external" in link ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              {t("more")}
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; 2026 <span className="text-zinc-300">Will Wu</span>.{" "}
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
