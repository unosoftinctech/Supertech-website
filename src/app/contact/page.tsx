import type { Metadata } from "next";

import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" subtitle="Let’s discuss your engineering requirements." />
      <Section>
        <Container className="grid grid-cols-[1fr_1fr] items-start gap-[46px] tablet:grid-cols-1">
          <ContactDetails />
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
