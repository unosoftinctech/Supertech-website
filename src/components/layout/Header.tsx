"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Container from "@/components/ui/Container";
import { navLinks } from "@/data/site";
import Brand from "./Brand";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-20 border-b border-line bg-white">
      <Container className="flex items-center justify-between gap-[14px] py-3 tablet:flex-wrap">
        <Brand />

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="hidden size-12 cursor-pointer rounded-md border-0 bg-navy text-[26px] leading-none text-white tablet:block"
        >
          {open ? "\u2715" : "\u2630"}
        </button>

        <nav
          onClick={() => setOpen(false)}
          className={`flex-wrap gap-[2px] tablet:max-h-[calc(100vh-90px)] tablet:w-full tablet:flex-col tablet:gap-0 tablet:overflow-y-auto ${
            open ? "flex" : "flex tablet:hidden"
          }`}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-[4px] px-3 py-2 text-[14px] font-bold no-underline hover:bg-navy hover:text-white tablet:rounded-none tablet:border-b tablet:border-line tablet:py-[14px] tablet:text-[15px] ${
                  active ? "bg-navy text-white" : "text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
