import { Navbar, Footer } from "@/components/Layout";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ParallaxCTA from "@/components/ParallaxCTA";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProcessSection />
      <GallerySection />
      <TestimonialsSection />
      <ParallaxCTA />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
