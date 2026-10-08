import { ArrowRight, FileText, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-32 pb-32 overflow-hidden">
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
        <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-8">
          {t("eyebrow")}
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] mb-8 tracking-tight">
          {t("headline")}
          <br />
          <span className="font-serif italic gradient-text-pink">
            {t("headlineHighlight")}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mb-12 text-lg text-zinc-400 leading-relaxed">
          {t("intro")}
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/#judgments"
            className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-all duration-200 shadow-lg shadow-white/10"
          >
            {t("ctaJudgments")}
            <span className="flex items-center justify-center w-6 h-6 bg-zinc-900 rounded-full">
              <ArrowRight
                size={14}
                className="text-white group-hover:translate-x-0.5 transition-transform"
              />
            </span>
          </Link>

          <Link
            href="/resume"
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
          >
            <FileText size={16} />
            {t("ctaResume")}
          </Link>

          <a
            href="mailto:will413028@gmail.com"
            className="flex items-center gap-2 px-5 py-3 text-zinc-400 hover:text-white transition-colors group"
          >
            <Mail
              size={16}
              className="group-hover:scale-110 transition-transform"
            />
            <span>will413028@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
