import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { products } from "@/data/site";
import GalleryItem from "./GalleryItem";

export default function GalleryGrid() {
  return (
    <Section>
      <Container>
        <div className="mt-7 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[14px] tablet:grid-cols-2 phone:grid-cols-1">
          {products.map((product) => (
            <GalleryItem key={product.name} product={product} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
