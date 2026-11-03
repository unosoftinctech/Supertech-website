import Link from "next/link";

import { company } from "@/data/site";

type Props = {
  /** White version used on the dark footer. */
  inverse?: boolean;
};

export default function Brand({ inverse = false }: Props) {
  return (
    <Link
      href="/"
      className={`font-display text-[32px] font-black leading-none tracking-[.06em] no-underline phone:text-[28px] ${
        inverse ? "mb-2 block py-[3px] text-white" : "text-navy"
      }`}
    >
      {company.shortName}
      <small
        className={`mt-1 block font-body text-[11.5px] font-extrabold leading-[normal] tracking-[.3em] ${
          inverse ? "text-[#d3d9e0]" : "text-brand"
        }`}
      >
        SINCE {company.since}
      </small>
    </Link>
  );
}
