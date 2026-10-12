"use client";

import Link from "next/link";
import { animate } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { value: 100, suffix: "k", label: "Average annual savings on design services after switching to Sholz." },
  { value: 2, suffix: "x", label: "Faster than the average agency with a sharper content workflow." },
  { value: 3, suffix: "x", label: "More creative output without the overhead of a larger team." },
  { value: 94, suffix: "%", label: "Client retention based on ongoing creative partnerships and support." },
];

const AnimatedNumber = ({ value, suffix }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest),
    });

    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {Math.round(display)}
      {suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="bg-brand-canvas px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-purple">The return you want</p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-brand-ink sm:text-5xl">
            What stronger creative actually delivers.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Better positioning, cleaner systems, and more efficient execution make the work easier to sell and easier to trust.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="group relative overflow-hidden rounded-[26px] border border-brand-navy/10 bg-brand-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(44,46,95,0.10)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-purple/40 via-brand-lilac/80 to-brand-purple/40" />
              <div className="mb-4 text-4xl font-semibold tracking-[-0.06em] text-brand-navy sm:text-5xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm leading-relaxed text-brand-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="brand-gradient mt-12 rounded-[30px] border border-white/10 p-6 text-white shadow-[0_30px_60px_rgba(44,46,95,0.2)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-lilac">Why Sholz</p>
              <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                Strategy, creative execution, and practical design growth in one partner.
              </h3>
            </div>

            <div className="space-y-3 rounded-[22px] border border-white/10 bg-white/5 p-4">
              <div className="flex items-start gap-3 text-sm text-white/80">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-lilac" />
                <span>Thoughtful creative systems for premium positioning and better conversion.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-lilac" />
                <span>Clear process, faster turnaround, and support that scales with your goals.</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link href="/letstalk" className="w-full sm:w-auto">
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-[#6428b7] px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="/ourwork" className="w-full sm:w-auto">
              <button className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
                View work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
