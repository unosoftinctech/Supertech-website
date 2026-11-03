export type ButtonVariant = "primary" | "outline" | "light";

const base =
  "inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-[4px] px-[22px] py-[11px] text-center font-body text-[14px] font-bold leading-[normal] no-underline";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-0 bg-linear-to-b from-[#2a6fee] to-navy text-white hover:brightness-[1.15]",
  outline:
    "border border-current bg-transparent text-navy hover:brightness-[1.15]",
  light: "border-0 bg-white text-navy hover:brightness-[1.15]",
};

/** Tailwind classes for the site's button look (works on <a>, <Link>, <button>). */
export function buttonClass(variant: ButtonVariant = "primary", extra = "") {
  return `${base} ${variants[variant]} ${extra}`.trim();
}
