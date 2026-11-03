import type { ReactNode } from "react";

import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/site";

function Item({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mb-5 flex gap-[14px]">
      <div>
        <b className="block text-navy">{label}</b>
        {children}
      </div>
    </div>
  );
}

export default function ContactDetails() {
  return (
    <div>
      <SectionHeading label="Get In Touch" title="Send Us Your Requirement" />
      <p className="mb-[22px]">
        Looking for a reliable manufacturing partner for precision components, hydraulic
        press parts, heavy pressure components or customised engineering products?
      </p>
      <Item label="Mobile">
        <a href={company.phoneHref} className="underline">{company.phone}</a>
      </Item>
      <Item label="Email">
        <a href={`mailto:${company.email}`} className="underline">{company.email}</a>
      </Item>
      <Item label="Website">{company.website}</Item>
      <Item label="Address">{company.address}</Item>
    </div>
  );
}
