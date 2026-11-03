import Link from "next/link";

import Container from "@/components/ui/Container";
import { buttonClass } from "@/components/ui/button-styles";

export default function IntroBand() {
  return (
    <div className="bg-navy-gradient pb-20 pt-[34px] text-[#dfe5ec] tablet:pb-[68px] tablet:pt-[26px]">
      <Container className="flex flex-wrap items-center justify-between gap-[30px]">
        <p className="max-w-[46em]">
          SuperTech Engineering Corporation, based in Yamuna Nagar, Haryana, has over 50
          years of experience manufacturing heavy pressure components, precision-machined
          parts, hydraulic press components and customised engineering solutions.
        </p>
        <Link href="/contact" className={buttonClass()}>
          Get a Free Quote
        </Link>
      </Container>
    </div>
  );
}
