"use client";

import { animate, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass, Handshake, Target } from "lucide-react";
import { useEffect, useState } from "react";

const values = [
  {
    title: "Clear strategy",
    text: "We align your offer, audience, and message before design starts.",
    icon: Compass,
  },
  {
    title: "Execution that moves",
    text: "We turn strategy into pages, assets, and systems that drive action.",
    icon: Target,
  },
  {
    title: "A working partner",
    text: "You get direct communication, fast decisions, and support that keeps momentum up.",
    icon: Handshake,
  },
];

const process = [
  {
    step: "01",
    title: "Discovery and positioning",
    text: "We map your offer, audience, and goals to define the right creative direction before design begins.",
  },
  {
    step: "02",
    title: "Message and visual language",
    text: "We shape the tone, visual system, and structure so your brand feels clear, premium, and memorable.",
  },
  {
    step: "03",
    title: "Design and delivery",
    text: "We build the identity, website, campaign assets, and learning resources through a focused, collaborative process.",
  },
  {
    step: "04",
    title: "Launch and support",
    text: "We help roll the work out, refine it based on response, and support the next growth phase with clarity.",
  },
];

const strengths = [
  {
    title: "Design systems, not guesswork",
    text: "We build visual logic that makes your brand feel coherent at every touchpoint.",
  },
  {
    title: "A partner who keeps things moving",
    text: "Whether it is a refresh, a launch page, or ongoing support, the process stays clear and fast.",
  },
  {
    title: "Better decisions, sharper results",
    text: "We make the thinking visible so the work is clearer, stronger, and easier to act on.",
  },
];

const proofStats = [
  { value: 60, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "+", label: "Industries served" },
  { value: 95, suffix: "%", label: "Client return rate" },
];

const AnimatedCounter = ({ value, suffix }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.4,
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

const Page = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="text-brand-ink">
      <section className="px-6 pb-20 pt-28 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="brand-gradient grid items-center gap-8 overflow-hidden rounded-[32px] border border-white/10 p-6 text-white shadow-[0_30px_80px_rgba(44,46,95,0.2)] sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-brand-lilac">Why Sholz</p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl"
              >
                Brand design that gives ambitious businesses more traction.
              </motion.h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                Sholz Creatives builds brands, experiences, and campaigns for businesses ready to look sharper and sell more clearly.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/letstalk" className="w-full sm:w-auto">
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-[#6428b7] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-purple/20 transition hover:brightness-110 sm:w-auto">
                    Book a strategy call
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <Link href="/ourwork" className="w-full sm:w-auto">
                  <button className="w-full rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
                    View work
                  </button>
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_40px_rgba(15,18,50,0.16)] backdrop-blur-sm">
              <div className="space-y-4">
                {proofStats.map((item) => (
                  <div key={item.label} className="border-b border-white/15 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl">
                      <AnimatedCounter value={item.value} suffix={item.suffix} />
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/65">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-6 py-16 sm:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-purple">Why clients choose us</p>
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.06em] text-brand-navy sm:text-4xl lg:text-[3.2rem]">
              A clearer path from offer to traction.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="rounded-[24px] border border-brand-navy/10 bg-brand-canvas p-6 shadow-[0_10px_30px_rgba(44,46,95,0.04)] transition hover:-translate-y-1 hover:border-brand-purple/20 hover:shadow-[0_18px_36px_rgba(44,46,95,0.10)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[18px] border border-brand-purple/15 bg-gradient-to-br from-white to-brand-canvas text-brand-purple">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold tracking-[-0.05em] text-brand-navy">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-muted">{value.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-canvas px-6 py-16 sm:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-purple">The Sholz difference</p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.02] tracking-[-0.06em] text-brand-navy sm:text-4xl lg:text-5xl">
              Strategy. Systems. Momentum.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-brand-muted sm:text-base">
              Three principles shape the way we think, create, and move your brand forward.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <motion.div
              aria-hidden="true"
              initial={shouldReduceMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
              className="absolute left-[19px] top-5 hidden h-[calc(100%-40px)] w-px origin-top bg-gradient-to-b from-brand-purple via-brand-lilac to-brand-navy/20 md:block"
            />

            <div className="space-y-5 md:space-y-6">
              {strengths.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : index * 0.12, ease: "easeOut" }}
                  className="group relative grid items-start gap-3 md:grid-cols-[40px_1fr] md:gap-7"
                >
                  <div className="relative z-10 flex items-center justify-center md:pt-1">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.12, rotate: 8 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-[#6428b7] text-[11px] font-semibold text-white shadow-[0_8px_20px_rgba(139,66,241,0.24)] ring-4 ring-brand-canvas transition-shadow group-hover:shadow-[0_10px_26px_rgba(139,66,241,0.36)]"
                    >
                      0{index + 1}
                    </motion.div>
                  </div>

                  <div className="relative overflow-hidden rounded-[22px] border border-brand-navy/10 bg-brand-surface p-5 shadow-[0_12px_30px_rgba(44,46,95,0.04)] transition duration-300 group-hover:border-brand-purple/25 group-hover:shadow-[0_18px_36px_rgba(44,46,95,0.10)] md:p-6">
                    <div className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-brand-purple to-brand-lilac transition-transform duration-300 group-hover:scale-y-100" />
                    <h3 className="mb-2 text-xl font-semibold tracking-[-0.05em] text-brand-navy sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="max-w-[620px] text-sm leading-relaxed text-brand-muted sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="brand-gradient py-16">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 text-3xl font-semibold tracking-[-0.05em] text-white"
          >
            Ready for a brand that looks sharper and sells clearer?
          </motion.h2>

          <Link href="/letstalk" className="block w-full sm:mx-auto sm:w-fit">
            <button className="w-full rounded-full bg-gradient-to-r from-brand-purple to-[#6428b7] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto">
              Book a strategy call
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Page;
