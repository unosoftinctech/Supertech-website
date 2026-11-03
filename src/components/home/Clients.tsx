import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { clients } from "@/data/site";

// Two copies of the list, doubled again, so the -50% marquee loops seamlessly.
const track = [...clients, ...clients, ...clients, ...clients];

export default function Clients() {
  return (
    <Section alt>
      <Container>
        <SectionHeading
          label="Our Clients"
          title="Trusted by Leading Industries Across India"
        />
        <div className="mt-7 overflow-hidden rounded-lg border border-line bg-white py-5">
          <div className="flex w-max animate-marquee motion-reduce:animate-none">
            {track.map((client, i) => (
              <span
                key={`${client.name}-${i}`}
                className="mx-4 grid h-[84px] w-[200px] flex-none place-items-center overflow-hidden rounded-md border-2 border-line p-2 tablet:mx-[10px] tablet:h-[68px] tablet:w-[150px]"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  className="h-auto max-h-[46px] w-auto max-w-[150px] object-contain tablet:max-h-[38px] tablet:max-w-[116px]"
                />
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
