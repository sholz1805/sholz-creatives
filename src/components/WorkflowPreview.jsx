"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CircleDot, Workflow } from "lucide-react";

const columns = [
  {
    title: "Ideas",
    tone: "from-brand-canvas to-brand-purple/10",
    cards: [
      "Campaign brief",
      "Landing page plan",
      "Visual moodboard",
    ],
  },
  {
    title: "In Progress",
    tone: "from-brand-purple/10 to-brand-lilac/20",
    cards: [
      "Brand strategy doc",
      "Homepage redesign",
      "Event flyer batch",
    ],
  },
  {
    title: "Delivered",
    tone: "from-brand-lilac/15 to-brand-canvas",
    cards: [
      "Logo suite approved",
      "Website handover",
      "Launch assets exported",
    ],
  },
];

const WorkflowPreview = () => {
  return (
    <section className="bg-brand-surface py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-7">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-brand-purple">
            Workflow Clarity
          </p>
          <h2 className="mb-2 text-2xl text-brand-navy sm:text-3xl">
            Work Progress You Can Track in Real Time
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-brand-muted sm:text-base">
            Every project moves through a visible pipeline so you always know what is being worked on and what is next.
          </p>
        </div>

        <div className="rounded-2xl border border-brand-navy/10 bg-brand-canvas p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="inline-flex items-center gap-2 text-sm text-brand-navy">
              <Workflow className="h-4 w-4 text-brand-purple" />
              Weekly Delivery Board
            </div>
            <div className="text-xs text-brand-muted">Updated today</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {columns.map((column, colIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: colIndex * 0.08 }}
                className="rounded-xl border border-brand-navy/10 bg-brand-surface p-3"
              >
                <div className={`rounded-lg bg-gradient-to-r ${column.tone} px-3 py-2 mb-3`}>
                  <p className="text-sm text-brand-navy">{column.title}</p>
                </div>

                <div className="space-y-2">
                  {column.cards.map((card) => (
                    <div
                      key={card}
                      className="flex items-center gap-2 rounded-lg border border-brand-navy/10 bg-brand-surface px-3 py-2 text-sm text-brand-ink"
                    >
                      {column.title === "Delivered" ? (
                        <CheckCircle2 className="h-4 w-4 text-brand-purple" />
                      ) : (
                        <CircleDot className="h-4 w-4 text-brand-lilac" />
                      )}
                      <span>{card}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowPreview;
