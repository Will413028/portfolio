import AboutSection from "@/components/shared/AboutSection";
import BentoGrid from "@/components/shared/BentoGrid";
import CaseStudies from "@/components/shared/CaseStudies";
import CTASection from "@/components/shared/CTASection";
import Hero from "@/components/shared/Hero";

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
