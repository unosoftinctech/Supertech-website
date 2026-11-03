import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Remove the top margin (used right below a page banner). */
  flush?: boolean;
};

export default function CardGrid({ children, flush = false }: Props) {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[22px] ${flush ? "mt-0" : "mt-8"}`}
    >
      {children}
    </div>
  );
}
