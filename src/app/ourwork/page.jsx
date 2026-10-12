"use client";

import CategoryShowcase from "@/components/showcase/CategoryShowcase";
import { portfolioCategories } from "@/data/portfolioData";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const toSectionId = (title) =>
  `work-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

const PortfolioPage = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pb-20 pt-10">
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-12">
        <div className="brand-gradient relative isolate overflow-hidden rounded-[32px] border border-white/10 p-5 text-white shadow-[0_30px_80px_rgba(5,6,21,0.28)] sm:p-8 lg:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-brand-purple/20 blur-[100px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 h-72 w-72 rounded-full bg-brand-lilac/10 blur-[100px]" />

          <div className="grid items-center gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="relative z-10">
              <p className="mb-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-lilac">
                <span className="h-px w-7 bg-brand-lilac" />
                Selected work
              </p>
              <h1 className="max-w-xl text-[2.35rem] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-5xl lg:text-[3.75rem]">
                Work designed to look <span className="font-medium italic text-brand-lilac">premium</span> and move people to act.
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                Brand systems, campaign visuals, and digital experiences—made to help ambitious businesses show up with clarity and confidence.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/letstalk" className="w-full sm:w-auto">
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-[#6428b7] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(139,66,241,0.3)] transition hover:-translate-y-0.5 hover:brightness-110 sm:w-auto">
                    Book a strategy call
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <Link href="/pricing" className="w-full sm:w-auto">
                  <button className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
                    View pricing
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div aria-hidden="true" className="absolute -inset-5 rounded-[36px] bg-brand-purple/15 blur-3xl" />
              <div className="relative grid grid-cols-[1fr_0.72fr] items-center gap-3 sm:gap-4">
                <motion.figure
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14, rotate: -2 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
                  className="relative aspect-[0.9] overflow-hidden rounded-[24px] border border-white/15 shadow-[0_24px_55px_rgba(5,6,21,0.38)] sm:rounded-[28px]"
                >
                  <Image
                    src="/images/Sholz_Bday.png"
                    alt="Event branding project from the Sholz Creatives portfolio"
                    fill
                    priority
                    sizes="(max-width: 1024px) 52vw, 28vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/75 via-transparent to-brand-deep/10" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-lilac">01 / Event identity</span>
                    <span className="mt-1 block text-sm font-semibold text-white sm:text-base">Designed to be remembered.</span>
                  </figcaption>
                </motion.figure>

                <div className="space-y-3 sm:space-y-4">
                  <motion.figure
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 16, y: 8 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.12, ease: "easeOut" }}
                    className="relative aspect-[0.92] overflow-hidden rounded-[20px] border border-white/15 shadow-[0_18px_40px_rgba(5,6,21,0.32)] sm:rounded-[24px]"
                  >
                    <Image
                      src="/images/Sholz_Creatives_LogoPack.png"
                      alt="Logo system project from the Sholz Creatives portfolio"
                      fill
                      sizes="(max-width: 1024px) 38vw, 20vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/70 to-transparent" />
                    <figcaption className="absolute bottom-3 left-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white sm:bottom-4 sm:left-4">Brand systems</figcaption>
                  </motion.figure>

                  <motion.figure
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 16, y: 8 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.22, ease: "easeOut" }}
                    className="relative aspect-[0.92] overflow-hidden rounded-[20px] border border-white/15 shadow-[0_18px_40px_rgba(5,6,21,0.32)] sm:rounded-[24px]"
                  >
                    <Image
                      src="/images/Monday!.png"
                      alt="Social campaign design from the Sholz Creatives portfolio"
                      fill
                      sizes="(max-width: 1024px) 38vw, 20vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/70 to-transparent" />
                    <figcaption className="absolute bottom-3 left-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white sm:bottom-4 sm:left-4">Campaign creative</figcaption>
                  </motion.figure>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[9px] font-medium uppercase tracking-[0.2em] text-white/45 sm:mt-4">
                <span>Strategy / Identity / Digital</span>
                <span>Sholz Creatives</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-5 sm:mt-9">
            {portfolioCategories.map((cat) => (
              <a
                key={cat.title}
                href={`#${toSectionId(cat.title)}`}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium text-white/75 backdrop-blur-sm transition hover:border-brand-lilac/50 hover:bg-white/10 hover:text-white sm:text-xs"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {portfolioCategories.map((cat, index) => (
        <CategoryShowcase
          key={index}
          sectionId={toSectionId(cat.title)}
          index={index}
          title={cat.title}
          description={cat.description}
          samples={cat.samples}
        />
      ))}

      <section className="mx-auto max-w-5xl px-4 pb-8 pt-2">
        <div className="brand-gradient rounded-[30px] border border-white/10 p-6 text-center text-white shadow-[0_24px_60px_rgba(5,6,21,0.18)] sm:p-10">
          <h2 className="mb-3 text-3xl font-semibold tracking-[-0.05em]">Need work like this for your brand?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Tell us your goals and we will map the right creative direction for your next launch or growth phase.
          </p>
          <Link href="/letstalk" className="block w-full sm:mx-auto sm:w-fit">
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-[#6428b7] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 sm:w-auto">
              Start your project
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
