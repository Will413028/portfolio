import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import CaseStudies from "@/components/CaseStudies";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import ExploreSection from "@/components/ExploreSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Navigation />
      <Hero />
      <BentoGrid />
      <CaseStudies />
      <AboutSection />
      <Testimonials />
      <ExploreSection />
      <CTASection />
      <Footer />
    </main>
  );
}
