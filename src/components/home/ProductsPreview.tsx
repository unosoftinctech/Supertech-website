import Link from "next/link";

import ProductGrid from "@/components/products/ProductGrid";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { buttonClass } from "@/components/ui/button-styles";
import { products } from "@/data/site";

export default function ProductsPreview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="Our Products"
          title="Precision-Engineered Components for Industry"
          intro="Components designed for industrial applications that demand precision, strength and dependable performance."
        />
        <ProductGrid products={products.slice(0, 4)} />
        <p className="mt-7">
          <Link href="/products" className={buttonClass()}>
            View All Products
          </Link>
        </p>
      </Container>
    </Section>
  );
}
