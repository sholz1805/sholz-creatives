"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, GraduationCap, Megaphone, MonitorSmartphone } from "lucide-react";

const features = [
  {
    title: "Brand strategy",
    description: "Positioning and messaging that give your offer a clear point of view.",
    icon: BadgeCheck,
  },
  {
    title: "Design systems",
    description: "Identity and layouts built to stay consistent across every touchpoint.",
    icon: MonitorSmartphone,
  },
  {
    title: "Campaign design",
    description: "Landing pages and launch assets built to make the message land faster.",
    icon: Megaphone,
  },
  {
    title: "Production support",
    description: "Creative execution that keeps projects moving without the usual drag.",
    icon: GraduationCap,
  },
];

const storyBlocks = [
  {
    eyebrow: "Brand systems",
    title: "Positioning that gives your brand more weight.",
    body: "We shape the story, tone, and visual direction so your offer lands clearly and feels credible from the first impression.",
    image: "/images/Sholz_Bday.png",
    imageAlt: "Brand identity concept",
  },
  {
    eyebrow: "Creative execution",
    title: "Creative that turns attention into action.",
    body: "From launch pages to campaign visuals, we build work that looks polished, reads clearly, and moves people toward the next step.",
    image: "/images/WebBanner.png",
    imageAlt: "Campaign creative concept",
  },
];

const steps = [
  { number: "01", title: "Discover", text: "We map the opportunity, the audience, and the message before design starts." },
  { number: "02", title: "Define", text: "We shape the visual language and structure around what will actually resonate." },
  { number: "03", title: "Build", text: "We design the system and build the assets needed to carry the message clearly." },
  { number: "04", title: "Launch", text: "We refine, ship, and support the rollout so the work keeps moving after launch." },
];

const Features = () => {
  return (
    <section className="bg-brand-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-purple">What we do</p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-brand-navy sm:text-5xl">
            Creative systems for teams ready to grow.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-[24px] border border-brand-navy/10 bg-brand-surface p-5 shadow-[0_12px_24px_rgba(44,46,95,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(44,46,95,0.09)]"
              >
                <div className="mb-5 inline-flex rounded-[18px] border border-brand-navy/10 bg-brand-canvas p-3 text-brand-purple shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-medium tracking-[-0.05em] text-brand-navy">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-brand-muted">{feature.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 space-y-6">
          {storyBlocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[28px] border border-brand-navy/10 bg-brand-surface"
            >
              <div className={`grid items-stretch lg:grid-cols-[1.15fr_0.85fr] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative min-h-[300px] overflow-hidden sm:min-h-[400px] lg:min-h-[500px]">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="scale-[1.02] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent" />
                </div>

                <div className="flex items-center bg-brand-surface px-5 py-7 sm:px-8 sm:py-10 lg:px-10">
                  <div className="max-w-xl">
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-purple">{block.eyebrow}</p>
                    <h3 className="max-w-md text-2xl font-medium tracking-[-0.05em] text-brand-navy sm:text-4xl">{block.title}</h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-brand-muted sm:text-base">{block.body}</p>
                    <ul className="mt-5 space-y-2 text-sm text-brand-ink">
                      <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brand-purple" /> Clear strategy before execution</li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brand-purple" /> Visuals that feel premium and human</li>
                      <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brand-purple" /> Systems built to scale</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-[30px] border border-brand-navy/10 bg-brand-surface p-5 sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-purple">Our process</p>
              <h3 className="text-2xl font-semibold tracking-[-0.05em] text-brand-navy sm:text-3xl">A simple path from idea to launch.</h3>
            </div>
          </div>

          <div className="relative mt-6 grid gap-4 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand-purple/20 via-brand-lilac/70 to-brand-purple/20 md:block" />

            {steps.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="relative rounded-[24px] border border-brand-navy/10 bg-brand-surface p-4 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-brand-purple to-brand-lilac text-sm font-semibold text-white shadow-lg shadow-brand-purple/20">
                  {item.number}
                </div>
                <h4 className="mb-2 text-xl font-semibold tracking-[-0.05em] text-brand-navy">{item.title}</h4>
                <p className="text-sm leading-relaxed text-brand-muted">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Link href="/letstalk" className="w-full sm:w-auto">
            <button className="w-full rounded-full bg-gradient-to-r from-brand-purple to-[#6428b7] px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto">
              Start your project
            </button>
          </Link>
          <Link href="/ourwork" className="w-full sm:w-auto">
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-navy/15 bg-brand-surface px-6 py-2.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-canvas sm:w-auto">
              View work
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
