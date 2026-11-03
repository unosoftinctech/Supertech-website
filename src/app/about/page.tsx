import type { Metadata } from "next";

import Commitment from "@/components/about/Commitment";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import PageBanner from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "About Us",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" subtitle="Over five decades of engineering expertise." />
      <WhoWeAre />
      <WhyChooseUs />
      <Commitment />
    </>
  );
}
