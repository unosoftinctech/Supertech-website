import type { ReactNode } from "react";

import CardGrid from "@/components/ui/CardGrid";
import Container from "@/components/ui/Container";
import InfoCard from "@/components/ui/InfoCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/site";

const icons: Record<(typeof processSteps)[number]["icon"], ReactNode> = {
  drawing: (
    <>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M14 3v5h5M9 13h7M9 17h5" />
    </>
  ),
  review: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4M8 11l2 2 4-4" />
    </>
  ),
  delivery: (
    <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19a2 2 0 1 0 0-.1M17 19a2 2 0 1 0 0-.1" />
  ),
};

export default function HowWeWork() {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="How We Work"
          title="From Technical Drawing to Finished Component"
        />
        <CardGrid>
          {processSteps.map((step) => (
            <InfoCard
              key={step.title}
              title={step.title}
              text={step.text}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="mb-3 inline size-[54px] align-baseline fill-none stroke-brand stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"
                >
                  {icons[step.icon]}
                </svg>
              }
            />
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
}
