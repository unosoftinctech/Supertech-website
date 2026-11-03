"use client";

import Image from "next/image";
import { useState } from "react";

import Lightbox from "@/components/ui/Lightbox";
import type { Product } from "@/data/site";

export default function GalleryItem({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure
        onClick={() => setOpen(true)}
        className="group relative h-[210px] cursor-zoom-in overflow-hidden rounded-md border border-line bg-white"
      >
        <Image
          src={product.image}
          alt={product.name}
          sizes="(max-width: 520px) 100vw, 300px"
          className="h-full w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-[1.07]"
        />
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-linear-to-b from-transparent to-[rgba(4,18,48,.94)] px-[14px] pb-3 pt-[38px] font-display text-[23px] font-black uppercase leading-none tracking-[.05em] text-white opacity-0 transition-[transform,opacity] duration-[400ms] ease-in-out group-hover:translate-y-0 group-hover:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
          {product.name}
        </figcaption>
      </figure>
      {open ? (
        <Lightbox image={product.image} alt={product.name} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}
