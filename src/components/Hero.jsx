"use client";

import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const galleryColumns = [
  {
    direction: "up",
    speed: "32s",
    offset: "0%",
    width: "w-[145px] sm:w-[155px]",
    cards: [
      { src: "/images/WebBanner.png", ratio: "portrait" },
      { src: "/images/Monday!.png", ratio: "square" },
      { src: "/images/GO.png", ratio: "portrait" },
      {
        src: "/images/Sholz_Creatives_LogoPack.png",
        ratio: "square",
      },
      { src: "/images/WebBanner.png", ratio: "portrait" },
    ],
  },

  {
    direction: "down",
    speed: "38s",
    offset: "-18%",
    width: "w-[150px] sm:w-[160px]",
    cards: [
      { src: "/images/Monday!.png", ratio: "portrait" },
      { src: "/images/GO.png", ratio: "square" },
      {
        src: "/images/Sholz_Creatives_LogoPack.png",
        ratio: "portrait",
      },
      { src: "/images/WebBanner.png", ratio: "square" },
      { src: "/images/Monday!.png", ratio: "portrait" },
    ],
  },

  {
    direction: "up",
    speed: "35s",
    offset: "-8%",
    width: "w-[145px] sm:w-[155px]",
    cards: [
      { src: "/images/GO.png", ratio: "square" },
      {
        src: "/images/Sholz_Creatives_LogoPack.png",
        ratio: "portrait",
      },
      { src: "/images/WebBanner.png", ratio: "square" },
      { src: "/images/Monday!.png", ratio: "portrait" },
      { src: "/images/GO.png", ratio: "square" },
    ],
  },

  {
    direction: "down",
    speed: "41s",
    offset: "-25%",
    width: "w-[140px] sm:w-[150px]",
    cards: [
      { src: "/images/WebBanner.png", ratio: "portrait" },
      { src: "/images/GO.png", ratio: "square" },
      { src: "/images/Monday!.png", ratio: "portrait" },
      {
        src: "/images/Sholz_Creatives_LogoPack.png",
        ratio: "square",
      },
      { src: "/images/WebBanner.png", ratio: "portrait" },
    ],
  },

  {
    direction: "up",
    speed: "37s",
    offset: "-12%",
    width: "w-[145px] sm:w-[155px]",
    cards: [
      {
        src: "/images/Sholz_Creatives_LogoPack.png",
        ratio: "square",
      },
      { src: "/images/Monday!.png", ratio: "portrait" },
      { src: "/images/WebBanner.png", ratio: "square" },
      { src: "/images/GO.png", ratio: "portrait" },
      { src: "/images/Monday!.png", ratio: "square" },
    ],
  },
  {
    direction: "down",
    speed: "39s",
    offset: "-18%",
    width: "w-[140px] sm:w-[150px]",
    cards: [
      { src: "/images/GO.png", ratio: "portrait" },
      { src: "/images/WebBanner.png", ratio: "square" },
      { src: "/images/Monday!.png", ratio: "portrait" },
      {
        src: "/images/Sholz_Creatives_LogoPack.png",
        ratio: "square",
      },
      { src: "/images/GO.png", ratio: "portrait" },
    ],
  },
];



const mobileRowOne = [
  "/images/WebBanner.png",
  "/images/Monday!.png",
  "/images/GO.png",
  "/images/Sholz_Creatives_LogoPack.png",
  "/images/WebBanner.png",
  "/images/Monday!.png",
];

const mobileRowTwo = [
  "/images/GO.png",
  "/images/Sholz_Creatives_LogoPack.png",
  "/images/WebBanner.png",
  "/images/Monday!.png",
  "/images/GO.png",
  "/images/Sholz_Creatives_LogoPack.png",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-deep text-white">
      {/* BG*/}

      <div className="hero-brand-gradient absolute inset-0" />

      {/* Ambient glow */}
      <div className="absolute left-[42%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-purple/10 blur-[140px]" />

      <div className="absolute right-[-5%] top-[20%] h-[400px] w-[400px] rounded-full bg-brand-lilac/10 blur-[120px]" />

      {/*DESKTOP MOVING CREATIVE GALLERY */}

      <div className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden lg:block">
        <div className="absolute bottom-[-12%] left-[39%] right-[-2%] top-[-14%]">
          <div className="gallery-mask absolute inset-0">
            <div className="flex h-full w-full items-start justify-end gap-3 xl:gap-4">
              {galleryColumns.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className={`relative h-[125%] shrink-0 ${column.width}`}
                  style={{
                    transform: `translateY(${column.offset})`,
                  }}
                >
                  <div
                    className={`gallery-track ${
                      column.direction === "up"
                        ? "gallery-track-up"
                        : "gallery-track-down"
                    }`}
                    style={{
                      animationDuration: column.speed,
                    }}
                  >
                    {column.cards.map((card, index) => (
                      <GalleryCard
                        key={`first-${columnIndex}-${index}`}
                        card={card}
                      />
                    ))}

                    {column.cards.map((card, index) => (
                      <GalleryCard
                        key={`second-${columnIndex}-${index}`}
                        card={card}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left fade into content */}
        <div className="absolute inset-y-0 left-[25%] w-[38%] bg-gradient-to-r from-brand-deep via-brand-deep/90 to-transparent" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-brand-deep to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-brand-deep to-transparent" />

        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-brand-deep/80 to-transparent" />
      </div>

      {/*  CONTENT
           */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 md:pb-28 md:pt-32">
        <div className="grid min-h-[calc(100vh-9rem)] items-center lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-20 max-w-2xl">
           
            {/* Heading */}
            <h1 className="max-w-[11ch] text-5xl font-semibold leading-[0.96] tracking-[-0.065em] text-white sm:text-6xl lg:text-[4.5rem]">
              Building{" "}
              <span className="font-medium italic text-brand-lilac">
                brands
              </span>{" "}
              that move people.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              We design high-impact identities, digital experiences, and
              campaigns that give ambitious brands a sharper presence.
            </p>


            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              <Link
                href="/letstalk"
                className="w-full sm:w-auto"
              >
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto">
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>

              <Link
                href="/ourwork"
                className="w-full sm:w-auto"
              >
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/10 sm:w-auto">
                  <Play className="h-4 w-4" />
                  See our work
                </button>
              </Link>
            </div>

            
          </div>

          {/* Desktop gallery occupies this space visually */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/*  MOBILE TWO-ROW GALLERY*/}

      <div className="relative z-10 mt-2 overflow-hidden pb-16 lg:hidden">
        <div className="mobile-gallery-mask space-y-3">
          {/* Row 1 → */}
          <div className="mobile-gallery-track mobile-gallery-right">
            {[...mobileRowOne, ...mobileRowOne].map((src, index) => (
              <MobileGalleryCard
                key={`row-one-${index}`}
                src={src}
              />
            ))}
          </div>

          {/* Row 2 ← */}
          <div className="mobile-gallery-track mobile-gallery-left">
            {[...mobileRowTwo, ...mobileRowTwo].map((src, index) => (
              <MobileGalleryCard
                key={`row-two-${index}`}
                src={src}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION*/}

      <style jsx>{`
        /* Desktop */

        .gallery-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 7%,
            black 94%,
            transparent 100%
          );

          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 7%,
            black 94%,
            transparent 100%
          );
        }

        .gallery-track {
          display: flex;
          flex-direction: column;
          gap: 16px;
          will-change: transform;
        }

        .gallery-track-up {
          animation-name: galleryUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .gallery-track-down {
          animation-name: galleryDown;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes galleryUp {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(-50%);
          }
        }

        @keyframes galleryDown {
          from {
            transform: translateY(-50%);
          }

          to {
            transform: translateY(0);
          }
        }

        /* Mobile */

        .mobile-gallery-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );

          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
        }

        .mobile-gallery-track {
          display: flex;
          width: max-content;
          gap: 10px;
          will-change: transform;
        }

        .mobile-gallery-right {
          animation: mobileRight 30s linear infinite;
        }

        .mobile-gallery-left {
          animation: mobileLeft 34s linear infinite;
        }

        @keyframes mobileRight {
          from {
            transform: translateX(-25%);
          }

          to {
            transform: translateX(0);
          }
        }

        @keyframes mobileLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-25%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-track,
          .mobile-gallery-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* DESKTOP GALLERY CARD */

function GalleryCard({ card }) {
  const isGif = /\.gif($|\\?)/i.test(card.src);

  const aspectClass =
    card.ratio === "portrait"
      ? "aspect-[4/5]"
      : "aspect-square";

  return (
    <div className="group relative w-full shrink-0 overflow-hidden rounded-[18px] border border-white/10 bg-brand-deep/80 shadow-[0_20px_50px_rgba(0,0,0,0.30)] transition-all duration-500 hover:scale-[1.03] hover:border-brand-lilac/60 hover:shadow-[0_24px_60px_rgba(139,66,241,0.22)]">
      <div className={`relative ${aspectClass}`}>
        {isGif ? (
          <img
            src={card.src}
            alt="Creative portfolio tile"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <Image
            src={card.src}
            alt="Creative portfolio tile"
            fill
            sizes="160px"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/10" />
      </div>
    </div>
  );
}

/* MOBILE GALLERY CARD */

function MobileGalleryCard({ src }) {
  const isGif = /\.gif($|\\?)/i.test(src);

  return (
    <div className="group relative h-[158px] w-[126px] shrink-0 overflow-hidden rounded-[15px] border border-white/10 bg-brand-deep shadow-[0_15px_35px_rgba(0,0,0,0.28)] transition-all duration-500 hover:scale-[1.04] hover:border-brand-lilac/60">
      {isGif ? (
        <img
          src={src}
          alt="Creative portfolio tile"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      ) : (
        <Image
          src={src}
          alt="Creative portfolio tile"
          fill
          sizes="126px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/10" />
    </div>
  );
}

export default Hero;
