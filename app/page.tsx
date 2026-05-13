import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import Stats from "@/components/Stats";
import WhyZynex from "@/components/WhyZynex";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ZynexPortfolio() {
  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-green-500/30 selection:text-green-400">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Courses />
      <WhyZynex />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}