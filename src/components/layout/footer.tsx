"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations('footer');

  const generalLinks = [
    { label: t('home'), href: "/" },
    { label: t('about'), href: "/about" },
    { label: t('projects'), href: "/work" },
    { label: t('blog'), href: "/blog" },
  ];

  const specificsLinks = [
    { label: t('guestBook'), href: "/guestbook" },
    { label: t('bucketList'), href: "/bucket-list" },
    { label: t('uses'), href: "/uses" },
    { label: t('attribution'), href: "/attribution" },
  ];

  const moreLinks = [
    { label: t('bookACall'), href: "/contact" },
    { label: t('links'), href: "/links" },
    { label: t('rss'), href: "/rss" },
    { label: t('privacy'), href: "/privacy" },
    { label: t('terms'), href: "/terms" },
  ];
  return (
    <footer className="px-6 py-16 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                <span className="text-lg font-bold">AB</span>
              </div>
            </div>
            <p className="text-sm text-zinc-500">
              {t('brand')}
            </p>
          </div>

          {/* General */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              {t('general')}
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
              {t('specifics')}
            </h4>
            <ul className="space-y-2">
              {specificsLinks.map((link) => (
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

          {/* More */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              {t('more')}
            </h4>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
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
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © 2026 <span className="text-zinc-300">Aayush Bharti</span>.{" "}
            {t('copyright')}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {t('privacyPolicy')}
            </Link>
            <Link
              href="/terms"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {t('termsOfUse')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
