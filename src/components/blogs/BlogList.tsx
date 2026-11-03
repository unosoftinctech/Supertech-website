import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { blogPosts } from "@/data/site";

export default function BlogList() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              {/* Image thumbnail */}
              <div className="relative h-52 w-full overflow-hidden bg-surface">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  {post.tag}
                </span>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-3 text-xs text-steel">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="mb-3 text-xl font-bold leading-snug text-navy transition-colors group-hover:text-brand">
                  <Link href={`/blogs/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="mb-4 text-sm leading-relaxed text-[#4a5872]">
                  {post.summary}
                </p>

                {/* Bullets Preview */}
                {post.bullets && post.bullets.length > 0 ? (
                  <div className="mb-6 rounded-lg bg-surface/60 p-3.5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-navy">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1.5 text-xs text-ink/80">
                      {post.bullets.slice(0, 3).map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="mt-0.5 text-brand">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Footer link */}
                <div className="mt-auto border-t border-line/70 pt-4">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center text-sm font-bold text-brand transition-all group-hover:translate-x-1"
                  >
                    Read Full Article <span className="ml-1.5 text-base">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Engineering Enquiry Callout */}
        <div className="mt-14 rounded-2xl border-2 border-brand/20 bg-gradient-to-r from-surface to-white p-8 text-center tablet:p-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand">
            SUPERTECH ENGINEERING CORPORATION
          </span>
          <h3 className="mt-2 text-2xl font-bold text-navy tablet:text-xl">
            Precision-Engineered Components for Demanding Industrial Applications
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-[#4a5872]">
            We manufacture hydro test stoppers, thermowells, manifolds, couplings and custom-machined components strictly to customer drawings and technical specifications.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand"
            >
              Share Your Drawing
            </Link>
            <Link
              href="/products"
              className="inline-block rounded-md border border-line bg-white px-6 py-2.5 text-sm font-bold text-navy transition hover:bg-surface"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
