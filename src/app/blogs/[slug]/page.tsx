import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { blogPosts, company } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Blog Not Found" };
  }

  return {
    title: `${post.title} | ${company.name}`,
    description: post.summary,
    keywords: [...post.primaryKeywords, ...post.supportingKeywords],
    alternates: {
      canonical: `/blogs/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `/blogs/${post.slug}/`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Banner */}
      <div className="bg-navy-gradient py-12 text-white">
        <Container>
          <nav className="mb-4 flex items-center gap-2 text-xs text-[#c4ccd7]">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-white">
              Blogs
            </Link>
            <span>/</span>
            <span className="truncate text-white">{post.title}</span>
          </nav>
          <span className="inline-block rounded-full bg-brand/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8cb4ff]">
            {post.tag}
          </span>
          <h1 className="mt-3 text-[clamp(28px,4.5vw,52px)] font-bold leading-tight text-white">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-xs text-[#c4ccd7]">
            <span>Published: {post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>SuperTech Engineering Corporation</span>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Featured Image */}
            <div className="relative mb-10 h-72 w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-md tablet:h-56">
              <Image
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="space-y-6 text-[16.5px] leading-relaxed text-[#26344d]">
              {post.contentParagraphs.map((para, i) => (
                <p key={i} className="text-base text-ink tablet:text-[15px]">
                  {para}
                </p>
              ))}

              {/* Highlights & Bullet Points */}
              {post.bullets && post.bullets.length > 0 ? (
                <div className="my-8 rounded-xl border border-line bg-surface p-6 shadow-sm tablet:p-5">
                  <h3 className="mb-4 text-lg font-bold text-navy">
                    {post.bulletsTitle || "Key Considerations & Requirements:"}
                  </h3>
                  <ul className="space-y-3">
                    {post.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px]">
                        <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                          ✓
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {/* Objective statement */}
              {post.objective ? (
                <div className="my-8 border-l-4 border-brand bg-white p-5 pl-6 italic shadow-sm">
                  <p className="text-base font-medium text-navy">
                    {post.objective}
                  </p>
                </div>
              ) : null}
            </div>

            {/* SEO Keywords tags */}
            <div className="mt-10 border-t border-line/80 pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-steel">
                Focus Areas:
              </span>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {post.primaryKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-md border border-line bg-surface px-3 py-1 text-xs font-medium text-navy"
                  >
                    {kw}
                  </span>
                ))}
                {post.supportingKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-md border border-line/60 bg-white px-3 py-1 text-xs text-steel"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact / RFQ CTA Box */}
            <div className="mt-12 rounded-2xl bg-navy p-8 text-white shadow-xl tablet:p-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#8cb4ff]">
                    Work With SuperTech
                  </span>
                  <h3 className="mt-1 text-2xl font-bold">
                    Need precision components built to your drawings?
                  </h3>
                  <p className="mt-2 text-sm text-[#c4ccd7]">
                    Share your technical drawings, dimensions, and specifications for prompt engineering review and quotation.
                  </p>
                </div>
                <div className="flex flex-none flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-white transition hover:bg-accent/90"
                  >
                    Send Enquiry
                  </Link>
                  <a
                    href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
                      `Hello SuperTech, I am enquiring about ${post.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/20"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            {/* Other Blogs */}
            {otherPosts.length > 0 ? (
              <div className="mt-16 border-t border-line pt-12">
                <h3 className="mb-6 text-xl font-bold text-navy">
                  More From Engineering Insights
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {otherPosts.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/blogs/${other.slug}`}
                      className="group rounded-xl border border-line bg-white p-5 transition hover:border-brand hover:shadow-md"
                    >
                      <span className="text-xs font-bold uppercase tracking-wider text-brand">
                        {other.tag}
                      </span>
                      <h4 className="mt-2 line-clamp-2 text-sm font-bold text-navy group-hover:text-brand">
                        {other.title}
                      </h4>
                      <p className="mt-2 line-clamp-2 text-xs text-[#4a5872]">
                        {other.summary}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </Section>
    </>
  );
}

