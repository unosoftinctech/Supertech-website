import type { Metadata } from "next";

import BlogList from "@/components/blogs/BlogList";
import PageBanner from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "Blogs",
  alternates: { canonical: "/blogs/" },
};

export default function BlogsPage() {
  return (
    <>
      <PageBanner
        title="Blogs"
        subtitle="Recent developments at SuperTech Engineering Corporation."
      />
      <BlogList />
    </>
  );
}
