import Link from "next/link";

import ZoomImage from "@/components/ui/ZoomImage";
import type { Product } from "@/data/site";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-line bg-white">
      <ZoomImage
        image={product.image}
        alt={product.name}
        sizes="(max-width: 520px) 100vw, 300px"
        className="h-[210px] w-full border-b-[3px] border-navy bg-white object-contain phone:h-[190px]"
      />
      <div className="flex flex-1 flex-col gap-2 p-[18px]">
        <h3 className="text-[24px] text-navy">{product.name}</h3>
        <p className="flex-1 text-[14.5px]">{product.description}</p>
        <Link href="/contact" className="text-[14px] font-bold text-brand no-underline">
          Get a Quote &rarr;
        </Link>
      </div>
    </div>
  );
}
