"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqItems = [
  {
    q: "Can I customize any package?",
    a: "Yes. Every package can be tailored to your project goals, timelines, and deliverable priorities.",
  },
  {
    q: "Do you work with businesses outside Nigeria?",
    a: "Yes. We work with local and international clients through a structured remote workflow.",
  },
  {
    q: "How fast can we start?",
    a: "Most projects start within a few business days after scope confirmation and initial payment.",
  },
  {
    q: "Do you offer payment milestones?",
    a: "Yes. We can split projects into milestone payments based on agreed phases.",
  },
  {
    q: "Will I get source files and handover assets?",
    a: "Yes. At project completion, we deliver organized handover files and implementation notes where needed.",
  },
  {
    q: "What support do I get after delivery?",
    a: "You get post-delivery support for revisions and launch guidance based on the selected package scope.",
  },
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <section className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-purple">FAQ</p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-brand-navy sm:text-4xl">Questions clients ask before starting</h2>
        </div>

        <div className="grid gap-3">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;

            return (
              <motion.div
                key={item.q}
                layout
                className={`rounded-[22px] border p-4 sm:p-5 ${
                  isOpen
                    ? "border-brand-purple/25 bg-gradient-to-r from-brand-purple/10 to-brand-lilac/10 shadow-[0_10px_25px_rgba(44,46,95,0.04)]"
                    : "border-brand-navy/10 bg-brand-surface"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span className="text-sm font-medium text-brand-navy sm:text-base">{item.q}</span>
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full ${isOpen ? "bg-white text-brand-purple ring-1 ring-brand-purple/20" : "bg-brand-canvas text-brand-muted"}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 pr-8 text-sm leading-relaxed text-brand-muted"
                  >
                    {item.a}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
