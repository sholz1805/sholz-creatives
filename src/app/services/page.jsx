"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Brand Identity",
    summary: "Positioning, visual systems, and the design language that makes a business instantly recognizable.",
    bullets: ["Logo systems", "Brand strategy", "Visual identity"],
    accent: "from-brand-purple/10 via-brand-lilac/15 to-brand-canvas",
  },
  {
    title: "Event Branding",
    summary: "Immersive brand experiences for launches, activations, and high-impact events that feel premium and memorable.",
    bullets: ["Event visuals", "Experience design", "Activation kits"],
    accent: "from-brand-lilac/15 via-brand-purple/10 to-brand-canvas",
  },
  {
    title: "Web Experience",
    summary: "High-converting websites and landing pages designed to communicate with clarity and confidence.",
    bullets: ["UX/UI design", "Landing pages", "Frontend polish"],
    accent: "from-brand-canvas via-brand-purple/10 to-brand-lilac/15",
  },
  {
    title: "Social Content",
    summary: "Creative assets and campaigns built for visibility, engagement, and strong brand recall across channels.",
    bullets: ["Campaigns", "Reels and ads", "Content systems"],
    accent: "from-brand-purple/10 via-brand-canvas to-brand-lilac/15",
  },
  {
    title: "Print & Production",
    summary: "Tactile brand pieces and production support that keep your visual system consistent beyond digital.",
    bullets: ["Print design", "Production files", "Collateral tools"],
    accent: "from-brand-lilac/10 via-brand-canvas to-brand-purple/10",
  },
  {
    title: "Creative Ops",
    summary: "A focused partner for the recurring design work that keeps your brand moving without slowing the team down.",
    bullets: ["Design support", "Templates", "Fast-turn requests"],
    accent: "from-brand-lilac/15 via-brand-purple/10 to-brand-canvas",
  },
];

const steps = [
  {
    number: "01",
    title: "Clarify",
    text: "We define the position, message, and creative direction behind the work before visual design begins.",
  },
  {
    number: "02",
    title: "Design",
    text: "We build the system — from identity to web and campaign assets — so it feels coherent and premium.",
  },
  {
    number: "03",
    title: "Refine",
    text: "We iterate with the right feedback loops to sharpen clarity, polish, and conversion impact.",
  },
  {
    number: "04",
    title: "Launch",
    text: "We help deliver the final assets with confidence and make sure the brand is ready to perform.",
  },
];

const outcomes = [
  { value: 60, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "+", label: "Industries served" },
  { value: 95, suffix: "%", label: "Client retention" },
];

const AnimatedMetric = ({ value, suffix }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      const start = performance.now();
      const duration = 1200;

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        setDisplay(value * eased);

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    });

    return () => cancelAnimationFrame(timer);
  }, [value]);

  return (
    <span>
      {Math.round(display)}
      {suffix}
    </span>
  );
};

export default function Page() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="bg-brand-canvas text-brand-ink">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="brand-gradient rounded-[32px] border border-white/10 p-6 text-white shadow-[0_30px_80px_rgba(44,46,95,0.2)] sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[2.15rem] font-semibold leading-[0.98] tracking-[-0.065em] text-white sm:text-5xl lg:text-[4.25rem]"
              >
                <span className="block">Design systems</span>
                <span className="block">built to <span className="font-medium italic text-brand-lilac">move</span></span>
                <span className="block">brands forward.</span>
              </motion.h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 md:text-base">
                We help ambitious brands sharpen their identity, communication, and digital presence with strategy-led design, premium execution, and a clear creative process.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/letstalk" className="w-full sm:w-auto">
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-[#6428b7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-purple/20 transition hover:-translate-y-0.5 hover:brightness-110 sm:w-auto">
                    Book a strategy call
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <Link href="/ourwork" className="w-full sm:w-auto">
                  <button className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
                    View our work
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div aria-hidden="true" className="absolute -inset-5 rounded-full bg-brand-purple/15 blur-3xl" />
              <motion.div
                aria-hidden="true"
                initial={shouldReduceMotion ? false : { left: "6%", top: "6%" }}
                animate={
                  shouldReduceMotion
                    ? { left: "6%", top: "6%" }
                    : {
                        left: ["8%", "90%", "90%", "8%"],
                        top: ["24%", "24%", "80%", "24%"],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 13.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 1 / 3, 2 / 3, 1],
                      }
                }
                className="pointer-events-none absolute z-20 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#fff_0%,#f0abfc_18%,#cc66ff_42%,#8b42f1_68%,transparent_100%)] blur-[1px] shadow-[0_0_16px_6px_rgba(204,102,255,0.85),0_0_36px_14px_rgba(139,66,241,0.62),0_0_56px_22px_rgba(244,114,182,0.32)]"
              >
                <span className="absolute inset-0 scale-150 rounded-full bg-brand-lilac/70 blur-md" />
              </motion.div>
              <div className="relative grid grid-cols-[1.15fr_0.85fr] items-center gap-3 sm:gap-4">
                <motion.figure
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18, rotate: -2 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    scale: shouldReduceMotion ? 1 : [1, 1.035, 1, 1],
                    boxShadow: shouldReduceMotion
                      ? "0 24px 60px rgba(5,6,21,0.32)"
                      : [
                          "0 24px 60px rgba(5,6,21,0.32)",
                          "0 24px 60px rgba(139,66,241,0.3)",
                          "0 24px 60px rgba(5,6,21,0.32)",
                          "0 24px 60px rgba(5,6,21,0.32)",
                        ],
                  }}
                  transition={{
                    opacity: { duration: shouldReduceMotion ? 0 : 0.55 },
                    y: { duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" },
                    rotate: { duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" },
                    scale: shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 13.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.22, 1] },
                    boxShadow: shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 13.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.22, 1] },
                  }}
                  className="relative aspect-[0.82] overflow-hidden rounded-[26px] ring-1 ring-white/15"
                >
                  <Image
                    src="/images/Sholz_Bday.png"
                    alt="Event branding project from the Sholz Creatives portfolio"
                    fill
                    sizes="(max-width: 1024px) 55vw, 28vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-lilac">Event identity</span>
                    <span className="mt-1 block text-sm font-medium text-white sm:text-base">Made to be remembered.</span>
                  </figcaption>
                </motion.figure>

                <div className="space-y-3 sm:space-y-4">
                  <motion.figure
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 18, y: 10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: shouldReduceMotion ? 1 : [1, 1.035, 1, 1],
                      boxShadow: shouldReduceMotion
                        ? "0 18px 40px rgba(5,6,21,0.26)"
                        : [
                            "0 18px 40px rgba(5,6,21,0.26)",
                            "0 18px 40px rgba(204,102,255,0.28)",
                            "0 18px 40px rgba(5,6,21,0.26)",
                          ],
                    }}
                    transition={{
                      opacity: { duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.12 },
                      x: { duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.12, ease: "easeOut" },
                      y: { duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.12, ease: "easeOut" },
                      scale: shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 13.5, delay: 4.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.22, 1] },
                      boxShadow: shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 13.5, delay: 4.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.22, 1] },
                    }}
                    className="relative aspect-[1.05] overflow-hidden rounded-[22px] ring-1 ring-white/15"
                  >
                    <Image
                      src="/images/Sholz_Creatives_LogoPack.png"
                      alt="Brand identity logo system project"
                      fill
                      sizes="(max-width: 1024px) 38vw, 20vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/65 to-transparent" />
                    <figcaption className="absolute bottom-3 left-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white sm:bottom-4 sm:left-4">
                      Brand systems
                    </figcaption>
                  </motion.figure>

                  <motion.figure
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 18, y: 10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: shouldReduceMotion ? 1 : [1, 1.035, 1, 1],
                      boxShadow: shouldReduceMotion
                        ? "0 18px 40px rgba(5,6,21,0.26)"
                        : [
                            "0 18px 40px rgba(5,6,21,0.26)",
                            "0 18px 40px rgba(139,66,241,0.28)",
                            "0 18px 40px rgba(5,6,21,0.26)",
                          ],
                    }}
                    transition={{
                      opacity: { duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.22 },
                      x: { duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.22, ease: "easeOut" },
                      y: { duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.22, ease: "easeOut" },
                      scale: shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 13.5, delay: 9, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.22, 1] },
                      boxShadow: shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 13.5, delay: 9, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.22, 1] },
                    }}
                    className="relative aspect-[1.05] overflow-hidden rounded-[22px] ring-1 ring-white/15"
                  >
                    <Image
                      src="/images/Monday!.png"
                      alt="Social campaign design from the Sholz Creatives portfolio"
                      fill
                      sizes="(max-width: 1024px) 38vw, 20vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/65 to-transparent" />
                    <figcaption className="absolute bottom-3 left-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white sm:bottom-4 sm:left-4">
                      Digital campaigns
                    </figcaption>
                  </motion.figure>
                </div>
              </div>
              <p className="mt-4 text-center text-[9px] font-medium uppercase tracking-[0.22em] text-white/55 sm:text-left">
                One clear direction. Across every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-purple">What we do</p>
            <h2 className="text-3xl font-semibold tracking-[-0.06em] text-brand-navy sm:text-4xl">Creative support for every stage of growth.</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group rounded-[28px] border border-brand-navy/10 bg-brand-surface p-5 shadow-[0_18px_35px_rgba(44,46,95,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/20 hover:shadow-[0_24px_55px_rgba(44,46,95,0.12)]"
            >
              <div className={`rounded-[20px] bg-gradient-to-br ${service.accent} p-3`}>
                <div className="h-24 rounded-[16px] border border-white/60 bg-white/30 backdrop-blur-sm" />
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold tracking-[-0.05em] text-brand-navy">{service.title}</h3>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-purple/20 bg-brand-canvas text-brand-purple transition group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-brand-muted">{service.summary}</p>

              <ul className="mt-5 space-y-2">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-ink">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="brand-gradient px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-lilac">How we work</p>
            <h2 className="text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">A simple workflow, built for sharp delivery.</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[26px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-lilac">{step.number}</div>
                <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-canvas px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="pt-2">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-purple">Why brands hire us</p>
              <h2 className="max-w-[650px] text-4xl font-semibold leading-[1] tracking-[-0.06em] text-brand-navy sm:text-5xl lg:text-[3.75rem]">
                Clarity to create. Systems to grow.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-brand-muted sm:text-base">
                We connect thoughtful strategy with standout design and dependable delivery, so every brand touchpoint works harder.
              </p>
            </div>

            <div className="relative">
              <motion.div
                aria-hidden="true"
                initial={shouldReduceMotion ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
                className="absolute bottom-5 left-5 top-5 w-px origin-top bg-gradient-to-b from-brand-purple via-brand-lilac to-brand-navy/20"
              />

              <div className="space-y-4 md:space-y-5">
                {[
                  {
                    title: "Strategy before design",
                    text: "We clarify the offer, audience, and message so the work has sharper focus from the start.",
                  },
                  {
                    title: "Execution without drag",
                    text: "Your team gets a clear process, faster feedback loops, and creative support that keeps momentum up.",
                  },
                  {
                    title: "Systems that scale",
                    text: "Every asset is built to feel cohesive across campaigns, digital touchpoints, and brand moments.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                    className="group relative grid grid-cols-[40px_1fr] items-start gap-3 md:grid-cols-[48px_1fr] md:gap-5"
                  >
                    <div className="relative z-10 flex justify-center pt-1">
                      <motion.div
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.1, rotate: 8 }}
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
                      <p className="text-sm leading-relaxed text-brand-muted sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {outcomes.map((item) => (
              <div key={item.label} className="rounded-[26px] border border-brand-navy/10 bg-brand-surface p-6 text-center shadow-[0_10px_30px_rgba(44,46,95,0.04)]">
                <div className="text-4xl font-semibold tracking-[-0.08em] text-brand-navy sm:text-5xl">
                  <AnimatedMetric value={item.value} suffix={item.suffix} />
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-brand-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="brand-gradient mx-auto max-w-5xl rounded-[32px] p-8 text-center text-white shadow-[0_25px_55px_rgba(44,46,95,0.25)] sm:p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-lilac">Ready when you are</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">Need a creative partner who knows how to turn attention into action?</h2>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/letstalk" className="w-full sm:w-auto">
              <button className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-purple transition hover:bg-brand-canvas sm:w-auto">
                Book a consultation
              </button>
            </Link>
            <Link href="/ourwork" className="w-full sm:w-auto">
              <button className="w-full rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-auto">
                Explore work
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
