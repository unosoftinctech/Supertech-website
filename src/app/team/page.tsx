import type { Metadata } from "next";

import TeamGrid from "@/components/team/TeamGrid";
import PageBanner from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "Our Team",
  alternates: { canonical: "/team/" },
};

export default function TeamPage() {
  return (
    <>
      <PageBanner title="Our Team" subtitle="The people behind SuperTech." />
      <TeamGrid />
    </>
  );
}
