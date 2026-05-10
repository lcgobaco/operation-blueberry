import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Pillars from "@/components/landing/Pillars";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen paper">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Pillars />
      <CTA />
      <Footer />
    </main>
  );
}
