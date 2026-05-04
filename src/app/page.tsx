"use client";

import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import PainsMarquee from "@/components/landing/PainsMarquee";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import StepsSection from "@/components/landing/StepsSection";
import AudienceSection from "@/components/landing/AudienceSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import ValueSection from "@/components/landing/ValueSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FaqSection from "@/components/landing/FaqSection";
import FinalCta from "@/components/landing/FinalCta";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";
import Footer from "@/components/landing/Footer";
import InActionSection from "@/components/landing/InActionSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 font-sans text-neutral-900 antialiased">
      <Header />
      <Hero />
      <PainsMarquee />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <InActionSection />
      <IntegrationsSection />
      <StepsSection />
      <AudienceSection />
      <ComparisonSection />
      <ValueSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
