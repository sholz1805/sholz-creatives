"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Why us", isDropdown: true },
    { href: "/services", label: "Services" },
    { href: "/ourwork", label: "Work" },
    { href: "/pricing", label: "Pricing" },
  ];

  const isActive = (href) => pathname === href;

  const aboutLinks = [
    {
      title: "Strategy before design",
      href: "/about",
      text: "We align your offer, audience, and message before the creative work begins.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Creative team collaborating around a table",
    },
    {
      title: "Creative that moves brands",
      href: "/services",
      text: "Brand identity, web, and campaign design built to move your business forward.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Creative visual representing brand design",
    },
    {
      title: "Work built for impact",
      href: "/ourwork",
      text: "Explore the visual systems and campaigns we have created for growing brands.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Designer working at a computer in a creative studio",
    },
  ];

  return (
 
<nav
  ref={navRef}
  className={`fixed inset-x-0 top-0 z-50 border-none outline-none transition-all duration-300 ${
    isScrolled
      ? "bg-brand-deep/95 backdrop-blur-xl"
      : "bg-brand-deep/90 backdrop-blur-lg"
  }`}
>

      {/* Main Navbar */}
      <div className="mx-auto flex h-[64px] max-w-6xl items-center justify-between px-4 sm:px-6 md:h-[72px] md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Sholz Creatives home"
        >
          <Image
            src="/logo/Sholz_Creatives_Logo.svg"
            width={52}
            height={52}
            alt="Sholz Creatives Logo"
            className="h-9 w-9 md:h-10 md:w-10"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((item) => {
            if (item.isDropdown) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setIsAboutOpen((prev) => !prev)}
                    className={`inline-flex items-center gap-2 text-[13px] transition-colors duration-200 ${
                      isActive(item.href) || isAboutOpen
                        ? "font-semibold text-brand-lilac"
                        : "text-slate-200 hover:text-white"
                    }`}
                    aria-expanded={isAboutOpen}
                    aria-controls="why-us-dropdown"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isAboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    id="why-us-dropdown"
                    aria-hidden={!isAboutOpen}
                    inert={!isAboutOpen}
                    className={`fixed left-0 top-[72px] z-40 w-screen bg-brand-canvas px-6 py-12 shadow-[0_24px_48px_rgba(44,46,95,0.08)] transition-all duration-300 sm:px-8 sm:py-14 xl:px-12 xl:py-[72px] ${
                      isAboutOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 xl:gap-12">
                      {aboutLinks.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setIsAboutOpen(false)}
                          className="group text-left"
                        >
                          <div className="relative mb-5 aspect-[2.1/1] overflow-hidden rounded-[5px] bg-[#e5e7df]">
                            <Image
                              src={item.image}
                              alt={item.imageAlt}
                              fill
                              unoptimized
                              sizes="(min-width: 768px) 32vw, 100vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                          </div>
                          <h3 className="text-[13px] font-semibold tracking-[-0.02em] text-brand-navy">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-[12px] leading-5 text-brand-muted">
                            {item.text}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] transition-colors duration-200 ${
                  isActive(item.href)
                    ? "font-semibold text-brand-lilac"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center md:flex">
          <Link href="/letstalk">
            <button className="rounded-full bg-gradient-to-r from-brand-purple to-[#6428b7] px-5 py-2.5 text-[12px] font-semibold text-white shadow-lg shadow-brand-purple/20 transition duration-300 hover:-translate-y-0.5 hover:brightness-110">
              Book a call
            </button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2.5 md:hidden">
          <Link href="/letstalk">
            <button className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/15">
              Book
            </button>
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:bg-white/15"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-[64px] px-4 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-brand-deep/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
          {/* Vertical Navigation */}
          <div className="flex flex-col gap-1.5">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-white/10 font-semibold text-brand-lilac"
                    : "text-slate-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link
            href="/letstalk"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 block"
          >
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-[#6428b7] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-purple/20 transition duration-300 hover:-translate-y-0.5 hover:brightness-110">
              <Sparkles className="h-4 w-4" />
              Book a strategy call
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
