"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const CategoryShowcase = ({ sectionId, title, description, samples, index }) => {
  return (
    <section id={sectionId} className="mb-20 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <div className="brand-gradient mb-7 flex flex-col gap-3 rounded-[26px] border border-white/10 px-5 py-5 text-white shadow-[0_18px_40px_rgba(5,6,21,0.14)] sm:px-7 sm:py-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-lilac">
                Category {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mb-2 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">{title}</h2>
              <p className="max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">{description}</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {samples.slice(0, 4).map((item, i) => (
              <Link
                key={`${item.title}-${i}`}
                href={`/ourwork/${item.slug}`}
                className="group block overflow-hidden rounded-[26px] border border-brand-navy/10 bg-brand-surface text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-purple/25 hover:shadow-[0_26px_42px_rgba(5,6,21,0.16)]"
                aria-label={`View project ${item.title}`}
              >
                <div className="relative h-[280px] overflow-hidden sm:h-[300px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/10 to-transparent" />
                  <div className="absolute left-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-brand-purple">Project</p>
                    <span className="rounded-full border border-brand-navy/10 bg-brand-canvas px-2 py-1 text-[8px] font-medium uppercase tracking-[0.12em] text-brand-muted">
                      View case
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.05em] text-brand-navy">{item.title}</h3>

                  <div className="mt-4 flex flex-wrap gap-2 text-[9px] uppercase tracking-[0.12em] text-brand-muted">
                    {item.tags?.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full border border-brand-navy/10 bg-brand-canvas px-2.5 py-1.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
