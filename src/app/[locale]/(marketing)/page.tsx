import type { Metadata } from "next";
import AboutSection from "@/components/shared/AboutSection";
import BentoGrid from "@/components/shared/BentoGrid";
import CaseStudies from "@/components/shared/CaseStudies";
import CTASection from "@/components/shared/CTASection";
import Hero from "@/components/shared/Hero";

export const metadata: Metadata = {
  title: {
    absolute: "Will Wu — Senior Backend Engineer | Python, Go & TypeScript",
  },
  description:
    "Senior Backend Engineer building scalable production systems — 2M+ MAU platforms, zero-downtime migrations, 80% latency cuts. Available for full-time roles and freelance backend / infrastructure projects. Based in Taiwan.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Hero />
      <BentoGrid />
      <CaseStudies />
      <AboutSection />
      <CTASection />
    </main>
  );
}
