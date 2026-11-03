import type { Metadata } from "next";

import GalleryGrid from "@/components/gallery/GalleryGrid";
import PageBanner from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "Gallery",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Our products. Hover over a photo to see its name, or tap a photo to enlarge it."
      />
      <GalleryGrid />
    </>
  );
}
