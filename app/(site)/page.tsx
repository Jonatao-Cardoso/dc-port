import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "DataCloud | Portifólio ",
  description: "Portifólio de DataCloud - Contabilidade Digital",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <FeaturesTab />
      <About />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Contact />
    </main>
  );
}
