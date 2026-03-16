"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("aboutSection");
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
            {t("label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
            {t("title1")}
            <br />
            {t("title2")}
            <br />
            <span className="gradient-text-pink">{t("titleHighlight")}</span>
          </h2>

          <div className="space-y-4 text-zinc-400 mb-8">
            <p>{t("bio1")}</p>
            <p>{t("bio2")}</p>
            <p>{t("bio3")}</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 mb-6">
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <button
            type="button"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <span className="uppercase tracking-[0.2em]">
              {t("workExperience")}
            </span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Right: Logo */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center shadow-2xl overflow-hidden">
              {/* SVG Logo */}
              <svg
                width="180"
                height="180"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-56 md:h-56"
              >
                <path
                  d="M100 30L170 170H30L100 30Z"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M100 70L140 170H60L100 70Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M60 130H140" stroke="white" strokeWidth="2" />
              </svg>

              {/* Grid lines overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
                <div className="absolute left-2/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
                <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
                <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
                <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
                <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
