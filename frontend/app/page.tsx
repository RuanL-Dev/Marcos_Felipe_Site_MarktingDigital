import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AboutSection } from "@/sections/about-section";
import { CtaSection } from "@/sections/cta-section";
import { HeroSection } from "@/sections/hero-section";
import { LeadSection } from "@/sections/lead-section";
import { PortfolioSection } from "@/sections/portfolio-section";
import { ServicesSection } from "@/sections/services-section";
import { TestimonialsSection } from "@/sections/testimonials-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
      <LeadSection />
      <Footer />
    </main>
  );
}
