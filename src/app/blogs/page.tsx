import type { Metadata } from "next";

import BlogList from "@/components/blogs/BlogList";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Engineering Insights & Blogs | SuperTech Engineering Corporation",
  description:
    "Explore industrial engineering, boiler testing technologies, precision machining and manufacturing expertise from SuperTech Engineering Corporation.",
  alternates: { canonical: "/blogs/" },
};

export default function BlogsPage() {
  return (
    <>
      <div className="bg-navy-gradient py-[58px] text-white phone:py-[42px]">
        <Container>
          <span className="mb-2.5 inline-block font-body text-[12px] font-extrabold uppercase tracking-[.25em] text-[#8cb4ff]">
            SUPERTECH ENGINEERING CORPORATION
          </span>
          <h1 className="text-[clamp(38px,6vw,72px)] font-bold text-white leading-tight">
            Engineering Insights
          </h1>
          <p className="mt-2 text-[20px] font-semibold text-white/95 phone:text-[18px]">
            Knowledge. Precision. Performance.
          </p>
          <p className="mt-2.5 max-w-[48em] text-[16px] text-[#c4ccd7]">
            Explore industrial engineering, boiler testing technologies, precision machining and manufacturing expertise.
          </p>
        </Container>
      </div>
      <BlogList />
    </>
  );
}
