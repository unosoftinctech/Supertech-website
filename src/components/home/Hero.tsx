import Image from "next/image";

import Container from "@/components/ui/Container";
import jubilee from "@/assets/images/jubilee.png";

export default function Hero() {
  return (
    <div className="relative h-[min(64vh,560px)] overflow-hidden bg-deep tablet:h-[56vh] tablet:min-h-[300px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/videos/hero.mp4"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <Image
        src={jubilee}
        alt="50 years, since 1975"
        priority
        className="absolute right-[14px] top-[14px] aspect-[1089/615] h-auto w-[170px] object-cover object-top drop-shadow-[0_4px_12px_rgba(0,0,0,.5)] phone:right-2 phone:top-2 phone:w-24"
      />

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-b from-transparent to-[rgba(4,18,48,.62)] pb-[26px] pt-[70px] text-white phone:pt-[50px]">
        <Container>
          <h1 className="text-[clamp(34px,6vw,70px)] [text-shadow:0_2px_12px_rgba(0,0,0,.5)]">
            Specialist in Precision Engineering
          </h1>
          <p className="mt-2 text-[clamp(14px,1.6vw,19px)] [text-shadow:0_1px_6px_#000]">
            SuperTech Engineering Corporation. Precision Engineering. Trusted Performance.
          </p>
        </Container>
      </div>
    </div>
  );
}
