import type { Metadata } from "next";

import ProductGrid from "@/components/products/ProductGrid";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import Section from "@/components/ui/Section";
import { products } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Products",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        title="Our Products"
        subtitle="Precision-engineered components for industrial applications."
      />
      <Section>
        <Container>
          <ProductGrid products={products} flush />
        </Container>
      </Section>
    </>
  );
}
