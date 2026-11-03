import Link from "next/link";

import Container from "@/components/ui/Container";
import { buttonClass } from "@/components/ui/button-styles";
import { company } from "@/data/site";

export default function TopBar() {
  return (
    <div className="bg-deep text-[14px] text-[#d3d9e0]">
      <Container className="flex items-center justify-between gap-[10px] py-2 phone:justify-center">
        <span>
          Call Us:{" "}
          <a href={company.phoneHref} className="font-bold text-white no-underline">
            {company.phone}
          </a>
        </span>
        <Link href="/contact" className={buttonClass("primary", "tablet:hidden")}>
          Get a Free Quote
        </Link>
      </Container>
    </div>
  );
}
