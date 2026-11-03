import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Light grey background. */
  alt?: boolean;
  className?: string;
};

export default function Section({ children, alt = false, className = "" }: Props) {
  return (
    <section
      className={`py-[70px] tablet:py-[46px] ${alt ? "bg-surface" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
