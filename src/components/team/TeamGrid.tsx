import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { team } from "@/data/team";

export default function TeamGrid() {
  return (
    <Section>
      <Container>
        <div className="flex flex-wrap gap-[26px]">
          {team.map((member) => (
            <div
              key={member.name}
              className="w-80 max-w-full rounded-lg border border-line bg-white p-8 text-center"
            >
              <Image
                src={member.photo}
                alt={`${member.name}, ${member.role}`}
                className="mb-4 block aspect-square h-auto w-full rounded-lg object-cover object-top"
              />
              <h3 className="text-[30px] text-navy">{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
