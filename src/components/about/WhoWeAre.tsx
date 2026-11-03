import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import aboutCnc from "@/assets/images/about-cnc.jpg";

export default function WhoWeAre() {
  return (
    <Section>
      <Container className="grid grid-cols-[1fr_1fr] items-center gap-[46px] tablet:grid-cols-1">
        <div>
          <span className="mb-[10px] block font-body text-[13px] font-extrabold uppercase leading-[normal] tracking-[.2em] text-brand">
            Who We Are
          </span>
          <h2 className="mb-[14px] text-[clamp(34px,5vw,56px)] text-navy">
            Five Decades of Engineering Expertise
          </h2>
          <p>
            Supertech Engineering Corporation is a precision engineering company based
            in Yamuna Nagar, Haryana, with more than 50 years of industry expertise in
            manufacturing high-quality engineering components. We specialise in heavy
            pressure components, precision-machined parts, hydraulic press components,
            and customised engineering solutions designed to meet demanding industrial
            requirements.
          </p>
          <p className="mt-3">
            We work closely with our customers to understand their technical
            specifications, drawings, dimensional requirements, and application needs,
            combining practical engineering knowledge with a commitment to precision,
            consistency, and dependable product quality.
          </p>
          <p className="mt-3">
            From individual custom-engineered components to specialised industrial
            requirements, we aim to provide practical, reliable, and cost-effective
            manufacturing solutions.
          </p>
        </div>
        <div className="relative">
          <Image
            src={aboutCnc}
            alt="CNC machining at SuperTech"
            className="block h-auto w-full rounded-lg shadow-[0_20px_50px_rgba(4,18,48,.25)]"
          />
        </div>
      </Container>
    </Section>
  );
}
