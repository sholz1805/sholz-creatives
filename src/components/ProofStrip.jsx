"use client";

const brands = [
  "AIRBNB",
  "NOTION",
  "STRIPE",
  "FIGMA",
  "SHOPIFY",
  "SLACK",
  "CANVA",
  "DROPBOX",
  "ASANA",
  "NOTION",
  "STRIPE",
  "SHOPIFY",
];

const ProofStrip = () => {
  return (
    <section className="relative border-y border-brand-navy/10 bg-brand-surface py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-5 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-brand-muted">
            Selected by teams that need clearer growth
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-brand-navy/10 bg-brand-canvas/80 px-2 py-3">
          <div className="animate-marquee flex min-w-max gap-6">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex h-14 items-center justify-center rounded-full border border-brand-navy/10 bg-brand-surface px-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-muted whitespace-nowrap shadow-sm"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofStrip;
