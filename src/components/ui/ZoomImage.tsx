"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

import Lightbox from "./Lightbox";

type Props = {
  image: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
};

/** An image that opens in the lightbox when clicked. */
export default function ZoomImage({ image, alt, className = "", sizes }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        src={image}
        alt={alt}
        sizes={sizes}
        className={`cursor-zoom-in ${className}`}
        onClick={() => setOpen(true)}
      />
      {open ? (
        <Lightbox image={image} alt={alt} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}
