import Image from "next/image";

import Container from "@/components/ui/Container";
import jubilee from "@/assets/images/jubilee.png";

export default function JubileeBadge() {
  return (
    <section className="pt-10">
      <Container className="text-center">
        <Image
          src={jubilee}
          alt="50 years of excellence, since 1975"
          className="inline h-auto w-[min(100%,520px)] align-baseline"
        />
      </Container>
    </section>
  );
}
