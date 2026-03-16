"use client";

import { ArrowRight, Copy } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32 overflow-hidden">
      {/* Stars background - using fixed positions to avoid hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-px h-px bg-white rounded-full opacity-40"
          style={{ left: "10%", top: "15%" }}
        />
        <div
          className="absolute w-px h-px bg-white rounded-full opacity-30"
          style={{ left: "25%", top: "8%" }}
        />
        <div
          className="absolute w-px h-px bg-white rounded-full opacity-50"
          style={{ left: "40%", top: "22%" }}
        />
        <div
          className="absolute w-px h-px bg-white rounded-full opacity-40"
          style={{ left: "55%", top: "5%" }}
        />
        <div
          className="absolute w-px h-px bg-white rounded-full opacity-30"
          style={{ left: "70%", top: "18%" }}
        />
        <div
          className="absolute w-px h-px bg-white rounded-full opacity-50"
          style={{ left: "85%", top: "12%" }}
        />
        <div
          className="absolute w-px h-px bg-white rounded-full opacity-40"
          style={{ left: "15%", top: "35%" }}
        />
        <div
          className="absolute w-px h-px bg-white rounded-full opacity-30"
          style={{ left: "33%", top: "42%" }}
        />
        <div
          className="absolute w-px h-px bg-white rounded-full opacity-50"
          style={{ left: "60%", top: "38%" }}
        />
        <div
          className="absolute w-px h-px bg-white rounded-full opacity-40"
          style={{ left: "78%", top: "45%" }}
        />
        <div
          className="absolute w-px h-px bg-white rounded-full opacity-30"
          style={{ left: "92%", top: "28%" }}
        />
        <div
          className="absolute w-px h-px bg-white rounded-full opacity-50"
          style={{ left: "5%", top: "55%" }}
        />
      </div>

      {/* Planet glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-80 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px]">
          {/* Outer glow */}
          <div className="absolute bottom-[-200px] left-0 right-0 h-[400px] bg-gradient-to-t from-cyan-500/10 via-sky-600/5 to-transparent rounded-[100%] blur-3xl" />
          {/* Main planet curve */}
          <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[120%] h-[350px] bg-gradient-to-t from-sky-400/40 via-cyan-500/20 to-transparent rounded-[100%]" />
          {/* Bright edge */}
          <div className="absolute bottom-[-260px] left-1/2 -translate-x-1/2 w-[115%] h-[340px] border-t border-cyan-400/50 rounded-[100%]" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Announcement banner */}
        <div className="inline-flex items-center gap-2 mb-8 px-1 py-1 bg-zinc-900/60 border border-zinc-800 rounded-full text-sm backdrop-blur-sm hover:border-zinc-700 transition-colors cursor-pointer group">
          <span className="px-2.5 py-0.5 bg-emerald-500 text-black text-xs font-semibold rounded-full">
            {t("badge")}
          </span>
          <span className="text-zinc-300 pr-2">{t("badgeText")}</span>
          <ArrowRight
            size={14}
            className="text-zinc-400 mr-2 group-hover:translate-x-0.5 transition-transform"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] mb-8 tracking-tight">
          {t("headline1")}
          <br />
          {t("headline2")}{" "}
          <span className="font-serif italic gradient-text-pink">
            {t("headlineHighlight")}
          </span>
        </h1>

        {/* Subtitle with avatars */}
        <div className="flex items-center justify-center gap-3 mb-12 text-lg text-zinc-400 flex-wrap">
          <span>{t("greeting")}</span>
          <div className="flex -space-x-1">
            <Image
              src="https://ext.same-assets.com/4210891837/1148079469.webp"
              alt="Avatar"
              width={36}
              height={36}
              className="w-9 h-9 rounded-full border-2 border-zinc-900 object-cover"
            />
            <div className="w-9 h-9 rounded-full border-2 border-zinc-900 bg-gradient-to-br from-sky-400 via-cyan-500 to-teal-500 flex items-center justify-center overflow-hidden">
              <Image
                src="https://ext.same-assets.com/4210891837/419887552.svg"
                alt="Avatar pattern"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span>{t("role")}</span>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            type="button"
            className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-all duration-200 shadow-lg shadow-white/10"
          >
            {t("cta")}
            <span className="flex items-center justify-center w-6 h-6 bg-zinc-900 rounded-full">
              <ArrowRight
                size={14}
                className="text-white group-hover:translate-x-0.5 transition-transform"
              />
            </span>
          </button>

          <button
            type="button"
            className="flex items-center gap-2 px-5 py-3 text-zinc-400 hover:text-white transition-colors group"
          >
            <Copy
              size={16}
              className="group-hover:scale-110 transition-transform"
            />
            <span>hello@aayushbharti.in</span>
          </button>
        </div>
      </div>
    </section>
  );
}
