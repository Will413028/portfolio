import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import CTASection from "@/components/shared/CTASection";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Will Wu — Senior Backend Engineer. Hiring for a backend role, or have a freelance project? Send a message or email directly. Based in Taiwan.",
};

export default function ContactPage() {
  const t = useTranslations("contactPage");

  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <section className="px-6 pt-32 pb-8 max-w-4xl mx-auto text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500 mb-5">
          {t("label")}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium leading-tight">
          {t("titlePrefix")}{" "}
          <span className="gradient-text-pink font-serif italic">
            {t("titleHighlight")}
          </span>
        </h1>
        <p className="mt-6 text-zinc-400 max-w-xl mx-auto">{t("intro")}</p>
      </section>

      <ContactForm />
      <CTASection />
    </main>
  );
}
