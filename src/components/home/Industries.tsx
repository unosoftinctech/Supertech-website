import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/data/site";

export default function Industries() {
  return (
    <Section>
      <Container>
        <SectionHeading label="Industries We Serve" title="Trusted Across Industrial Sectors" />
        <div className="mt-6 flex flex-wrap gap-3">
          {industries.map((name) => (
            <span
              key={name}
              className="rounded-[40px] border border-steel bg-white px-5 py-[11px] text-[15px] font-medium"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="mt-[14px] text-[14px] italic text-[#5b6678]">
          Specific applications and suitability depend on the component design and
          technical requirements.
        </p>
      </Container>
    </Section>
  );
}
