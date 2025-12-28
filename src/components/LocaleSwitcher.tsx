'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { usePathname } from '@/libs/I18nNavigation';
import { routing } from '@/libs/I18nRouting';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleToggle = (newLocale: string) => {
    if (newLocale === locale) return;
    router.push(`/${newLocale}${pathname}`);
    router.refresh();
  };

  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-gray-50/50 p-1 dark:border-[#282f39] dark:bg-background-dark/50">
      {routing.locales.map((elt) => (
        <button
          key={elt}
          type="button"
          onClick={() => handleToggle(elt)}
          className={`px-3 py-1.5 text-xs font-bold transition-all rounded-md ${
            locale === elt
              ? 'bg-white text-primary shadow-sm dark:bg-[#282f39] dark:text-white'
              : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
          }`}
        >
          {elt === 'en' ? 'EN' : '中文'}
        </button>
      ))}
    </div>
  );
};
