"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="brand-gradient relative overflow-hidden rounded-[30px] border border-white/10 p-6 sm:p-10 lg:p-16">
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-brand-purple/20 blur-2xl" />
          <div className="absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-brand-lilac/15 blur-2xl" />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto max-w-3xl text-center"
          >
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-lilac">Let’s build the next move</p>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Ready for a brand that looks sharper and sells clearer?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-sm text-white/80 sm:text-base">
              Book a short strategy call and get clear direction on the creative work that can move your business forward.
            </p>

            <Link href="/letstalk">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full rounded-full bg-gradient-to-r from-brand-purple to-[#6428b7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 sm:w-auto"
              >
                Book a strategy call
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
