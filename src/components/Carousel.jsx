"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const showcase = [
  {
    kicker: "Brand systems",
    title: "Identity that makes a business feel instantly credible.",
    summary:
      "We define the visual language, tone, and application system that helps brands feel consistent, premium, and memorable across every touchpoint.",
    tags: ["Logo system", "Brand strategy", "Campaign visuals"],
    image: "/images/Sholz_Creatives_LogoPack.png",
  },
  {
    kicker: "Campaign creative",
    title: "Launch moments built to turn attention into action.",
    summary:
      "From campaign concepts to social and event assets, we create work that feels polished, relevant, and built for conversion.",
    tags: ["Launch design", "Event creative", "Ad assets"],
    image: "/images/Sholz_Bday.png",
  },
  {
    kicker: "Digital experiences",
    title: "Web systems that feel premium and perform with clarity.",
    summary:
      "We design digital experiences that guide people through your offer with confidence, sharper hierarchy, and stronger brand trust.",
    tags: ["Landing pages", "UX flow", "Frontend polish"],
    image: "/images/Monday!.png",
  },
];

const Carousel = () => {
  return (
    <section className="bg-brand-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-purple">Selected work</p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-brand-navy sm:text-4xl">
              Work that turns attention into momentum.
            </h2>
          </div>
          <Link href="/ourwork" className="w-full md:w-auto">
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-navy/10 bg-brand-surface px-5 py-2.5 text-sm font-medium text-brand-navy transition hover:bg-brand-canvas md:w-auto">
              Explore all work
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>

        <div className="space-y-8">
          {showcase.map((item, index) => {
            const isFlipped = index % 2 === 1;

            return (
              <div
                key={item.title}
                className="group overflow-hidden bg-transparent"
              >
                <div className={`grid items-stretch lg:grid-cols-[1.2fr_0.8fr] ${isFlipped ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[520px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="scale-[1.02] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/25 via-transparent to-white/10" />
                  </div>

                  <div className="flex items-center bg-brand-canvas px-5 py-7 sm:px-8 sm:py-10 lg:px-10">
                    <div className="max-w-xl">
                      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-purple">{item.kicker}</p>
                      <h3 className="max-w-lg text-2xl font-semibold tracking-[-0.05em] text-brand-navy sm:text-4xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-brand-muted sm:text-base">{item.summary}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-brand-navy/10 bg-brand-surface px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-brand-muted">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link href="/ourwork" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-navy">
                        View case study
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
