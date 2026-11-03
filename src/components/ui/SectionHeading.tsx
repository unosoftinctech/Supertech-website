import type { ReactNode } from "react";

type Props = {
  label: string;
  title: string;
  /** Optional intro paragraph below the title. */
  intro?: ReactNode;
};

/** Small blue label + big uppercase title (+ optional intro text). */
export default function SectionHeading({ label, title, intro }: Props) {
  return (
    <>
      <span className="mb-[10px] block font-body text-[13px] font-extrabold uppercase leading-[normal] tracking-[.2em] text-brand">
        {label}
      </span>
      <h2 className="mb-[14px] text-[clamp(34px,5vw,56px)] text-navy">{title}</h2>
      {intro ? <p className="max-w-[44em] text-[#4a5872]">{intro}</p> : null}
    </>
  );
}
