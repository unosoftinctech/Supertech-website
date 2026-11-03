"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { buttonClass } from "@/components/ui/button-styles";
import { services } from "@/data/site";

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <Section alt>
      <Container>
        <SectionHeading
          label="Custom Engineering Services"
          title="All Your Engineering Needs, One Trusted Partner"
        />

        <div className="mt-[30px] grid grid-cols-[300px_1fr] gap-[26px] tablet:grid-cols-1">
          <div className="flex flex-col gap-[6px] tablet:flex-row tablet:gap-2 tablet:overflow-x-auto tablet:pb-[6px]">
            {services.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setActive(i)}
                className={`cursor-pointer rounded-[4px] border px-4 py-[14px] text-left font-body text-[14.5px] font-bold leading-[normal] tablet:min-h-[44px] tablet:flex-none tablet:whitespace-nowrap ${
                  i === active
                    ? "border-navy bg-navy text-white"
                    : "border-line bg-white text-navy"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-[1fr_1fr] items-center gap-6 rounded-lg border border-line bg-white p-6 tablet:grid-cols-1 tablet:p-[18px]">
            <div>
              <h3 className="mb-2 text-[32px] text-navy">{current.title}</h3>
              <p>{current.text}</p>
              <p className="mt-4">
                <Link href="/contact" className={buttonClass()}>
                  Get a Free Quote
                </Link>
              </p>
            </div>
            <Image
              src={current.image}
              alt={current.title}
              sizes="(max-width: 860px) 100vw, 450px"
              className="h-[240px] w-full object-contain tablet:h-[200px]"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
