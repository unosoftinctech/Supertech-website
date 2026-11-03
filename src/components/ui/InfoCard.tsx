import type { ReactNode } from "react";

type Props = {
  title: string;
  text: string;
  /** Optional small blue label above the title (used on the Blogs page). */
  tag?: string;
  /** Optional icon shown above the title (centered layout). */
  icon?: ReactNode;
  /** Left-aligned text instead of centered. */
  left?: boolean;
};

/** White bordered card. */
export default function InfoCard({ title, text, tag, icon, left = false }: Props) {
  return (
    <div
      className={`rounded-lg border border-line bg-white px-[22px] py-[30px] ${left ? "text-left" : "text-center"}`}
    >
      {icon}
      {tag ? (
        <span className="mb-[10px] block font-body text-[13px] font-extrabold uppercase leading-[normal] tracking-[.2em] text-brand">
          {tag}
        </span>
      ) : null}
      <h3 className="mb-[6px] text-[24px] text-navy">{title}</h3>
      <p className="text-[15px]">{text}</p>
    </div>
  );
}
