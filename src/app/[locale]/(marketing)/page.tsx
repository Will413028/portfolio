import type { Metadata } from "next";
import CareerLine from "@/components/shared/CareerLine";
import CaseStudies from "@/components/shared/CaseStudies";
import Closing from "@/components/shared/Closing";
import Hero from "@/components/shared/Hero";
import ImpactStats from "@/components/shared/ImpactStats";
import Judgments from "@/components/shared/Judgments";

export const metadata: Metadata = {
  title: {
    absolute: "Will Wu — Senior Backend Engineer | Python, Go & TypeScript",
  },
  description:
    "Will Wu, senior backend engineer in Taipei. Production systems in Python, Go and TypeScript — a 2M+ MAU content platform, enterprise on-prem AI, zero-downtime migrations — with every claim linked to evidence and engineering calls dated in public.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Hero />
      <ImpactStats />
      <CareerLine />
      <CaseStudies />
      <Judgments />
      <Closing />
    </main>
  );
}
