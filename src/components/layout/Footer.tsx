import Link from "next/link";
import type { ReactNode } from "react";

import Container from "@/components/ui/Container";
import { company, products } from "@/data/site";
import Brand from "./Brand";

const linkClass = "block py-[3px] no-underline hover:text-white";

function Heading({ children }: { children: ReactNode }) {
  return (
    <h4 className="mb-3 font-display text-[22px] font-black uppercase leading-[normal] tracking-[.05em] text-white">
      {children}
    </h4>
  );
}

export default function Footer() {
  return (
    <footer className="bg-deep px-0 pb-6 pt-14 text-[15px] text-[#aab4c3]">
      <Container>
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-[30px] tablet:grid-cols-1 tablet:gap-[22px]">
          <div>
            <Brand inverse />
            <p>
              Engineering Corporation
              <br />
              {company.tagline}
            </p>
          </div>

          <div>
            <Heading>Useful Links</Heading>
            <Link href="/about" className={linkClass}>About Us</Link>
            <Link href="/team" className={linkClass}>Meet Our Team</Link>
            <Link href="/products" className={linkClass}>Products</Link>
            <Link href="/blogs" className={linkClass}>Blogs</Link>
            <Link href="/contact" className={linkClass}>Contact Us</Link>
          </div>

          <div>
            <Heading>Products</Heading>
            <div>
              {products.slice(0, 5).map((p) => (
                <Link key={p.name} href="/products" className={linkClass}>
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Heading>Get In Touch</Heading>
            <a href={company.phoneHref} className={linkClass}>{company.phone}</a>
            <a href={`mailto:${company.email}`} className={linkClass}>{company.email}</a>
            <p className="mt-[6px]">{company.address}</p>
          </div>
        </div>

        <div className="mt-[34px] border-t border-[#1f3358] pt-[18px] text-center text-[13px]">
          © {new Date().getFullYear()} {company.name}. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
