import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Remove the top margin (used right below a page banner). */
  flush?: boolean;
  cols?: 2 | 3 | 4;
  className?: string;
};

export default function CardGrid({
  children,
  flush = false,
  cols,
  className = "",
}: Props) {
  const gridColsClass =
    cols === 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : cols === 2
      ? "grid-cols-1 md:grid-cols-2"
      : cols === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]";

  return (
    <div
      className={`grid ${gridColsClass} gap-[22px] ${flush ? "mt-0" : "mt-8"} ${className}`}
    >
      {children}
    </div>
  );
}
