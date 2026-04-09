import { Navbar, Footer } from "@/components/Layout";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ParallaxCTA from "@/components/ParallaxCTA";
import ContactSection from "@/components/ContactSection";
import LocationsGrid from "@/components/LocationsGrid";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEOHead
        title="Photovoltaik & Wärmepumpe Kirchheim | Marklewitz Solar"
        description="Photovoltaik, Wärmepumpen & Stromspeicher in Kirchheim unter Teck, Owen, Nürtingen & Esslingen. ✓ Komplettservice ✓ Angebot in 24h. Jetzt kostenlos beraten lassen!"
        canonical="https://www.marklewitz-solar.de/"
        keywords="Photovoltaik Kirchheim unter Teck, Wärmepumpe Kirchheim, Solaranlage Owen, PV-Anlage Nürtingen, Marklewitz Solar"
      />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <ProcessSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationsGrid />
        <FAQSection />
        <ParallaxCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
