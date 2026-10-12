"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  LayoutTemplate,
  Megaphone,
  MonitorSmartphone,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  PanelsTopLeft,
} from "lucide-react";

const brandingPacks = [
  {
    name: "Logo Essentials",
    price: "$1,200",
    timeline: "2-3 weeks",
    bestFor: "New businesses that need a polished, professional logo foundation",
    deliverables: [
      "Primary logo with alternate lockup",
      "Core color palette and typography pairing",
      "Logo files for print and digital use",
      "Essential logo usage guide",
    ],
    icon: PackageCheck,
  },
  {
    name: "Brand Identity System",
    price: "$2,400",
    timeline: "3-5 weeks",
    bestFor: "Growing businesses ready for a complete, consistent brand identity",
    deliverables: [
      "Logo suite with primary, alternate, and icon marks",
      "Color palette and typography system",
      "Supporting graphic elements and brand applications",
      "Brand guidelines and social launch templates",
    ],
    featured: true,
    icon: Sparkles,
  },
  {
    name: "Complete Brand System",
    price: "$4,500",
    timeline: "5-8 weeks",
    bestFor: "Established brands that need a deeper, ready-to-use creative system",
    deliverables: [
      "Everything in Brand Identity System",
      "Deeper brand strategy and messaging direction",
      "Expanded collateral and campaign applications",
      "Comprehensive guidelines and handover session",
    ],
    icon: Sparkles,
  },
];

const eventBrandingPacks = [
  {
    name: "Event Launch",
    price: "$600",
    timeline: "1-2 weeks",
    bestFor: "Fast-moving promos that need a polished campaign push",
    deliverables: [
      "10 custom event visuals",
      "Campaign art direction and layout system",
      "Web-ready export formats",
      "2 revision rounds",
    ],
    icon: Megaphone,
  },
  {
    name: "Event Momentum",
    price: "$1,150",
    timeline: "2-3 weeks",
    bestFor: "Brands running multi-touch campaigns and consistent event content",
    deliverables: [
      "15 branded event designs",
      "Visual system for repeat campaign use",
      "Priority turnaround and delivery windows",
      "3 revision rounds",
    ],
    featured: true,
    icon: Sparkles,
  },
  {
    name: "Event System",
    price: "$2,200",
    timeline: "3-4 weeks",
    bestFor: "High-volume events and premium promotions with multiple segments",
    deliverables: [
      "25 premium event assets",
      "Campaign-level creative direction",
      "Variation sets for audience-specific messaging",
      "Priority support and final QA",
    ],
    icon: ShieldCheck,
  },
];

const websitePacks = [
  {
    name: "Landing Page",
    price: "$1,100",
    timeline: "1-2 weeks",
    bestFor: "One focused offer, launch, or lead-generation campaign",
    deliverables: [
      "One responsive landing page",
      "Offer structure, messaging, and CTA flow",
      "Lead capture form and essential integrations",
      "Launch QA and analytics setup",
    ],
    icon: LayoutTemplate,
  },
  {
    name: "Business Website",
    price: "$2,600",
    timeline: "3-5 weeks",
    bestFor: "Service businesses that need a polished, multi-page web presence",
    deliverables: [
      "Up to 5 custom responsive pages",
      "Strategic navigation and conversion-focused page flow",
      "Contact forms and essential integrations",
      "On-page SEO foundations and launch QA",
    ],
    featured: true,
    icon: MonitorSmartphone,
  },
  {
    name: "Ecommerce & Custom Website",
    price: "$5,000",
    timeline: "5-8 weeks",
    bestFor: "Brands that need ecommerce or a more tailored digital experience",
    deliverables: [
      "Custom page scope or ecommerce storefront",
      "Product, checkout, or advanced user flows",
      "Platform setup and essential integrations",
      "Launch support and scalable design structure",
    ],
    icon: ShoppingBag,
  },
];

const socialDesignPacks = [
  {
    name: "Single Flyer",
    price: "₦15,000",
    timeline: "2-3 business days",
    bestFor: "One polished social graphic for a promotion or announcement",
    deliverables: ["1 custom social media design", "One selected size", "2 revision rounds", "Web-ready final file"],
    icon: PanelsTopLeft,
    type: "social-content",
    packageName: "Single flyer design",
  },
  {
    name: "Campaign Set — 3 Designs",
    price: "₦45,000",
    timeline: "4-5 business days",
    bestFor: "A coordinated set of posts for one campaign or event",
    deliverables: ["3 matching social media designs", "Consistent campaign art direction", "One size per design", "2 revision rounds"],
    icon: Megaphone,
    type: "social-content",
    packageName: "Social campaign set — 3 designs",
  },
  {
    name: "Campaign Set — 5 Designs",
    price: "₦75,000",
    timeline: "5-7 business days",
    bestFor: "A fuller campaign with multiple messages or content moments",
    deliverables: ["5 coordinated social media designs", "Consistent campaign art direction", "One size per design", "2 revision rounds"],
    icon: Sparkles,
    featured: true,
    type: "social-content",
    packageName: "Social campaign set — 5 designs",
  },
  {
    name: "Content Set — 10 Designs",
    price: "₦150,000",
    timeline: "7-10 business days",
    bestFor: "A ready-to-go batch of social content for an active brand",
    deliverables: ["10 custom social media designs", "A cohesive visual direction", "One size per design", "2 revision rounds"],
    icon: PackageCheck,
    type: "social-content",
    packageName: "Social content set — 10 designs",
  },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("branding");
  const [expandedPackage, setExpandedPackage] = useState("Brand Identity System");
  const shouldReduceMotion = useReducedMotion();

  const packsByTab = {
    branding: { label: "Brand identity", title: "Build a brand people recognize.", description: "Choose the depth of logo and identity system your business needs.", sample: "/images/OurColors.png", sampleAlt: "Sholz Creatives brand color palette", sampleLabel: "Identity in every detail", packs: brandingPacks, type: "branding", cta: "Discuss this package" },
    event: { label: "Event branding", title: "Make every event feel like a brand.", description: "From a focused promo to a full campaign system, choose the asset volume that fits your event.", sample: "/images/DontPanic_1.png", sampleAlt: "Promotional campaign artwork designed by Sholz Creatives", sampleLabel: "Campaigns that bring people together", packs: eventBrandingPacks, type: "event", cta: "Discuss this package" },
    website: { label: "Websites", title: "The right website for your next stage.", description: "Choose a focused landing page, a complete business site, or a custom ecommerce experience.", sample: "/images/WebBanner.png", sampleAlt: "A collection of Sholz Creatives digital design work", sampleLabel: "Designed to work across screens", packs: websitePacks, type: "website", cta: "Discuss this package" },
    social: { label: "Social design", title: "Scroll-stopping design, priced clearly.", description: "Order one flyer or a coordinated set of social designs. Bundles are calculated at ₦15,000 per design.", sample: "/images/Monday!.png", sampleAlt: "Social media campaign design by Sholz Creatives", sampleLabel: "Made to stand out in the feed", packs: socialDesignPacks, type: "social-content", cta: "Discuss this package" },
  };

  const current = packsByTab[activeTab];
  const selectTab = (tab) => {
    setActiveTab(tab);
    const packs = packsByTab[tab].packs;
    setExpandedPackage(packs.find((pack) => pack.featured)?.name || packs[0].name);
  };

  return (
    <section id="pricing" className="scroll-mt-24 bg-brand-canvas px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="brand-gradient relative mb-14 isolate overflow-hidden rounded-[30px] px-6 py-8 shadow-[0_24px_60px_rgba(44,46,95,0.2)] sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -right-12 -top-20 -z-10 h-64 w-64 rounded-full bg-brand-lilac/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-1/3 -z-10 h-56 w-56 rounded-full bg-brand-purple/20 blur-3xl" />
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-brand-lilac">Thoughtful work. Clear investment.</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">Find the right fit for your next move.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">Explore transparent starting prices and choose the kind of support your business needs. Every project is scoped with you before work begins.</p>
        </div>

        <div className="mb-12 overflow-x-auto border-b border-brand-navy/20">
          <div className="flex min-w-max gap-7 sm:gap-10" role="tablist" aria-label="Pricing categories">
            <button
              role="tab" aria-selected={activeTab === "branding"} onClick={() => selectTab("branding")}
              className={`border-b-2 px-1 pb-4 text-sm font-medium transition ${
                activeTab === "branding"
                  ? "border-brand-purple text-brand-navy"
                  : "border-transparent text-brand-muted hover:text-brand-purple"
              }`}
            >
              Brand identity
            </button>
            <button
              role="tab" aria-selected={activeTab === "event"} onClick={() => selectTab("event")}
              className={`border-b-2 px-1 pb-4 text-sm font-medium transition ${
                activeTab === "event"
                  ? "border-brand-purple text-brand-navy"
                  : "border-transparent text-brand-muted hover:text-brand-purple"
              }`}
            >
              Event branding
            </button>
            <button
              role="tab" aria-selected={activeTab === "website"} onClick={() => selectTab("website")}
              className={`border-b-2 px-1 pb-4 text-sm font-medium transition ${
                activeTab === "website"
                  ? "border-brand-purple text-brand-navy"
                  : "border-transparent text-brand-muted hover:text-brand-purple"
              }`}
            >
              Websites
            </button>
            <button
              role="tab" aria-selected={activeTab === "social"} onClick={() => selectTab("social")}
              className={`border-b-2 px-1 pb-4 text-sm font-medium transition ${
                activeTab === "social"
                  ? "border-brand-purple text-brand-navy"
                  : "border-transparent text-brand-muted hover:text-brand-purple"
              }`}
            >
              Social design
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            role="tabpanel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            <div className="mb-8 grid gap-8 border-b border-brand-navy/15 pb-8 md:grid-cols-[1fr_0.82fr] md:items-center md:gap-12 md:pb-10">
              <div className="py-2">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-brand-purple">{current.label}</p>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-brand-navy sm:text-3xl">{current.title}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-brand-muted">{current.description}</p>
                <Link href="/letstalk" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-purple transition hover:text-brand-navy">
                  Need a custom scope? <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <motion.figure
                key={activeTab}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, x: 36, y: 12, scale: 0.94, rotate: 1.5 }
                }
                animate={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, x: 0, y: [0, -6, 0], scale: 1, rotate: 0 }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        opacity: { duration: 0.35 },
                        x: { duration: 0.45, ease: "easeOut" },
                        scale: { duration: 0.45, ease: "easeOut" },
                        rotate: { duration: 0.45, ease: "easeOut" },
                        y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                      }
                }
                className="relative isolate mx-auto w-full max-w-xl md:ml-auto"
              >
                <div className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-br from-brand-purple/30 via-brand-lilac/15 to-brand-navy/20 blur-xl" />
                <div className="relative aspect-[1.8/1] overflow-hidden rounded-2xl border border-brand-navy/10 bg-brand-deep shadow-[0_24px_70px_rgba(44,46,95,0.16)]">
                  <Image
                    src={current.sample}
                    alt={current.sampleAlt}
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-cover"
                    priority={activeTab === "branding"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/5 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                    <span className="text-sm font-medium text-white sm:text-base">{current.sampleLabel}</span>
                    <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur">Sholz Creatives</span>
                  </figcaption>
                </div>
              </motion.figure>
            </div>

            <div className="divide-y divide-brand-navy/10 border-y border-brand-navy/20">
              {current.packs.map((pack, index) => {
                const isExpanded = expandedPackage === pack.name;
                const packageType = pack.type || current.type;
                const packageName = pack.packageName || pack.name;

                return (
                  <article key={pack.name} className={`relative transition-colors ${isExpanded ? "bg-white/80" : "hover:bg-white/55"}`}>
                    {isExpanded && (
                      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-purple to-brand-lilac" />
                    )}
                    <button
                      type="button"
                      onClick={() => setExpandedPackage(isExpanded ? "" : pack.name)}
                      aria-expanded={isExpanded}
                      aria-controls={`package-details-${activeTab}-${index}`}
                      className="grid w-full grid-cols-[1fr_auto] items-center gap-4 px-3 py-5 text-left sm:grid-cols-[minmax(0,1.3fr)_minmax(130px,0.6fr)_minmax(150px,0.7fr)_24px] sm:px-5 sm:py-6"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-purple/20 bg-gradient-to-br from-brand-purple/10 to-brand-lilac/15 text-brand-purple"><pack.icon className="h-4 w-4" /></span>
                        <span className="min-w-0">
                          <span className="flex flex-wrap items-center gap-2 text-sm font-semibold text-brand-navy sm:text-base">{pack.name}{pack.featured && <span className="rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-lilac/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-brand-purple">Recommended</span>}</span>
                          <span className="mt-1 block text-xs leading-5 text-brand-muted">{pack.bestFor}</span>
                        </span>
                      </span>
                      <span className="text-right text-base font-semibold text-brand-navy sm:text-left sm:text-lg">{pack.price}<span className="mt-0.5 block text-[10px] font-normal text-brand-muted">Starting at</span></span>
                      <span className="hidden text-sm text-brand-navy/80 sm:block">{pack.timeline}<span className="mt-0.5 block text-[10px] text-brand-muted">Typical timeline</span></span>
                      <ChevronDown className={`h-4 w-4 text-brand-purple transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`package-details-${activeTab}-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-6 px-3 pb-6 pl-16 sm:grid-cols-[1fr_auto] sm:px-5 sm:pb-7 sm:pl-[4.5rem]">
                            <div>
                              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-brand-muted">What’s included</p>
                              <ul className="grid gap-2 sm:grid-cols-2">
                                {pack.deliverables.map((item) => (
                                  <li key={item} className="flex gap-2 text-xs leading-5 text-brand-ink">
                                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-purple" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                              <p className="mt-4 text-xs text-brand-muted">Typical timeline: <span className="text-brand-navy">{pack.timeline}</span></p>
                            </div>
                            <Link
                              href={`/letstalk?type=${packageType}&package=${encodeURIComponent(packageName)}`}
                              className="inline-flex h-fit w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-[#6428b7] px-5 py-3 text-xs font-semibold text-white transition hover:brightness-110 sm:w-auto"
                            >
                              {current.cta}<ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                );
              })}
            </div>
            {activeTab === "social" && <p className="mt-4 text-xs leading-5 text-brand-muted">Bundle totals are calculated at the single-design rate. Additional sizes, rush delivery, and extended revisions can be scoped separately.</p>}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 border-t border-brand-navy/15 pt-8 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-brand-purple">Not sure what you need?</p>
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-brand-navy sm:text-2xl">
                Let’s shape the right scope together.
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-brand-muted">Tell us what you’re building. We’ll recommend the right package or put together a custom quote.</p>
            </div>
            <Link href="/letstalk" className="mt-5 inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full border border-brand-purple/30 bg-white/60 px-5 py-3 text-sm font-semibold text-brand-purple transition hover:border-brand-purple hover:bg-white sm:mt-0 sm:w-fit">
              Get a custom quote<ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
