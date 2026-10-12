import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { portfolioCategories } from "@/data/portfolioData";

const allProjects = portfolioCategories.flatMap((category) =>
  category.samples.map((sample) => ({
    ...sample,
    categoryTitle: category.title,
  }))
);

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pb-20 pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/ourwork"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[340px] lg:min-h-[520px]">
              <Image
                src={project.src}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            <div className="brand-gradient flex flex-col justify-between p-6 text-white sm:p-8">
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-violet-200">{project.categoryTitle}</p>
                <h1 className="text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">{project.title}</h1>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">{project.summary}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags && project.tags.length > 0 ? (
                  project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-slate-200"
                    >
                      {tag}
                    </span>
                  ))
                ) : (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-slate-200">
                    Creative direction
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-purple-700">Challenge</p>
            <p className="text-sm leading-relaxed text-slate-600">{project.challenge}</p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-purple-700">Solution</p>
            <p className="text-sm leading-relaxed text-slate-600">{project.summary}</p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-purple-700">Outcome</p>
            <p className="text-sm leading-relaxed text-slate-600">{project.outcome}</p>
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-purple-700">Project gallery</p>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-900">More details and visuals</h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {project.detailImages.map((image, index) => (
              <div
                key={`${project.slug}-${index}`}
                className={`relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <div className={`relative ${index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image
                    src={image}
                    alt={`${project.title} detail ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="brand-gradient mt-16 rounded-[32px] border border-white/10 p-6 text-center text-white shadow-[0_24px_60px_rgba(5,6,21,0.18)] sm:p-8">
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-brand-lilac">Next step</p>
          <h3 className="text-3xl font-semibold tracking-[-0.05em]">Need a brand and campaign direction like this?</h3>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/letstalk"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-[#6428b7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-purple/20 transition hover:brightness-110 sm:w-auto"
            >
              Start your project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ourwork"
              className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              View more work
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
