import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <p>
        {`Follow `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://twitter.com/ixartz"
          target="_blank"
          rel="noreferrer noopener"
        >
          @Ixartz on Twitter
        </a>
        {` for updates and more information about the boilerplate.`}
      </p>
      <h2 className="mt-5 text-2xl font-bold">
        Boilerplate Code for Your Next.js Project with Tailwind CSS
      </h2>
      <p className="text-base">
        Next.js Boilerplate is a developer-friendly starter code for Next.js projects, built with
        Tailwind CSS and TypeScript.{' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>{' '}
        Designed with developer experience in mind, it includes:
      </p>
      <ul className="mt-3 text-base">
        <li>🚀 Next.js with App Router support</li>
        <li>🔥 TypeScript for type checking</li>
        <li>💎 Tailwind CSS integration</li>
        <li>
          🔒 Authentication with{' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://clerk.com?utm_source=github&amp;utm_medium=sponsorship&amp;utm_campaign=nextjs-boilerplate"
          >
            Clerk
          </a>{' '}
          (includes passwordless, social, and multi-factor auth)
        </li>
        <li>🔴 Form handling (React Hook Form) and validation (Zod)</li>
        <li>📏 Linting and formatting (ESLint, Prettier)</li>
        <li>🦊 Git hooks and commit linting (Husky, Commitlint)</li>
        <li>🦺 Testing suite (Vitest, React Testing Library, Playwright)</li>
        <li>🎉 Storybook for UI development</li>
        <li>
          🐰 AI-powered code reviews with{' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025"
          >
            CodeRabbit
          </a>
        </li>
        <li>Logging with LogTape, an alternative to Pino.js</li>

        <li>🤖 SEO optimization (metadata, JSON-LD, Open Graph tags)</li>
        <li>⚙️ Development tools (VSCode config, bundler analyzer, changelog generation)</li>
      </ul>
    </>
  );
}
