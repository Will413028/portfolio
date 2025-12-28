'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/libs/I18nNavigation';
import { LocaleSwitcher } from './LocaleSwitcher';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('RootLayout');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-[#282f39] dark:bg-background-dark/90">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-[24px]">terminal</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            DevPortfolio
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            href="/"
          >
            {t('home_link')}
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            href="/portfolio"
          >
            {t('portfolio_link')}
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            href="/resume"
          >
            {t('resume_link')}
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            href="/contact"
          >
            {t('contact_link')}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <LocaleSwitcher />
          </div>

          <button
            type="button"
            className="flex items-center justify-center p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-b border-gray-200 bg-white p-4 dark:border-[#282f39] dark:bg-background-dark md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              {t('home_link')}
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('portfolio_link')}
            </Link>
            <Link
              href="/resume"
              className="text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('resume_link')}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact_link')}
            </Link>
            <div className="mt-2 pt-4 border-t border-gray-100 dark:border-[#282f39]">
              <LocaleSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
