"use client";

import React from "react";
import {
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Lightbulb,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Quality Craftsmanship",
    description:
      "Every pixel and interaction is shaped with intentional care and elegance.",
    icon: <CheckCircle className="text-brand-purple w-5 h-5" />,
  },
  {
    title: "Timely Delivery",
    description: "We deliver with precision without compromising timelines or quality.",
    icon: <Clock className="text-brand-purple w-5 h-5" />,
  },
  {
    title: "Fair and Transparent Pricing",
    description: "No surprises, just honest and value-driven pricing.",
    icon: <DollarSign className="text-brand-purple w-5 h-5" />,
  },
  {
    title: "Client-Centric Approach",
    description: "You talk, we listen, then we build with your goals at the center.",
    icon: <Users className="text-brand-purple w-5 h-5" />,
  },
  {
    title: "Creative Strategy and Innovation",
    description: "Fresh ideas, smart strategy, and effective execution.",
    icon: <Lightbulb className="text-brand-purple w-5 h-5" />,
  },
  {
    title: "Diverse Portfolio and Industry Reach",
    description: "From startups to enterprise, we adapt and deliver excellence.",
    icon: <Globe className="text-brand-purple w-5 h-5" />,
  },
];

const WhyWeDiffer = () => {
  return (
    <section className="bg-brand-canvas py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl tracking-tight text-brand-ink">
          Why We Are{" "}
          <span className="bg-gradient-to-r from-brand-purple to-brand-lilac text-transparent bg-clip-text">
            Different
          </span>
        </h2>
        <p className="text-brand-muted mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          We do not just deliver work. We deliver clarity, purpose, and performance.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border border-brand-navy/10 bg-brand-surface p-5 shadow-sm transition duration-300 group hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-canvas shadow-inner transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-brand-navy">{item.title}</h3>
            </div>
            <p className="text-brand-muted text-sm leading-snug">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyWeDiffer;
