import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

/** Centered 1200px content wrapper. */
export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`mx-auto max-w-[1200px] pr-[max(22px,env(safe-area-inset-right))] pl-[max(22px,env(safe-area-inset-left))] ${className}`}
    >
      {children}
    </div>
  );
}
