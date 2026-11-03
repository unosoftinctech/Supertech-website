import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { buttonClass } from "@/components/ui/button-styles";
import { aboutChecklist } from "@/data/site";
import aboutHome from "@/assets/images/about-home.jpg";

export default function AboutPreview() {
  return (
    <Section alt>
      <Container className="grid grid-cols-[1fr_1fr] items-center gap-[46px] tablet:grid-cols-1">
        <div className="relative">
          <Image
            src={aboutHome}
            alt="Engineer operating a CNC lathe at SuperTech"
            className="block h-auto w-full rounded-lg shadow-[0_20px_50px_rgba(4,18,48,.25)]"
          />
          <b className="absolute -bottom-[18px] -right-3 rounded-md bg-navy px-[22px] py-[14px] font-display text-[40px] font-black leading-none text-white tablet:-bottom-[14px] tablet:right-[6px] tablet:px-4 tablet:py-[10px] tablet:text-[30px]">
            50+
            <small className="block font-body text-[11px] font-bold leading-[normal] tracking-[.14em]">
              YEARS OF EXPERIENCE
            </small>
          </b>
        </div>

        <div>
          <span className="mb-[10px] block font-body text-[13px] font-extrabold uppercase leading-[normal] tracking-[.2em] text-brand">
            About SuperTech
          </span>
          <h2 className="mb-[14px] text-[clamp(34px,5vw,56px)] text-navy">
            Driven by Engineering, Built on Trust
          </h2>
          <p>
            With over five decades in precision engineering, we understand complex
            industrial manufacturing requirements. We work closely with customers to
            understand their drawings, dimensions and application needs.
          </p>
          <ul className="mb-[22px] mt-[18px] grid gap-[9px]">
            {aboutChecklist.map((item) => (
              <li
                key={item}
                className="relative pl-7 font-medium before:absolute before:left-0 before:top-[7px] before:size-[13px] before:bg-brand before:[clip-path:polygon(0_50%,35%_85%,100%_15%,85%_0,35%_55%,15%_35%)] before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
          <Link href="/about" className={buttonClass()}>
            Learn More
          </Link>
        </div>
      </Container>
    </Section>
  );
}
