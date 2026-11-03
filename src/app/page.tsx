import type { Metadata } from "next";

import AboutPreview from "@/components/home/AboutPreview";
import Clients from "@/components/home/Clients";
import CtaBanner from "@/components/home/CtaBanner";
import FeatureCards from "@/components/home/FeatureCards";
import Hero from "@/components/home/Hero";
import HowWeWork from "@/components/home/HowWeWork";
import Industries from "@/components/home/Industries";
import IntroBand from "@/components/home/IntroBand";
import JubileeBadge from "@/components/home/JubileeBadge";
import ProductsPreview from "@/components/home/ProductsPreview";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroBand />
      <FeatureCards />
      <JubileeBadge />
      <ProductsPreview />
      <AboutPreview />
      <HowWeWork />
      <Services />
      <Industries />
      <Clients />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
