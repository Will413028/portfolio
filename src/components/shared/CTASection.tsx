"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("cta");
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-cyan-400 via-sky-500 to-cyan-500 p-12 md:p-16">
        {/* Decorative wings */}
        <div className="absolute left-4 md:left-12 top-1/4 opacity-30">
          <svg
            width="120"
            height="60"
            viewBox="0 0 120 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 30C40 30 20 15 0 5C20 20 40 35 60 30Z"
              fill="white"
              fillOpacity="0.5"
            />
            <path
              d="M60 30C40 35 20 50 0 55C20 45 40 30 60 30Z"
              fill="white"
              fillOpacity="0.3"
            />
          </svg>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-zinc-900/90 backdrop-blur flex items-center justify-center shadow-2xl border border-zinc-700">
            <svg
              width="28"
              height="28"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          </div>
        </div>

        {/* Open to Work spinning badge */}
        <div className="absolute right-4 md:right-16 top-1/4 md:top-1/3">
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            {/* Rotating text */}
            <svg
              className="w-full h-full animate-spin-slow"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                />
              </defs>
              <text
                fontSize="9"
                fill="white"
                fontWeight="600"
                letterSpacing="1"
              >
                <textPath href="#circlePath">
                  {t("openToWork")} · {t("openToWork")} ·
                </textPath>
              </text>
            </svg>
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 flex items-center justify-center border-2 border-blue-500">
                <span className="text-white text-lg">✦</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main text */}
        <div className="text-center relative z-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 tracking-tight">
            {t("line1")} <span className="text-zinc-900">{t("line1Highlight")}</span>
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
            {t("line2")} <span className="text-zinc-900">{t("line2Highlight")}</span>
          </h2>

          <button
            type="button"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-all duration-200 shadow-xl mb-8"
          >
            {t("getInTouch")}
            <span className="flex items-center justify-center w-6 h-6 bg-zinc-900 rounded-full">
              <ArrowRight
                size={14}
                className="text-white group-hover:translate-x-0.5 transition-transform"
              />
            </span>
          </button>

          <p className="text-lg md:text-xl font-semibold text-white mb-2">
            {t("availability")}
          </p>
          <p className="text-zinc-800/80 max-w-md mx-auto">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}
