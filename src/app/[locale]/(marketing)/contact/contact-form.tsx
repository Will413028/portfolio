"use client";

import { Loader2, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

type Intent = "hiring" | "project";

export default function ContactForm() {
  const t = useTranslations("contactPage");
  const [intent, setIntent] = useState<Intent>("project");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");
    try {
      const tag = intent === "hiring" ? "Hiring" : "Project";
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message: `[${tag}] ${formData.message}`,
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    }
  };

  const tabBase =
    "px-4 py-3 rounded-xl text-sm font-medium border transition-colors";
  const active = "bg-white text-black border-white";
  const idle =
    "bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-zinc-500";

  return (
    <section className="px-6 pb-20 max-w-2xl mx-auto">
      {/* Intent toggle — split the door by what the visitor wants */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <button
          type="button"
          onClick={() => setIntent("hiring")}
          aria-pressed={intent === "hiring"}
          className={`${tabBase} ${intent === "hiring" ? active : idle}`}
        >
          {t("intentHiring")}
        </button>
        <button
          type="button"
          onClick={() => setIntent("project")}
          aria-pressed={intent === "project"}
          className={`${tabBase} ${intent === "project" ? active : idle}`}
        >
          {t("intentProject")}
        </button>
      </div>
      <p className="text-sm text-zinc-500 mb-8 text-center">
        {intent === "hiring" ? t("hiringHint") : t("projectHint")}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">
              {t("nameLabel")}
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
              placeholder={t("namePlaceholder")}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
              {t("emailLabel")}
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
              placeholder={t("emailPlaceholder")}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
            {t("messageLabel")}
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={5}
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
            placeholder={t("messagePlaceholder")}
            required
          />
        </div>
        <button
          type="submit"
          disabled={submitStatus === "loading"}
          className="w-full py-4 bg-white text-black font-medium rounded-xl hover:bg-zinc-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitStatus === "loading" && (
            <Loader2 size={18} className="animate-spin" />
          )}
          {t("sendMessageButton")}
        </button>
        {submitStatus === "success" && (
          <p
            role="status"
            aria-live="polite"
            className="text-emerald-400 text-sm text-center"
          >
            {t("messageSent")}
          </p>
        )}
        {submitStatus === "error" && (
          <p
            role="status"
            aria-live="polite"
            className="text-red-400 text-sm text-center"
          >
            {t("messageError")}
          </p>
        )}
      </form>

      <p className="text-center text-sm text-zinc-500 mt-8">
        {t("orEmail")}{" "}
        <a
          href="mailto:will413028@gmail.com"
          className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300"
        >
          <Mail size={14} />
          will413028@gmail.com
        </a>
      </p>
    </section>
  );
}
