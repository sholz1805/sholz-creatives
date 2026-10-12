"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariam Bello",
    role: "Marketing Lead, Kora Launch",
    text: "Sholz gave our event and campaign visuals a premium finish that felt strategic, not decorative. The work elevated how people responded to the brand in a very short time.",
  },
  {
    name: "Daniel Asare",
    role: "Founder, Northline Studio",
    text: "The clarity of the design and the speed of execution were exactly what we needed. We walked away with a stronger identity and a better digital story.",
  },
  {
    name: "Aisha Mohammed",
    role: "Operations Director, Bloom Haus",
    text: "Their process is calm, informed, and sharp. Every design decision had purpose, and the final output looked polished enough to compete with much larger brands.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-brand-canvas px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-purple">Testimonials</p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-brand-navy sm:text-5xl">
            Clear process. Stronger brands. Better outcomes.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[28px] border border-brand-navy/10 bg-brand-surface p-6 shadow-[0_18px_40px_rgba(44,46,95,0.06)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-1 text-brand-purple">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-brand-lilac" />
              </div>

              <p className="mb-6 text-sm leading-7 text-brand-muted">“{testimonial.text}”</p>

              <div className="border-t border-brand-navy/10 pt-4">
                <h3 className="text-base font-semibold text-brand-navy">{testimonial.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-brand-muted">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;