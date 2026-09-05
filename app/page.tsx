import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import Portfolio from "@/components/Portfolio";
import PressStrip from "@/components/PressStrip";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <Philosophy />
      <ServicesGrid />
      <ProcessTimeline />
      <Portfolio />
      <PressStrip />
      <Testimonials />
      <Stats />
      <ContactForm />
      <Footer />
    </main>
  );
}