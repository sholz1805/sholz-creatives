"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Send, X, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const socials = [
  { label: "Instagram", icon: Instagram },
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
  { label: "YouTube", icon: Youtube },
];

const Footer = () => {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [message, setMessage] = useState(
    "Hi Sholz Creatives, I'd like to discuss a project."
  );

  useEffect(() => {
    if (!isWhatsAppOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsWhatsAppOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isWhatsAppOpen]);

  const whatsappHref = `https://wa.me/2348086101156?text=${encodeURIComponent(
    message.trim() || "Hi Sholz Creatives, I'd like to discuss a project."
  )}`;

  return (
    <footer className="brand-gradient text-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.3fr_0.7fr_1fr] md:gap-12">
          <div>
            <Link
              href="/"
              aria-label="Sholz Creatives home"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/logo/Sholz_Logo_White.svg"
                alt="Sholz Creatives Logo"
                width={42}
                height={42}
                className="h-9 w-9"
              />
              <span>
                <span className="block text-sm font-semibold">Sholz Creatives</span>
                <span className="mt-0.5 block text-xs text-white/60">Creative studio for growing brands</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
              Strategy-led brand identity, digital experiences, and campaign creative built to move businesses forward.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-lilac">Explore</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li><Link href="/about" className="transition hover:text-white">Why Sholz</Link></li>
              <li><Link href="/services" className="transition hover:text-white">Services</Link></li>
              <li><Link href="/ourwork" className="transition hover:text-white">Selected work</Link></li>
              <li><Link href="/pricing" className="transition hover:text-white">Pricing</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-lilac">Start a project</h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Have a project in mind? Tell us what you’re building and we’ll help you find the right next step.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/letstalk"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-purple to-[#6428b7] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto"
              >
                Let’s talk
              </Link>
              <button
                type="button"
                onClick={() => setIsWhatsAppOpen(true)}
                aria-expanded={isWhatsAppOpen}
                aria-controls="whatsapp-chat-window"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-lilac/30 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-brand-lilac hover:bg-white/10 sm:w-auto"
              >
                <FaWhatsapp className="h-4 w-4 text-brand-lilac" aria-hidden="true" />
                WhatsApp us
              </button>
            </div>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`${label} link coming soon`}
                  title={`${label} link coming soon`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:border-brand-lilac hover:bg-white/10 hover:text-brand-lilac"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
            <a
              href="mailto:sholzcreative@gmail.com"
              className="mt-4 block w-fit text-sm text-white/70 transition hover:text-white"
            >
              sholzcreative@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sholz Creatives. All rights reserved.</p>
          <a href="tel:+2348086101156" className="transition hover:text-white/80">
            +234 808 610 1156
          </a>
        </div>
      </div>

      <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        {isWhatsAppOpen && (
          <section
            id="whatsapp-chat-window"
            aria-label="WhatsApp chat preview"
            className="w-[min(360px,calc(100vw-2.5rem))] overflow-hidden rounded-[24px] border border-brand-navy/10 bg-brand-surface shadow-[0_24px_70px_rgba(5,6,21,0.28)]"
          >
            <div className="brand-gradient flex items-center justify-between px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10">
                  <FaWhatsapp className="h-5 w-5 text-brand-lilac" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-sm font-semibold">Sholz Creatives</h2>
                  <p className="mt-0.5 text-xs text-white/70">Typically replies within a day</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsWhatsAppOpen(false)}
                aria-label="Close WhatsApp chat preview"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-brand-canvas/70 p-4">
              <p className="mb-3 text-xs leading-relaxed text-brand-muted">
                Hello! Tell us a little about your project and we’ll pick up the conversation on WhatsApp.
              </p>
              <label htmlFor="whatsapp-message" className="sr-only">
                Your message
              </label>
              <textarea
                id="whatsapp-message"
                rows={3}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write a message..."
                className="w-full resize-none rounded-2xl border border-brand-navy/10 bg-brand-surface p-3 text-sm text-brand-ink outline-none transition placeholder:text-brand-muted/70 focus:border-brand-purple/40 focus:ring-2 focus:ring-brand-purple/15"
              />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-95"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Continue in WhatsApp
              </a>
            </div>
          </section>
        )}

        <button
          type="button"
          onClick={() => setIsWhatsAppOpen((open) => !open)}
          aria-label={isWhatsAppOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          aria-expanded={isWhatsAppOpen}
          aria-controls="whatsapp-chat-window"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(5,6,21,0.28)] transition hover:scale-105 hover:brightness-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-purple/30"
        >
          {isWhatsAppOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
