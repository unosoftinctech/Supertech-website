import CardGrid from "@/components/ui/CardGrid";
import type { Product } from "@/data/site";
import ProductCard from "./ProductCard";

type Props = { products: Product[]; flush?: boolean };

export default function ProductGrid({ products, flush }: Props) {
  return (
    <CardGrid flush={flush}>
      {products.map((p) => (
        <ProductCard key={p.name} product={p} />
      ))}
    </CardGrid>
  );
}
