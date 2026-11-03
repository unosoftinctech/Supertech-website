import Link from "next/link";

import Container from "@/components/ui/Container";
import { buttonClass } from "@/components/ui/button-styles";
import { company } from "@/data/site";

export default function CtaBanner() {
  return (
    <div className="bg-navy-gradient py-[54px] text-white">
      <Container className="flex flex-wrap items-center justify-between gap-[26px] tablet:flex-col tablet:items-start">
        <div>
          <h2 className="mb-2 text-[clamp(30px,4.4vw,48px)]">
            Have a Drawing or Component Requirement?
          </h2>
          <p className="max-w-[38em] text-[#d3d9e0]">
            Share your technical drawing with the required quantity, material
            specifications and application details to receive a quotation. Call us on{" "}
            {company.phone}.
          </p>
        </div>
        <Link href="/contact" className={buttonClass("light")}>
          Submit Your Drawing
        </Link>
      </Container>
    </div>
  );
}
