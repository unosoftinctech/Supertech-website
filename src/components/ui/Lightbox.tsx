"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  image: StaticImageData;
  alt: string;
  onClose: () => void;
};

/** Full-screen image viewer. Click anywhere or press Esc to close. */
export default function Lightbox({ image, alt, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 grid cursor-zoom-out place-items-center bg-[rgba(4,18,48,.9)]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <Image
        src={image}
        alt={alt}
        className="h-auto max-h-[88vh] w-auto max-w-[92vw] rounded-md bg-white"
      />
    </div>,
    document.body,
  );
}
