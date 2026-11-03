import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/site";

// Quadrupled so the -50% marquee-reverse loops seamlessly on any screen resolution.
const track = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function Testimonials() {
  return (
    <Section className="overflow-hidden">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          intro="Trusted by leading industrial equipment and machinery manufacturers across India for quality, precision, and dependable delivery."
        />
      </Container>

      {/* Auto-moving marquee track from left to right */}
      <div className="relative mt-8 overflow-hidden py-3">
        {/* Soft fade gradients on edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent tablet:w-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent tablet:w-10" />

        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((item, i) => (
            <div
              key={`${item.company}-${i}`}
              className="mx-3 flex w-[380px] flex-none flex-col justify-between rounded-xl border border-line bg-surface p-6 shadow-sm transition-all duration-300 hover:border-brand hover:shadow-md tablet:w-[320px] tablet:p-5"
            >
              <div>
                {/* Quote icon & 5-star rating */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1 text-[#f59e0b]">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <svg
                    className="h-6 w-6 text-brand/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote text */}
                <p className="text-[15px] leading-relaxed text-ink italic tablet:text-[14px]">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author / Client info */}
              <div className="mt-6 flex items-center gap-3.5 border-t border-line/80 pt-4">
                <div className="grid h-11 w-20 flex-none place-items-center overflow-hidden rounded border border-line bg-white p-1">
                  <Image
                    src={item.logo}
                    alt={item.company}
                    className="h-auto max-h-8 w-auto max-w-[70px] object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-navy text-[14px]">
                    {item.company}
                  </h4>
                  <span className="text-[12px] font-medium text-steel">
                    Industrial Client
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

