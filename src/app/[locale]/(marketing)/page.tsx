import AboutSection from "@/components/shared/AboutSection";
import BentoGrid from "@/components/shared/BentoGrid";
import CaseStudies from "@/components/shared/CaseStudies";
import CTASection from "@/components/shared/CTASection";
import ExploreSection from "@/components/shared/ExploreSection";
import Hero from "@/components/shared/Hero";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Hero />
      <BentoGrid />
      <CaseStudies />
      <AboutSection />
      <Testimonials />
      <ExploreSection />
      <CTASection />
    </main>
  );
}
