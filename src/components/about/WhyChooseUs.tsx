import CardGrid from "@/components/ui/CardGrid";
import Container from "@/components/ui/Container";
import InfoCard from "@/components/ui/InfoCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/data/site";

export default function WhyChooseUs() {
  return (
    <Section alt>
      <Container>
        <SectionHeading label="Why Choose Us" title="Why Choose SuperTech" />
        <CardGrid>
          {whyChooseUs.map((item) => (
            <InfoCard key={item.title} title={item.title} text={item.text} left />
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
}
