import Carousel from "@/components/Carousel";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProofStrip />
      <Features />
      <Carousel />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </div>
  );
}
