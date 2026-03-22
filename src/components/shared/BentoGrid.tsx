"use client";

import { Copy } from "lucide-react";
import { useTranslations } from "next-intl";

const techStack = [
  { name: "Python" },
  { name: "FastAPI" },
  { name: "Go" },
  { name: "Gin" },
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Flask" },
];

const techStack2 = [
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "Redis" },
  { name: "RabbitMQ" },
  { name: "MariaDB" },
  { name: "Qdrant" },
  { name: "BigQuery" },
  { name: "Docker" },
];

const techStack3 = [
  { name: "GCP" },
  { name: "AWS" },
  { name: "Terraform" },
  { name: "Ansible" },
  { name: "GitLab CI" },
  { name: "Git" },
  { name: "Google ADK" },
  { name: "Tauri" },
];

const timezones = [
  { city: "Tokyo", code: "JP" },
  { city: "Taipei", code: "TW", active: true },
  { city: "New York", code: "USA" },
];

export default function BentoGrid() {
  const t = useTranslations("bento");
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Collaboration Card - spans 2 columns on lg */}
        <div className="lg:col-span-2 card-glow bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-zinc-700 transition-colors">
          <div className="relative mb-6">
            {/* Decorative curved lines */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-16 h-32 border-l-2 border-t-2 border-b-2 border-cyan-500/30 rounded-l-full" />
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-16 h-32 border-r-2 border-t-2 border-b-2 border-cyan-500/30 rounded-r-full" />
            <div className="w-24 h-24 rounded-full border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/10 bg-gradient-to-br from-sky-400 via-cyan-500 to-teal-500 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">WW</span>
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
            {t("collaborationLabel")}
          </p>
          <p className="text-xl text-zinc-200">{t("collaborationText")}</p>
        </div>

        {/* Tech Stack Card */}
        <div className="row-span-2 card-glow bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 overflow-hidden hover:border-zinc-700 transition-colors">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2 text-center">
            {t("techStackLabel")}
          </p>
          <p className="text-lg text-zinc-200 text-center mb-6">
            {t("techStackText")}
          </p>

          {/* Marquee rows */}
          <div className="space-y-3 overflow-hidden">
            <div className="flex gap-2 animate-marquee">
              {techStack.map((tech) => (
                <div
                  key={`${tech.name}-a`}
                  className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/80 rounded-full whitespace-nowrap border border-zinc-700/50"
                >
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">
                      {tech.name[0]}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-300">{tech.name}</span>
                </div>
              ))}
              {techStack.map((tech) => (
                <div
                  key={`${tech.name}-b`}
                  className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/80 rounded-full whitespace-nowrap border border-zinc-700/50"
                >
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">
                      {tech.name[0]}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-300">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 animate-marquee-reverse">
              {techStack2.map((tech) => (
                <div
                  key={`${tech.name}-a`}
                  className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/80 rounded-full whitespace-nowrap border border-zinc-700/50"
                >
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">
                      {tech.name[0]}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-300">{tech.name}</span>
                </div>
              ))}
              {techStack2.map((tech) => (
                <div
                  key={`${tech.name}-b`}
                  className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/80 rounded-full whitespace-nowrap border border-zinc-700/50"
                >
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">
                      {tech.name[0]}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-300">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 animate-marquee">
              {techStack3.map((tech) => (
                <div
                  key={`${tech.name}-a`}
                  className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/80 rounded-full whitespace-nowrap border border-zinc-700/50"
                >
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">
                      {tech.name[0]}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-300">{tech.name}</span>
                </div>
              ))}
              {techStack3.map((tech) => (
                <div
                  key={`${tech.name}-b`}
                  className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/80 rounded-full whitespace-nowrap border border-zinc-700/50"
                >
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">
                      {tech.name[0]}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Browser mockup */}
          <div className="mt-6 bg-zinc-800/80 rounded-xl p-4 border border-zinc-700/50">
            <div className="flex gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
            </div>
            <div className="text-center py-6">
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-bold">Q</span>
              </div>
              <p className="text-sm font-semibold text-white">
                {t("builtToPerform")}
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                {t("builtToPerformSub")}
              </p>
            </div>
          </div>
        </div>

        {/* Timezone Card */}
        <div className="card-glow bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
          <p className="text-xl text-zinc-200 text-center mb-1">
            {t("flexibleWithTime")}
          </p>
          <p className="text-xl font-serif italic gradient-text-pink text-center mb-6">
            {t("zoneCommunications")}
          </p>

          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {timezones.map((tz) => (
              <div
                key={tz.code}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                  tz.active
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
                }`}
              >
                <span className="text-lg">
                  {tz.code === "JP" ? "🇯🇵" : tz.code === "TW" ? "🇹🇼" : "🇺🇸"}
                </span>
                {tz.code}
              </div>
            ))}
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1 text-center">
            {t("timezoneLabel")}
          </p>
          <p className="text-lg text-zinc-200 text-center">{t("basedIn")}</p>
        </div>

        {/* CTA Card */}
        <div className="card-glow bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-zinc-700 transition-colors">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center mb-4 border border-zinc-600 shadow-lg">
            <span className="text-xl font-bold text-white">WW</span>
          </div>
          <p className="text-xl text-zinc-200 text-center">
            {t("letsWorkTogether")}
          </p>
          <p className="text-xl font-serif italic gradient-text-pink text-center mb-6">
            {t("onYourNextProject")}
          </p>

          <button
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 border border-zinc-700 rounded-full text-sm text-zinc-300 hover:text-white hover:border-zinc-600 transition-all"
          >
            <Copy size={14} />
            will413028@gmail.com
          </button>
        </div>
      </div>
    </section>
  );
}
