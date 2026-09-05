"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-line bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 lg:px-10">
        <a
          href="#top"
          className={`flex items-baseline gap-2 font-display text-2xl font-medium tracking-tight transition-colors ${
            solid ? "text-ink" : "text-cream"
          }`}
          onClick={() => setOpen(false)}
        >
          <span className="font-semibold">Son</span>
          <span className="text-sm font-normal uppercase tracking-[0.3em]">
            Designs
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors ${
                solid
                  ? "text-slate hover:text-ink"
                  : "text-cream/80 hover:text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center rounded-full px-6 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-px sm:inline-flex bg-charcoal text-cream hover:bg-terra-deep"
          >
            Start Your Project
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              solid ? "text-ink" : "text-cream"
            }`}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-6 transition-all duration-300 ${
                  open ? "top-1.5 rotate-45 bg-charcoal" : "bg-current"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-6 transition-all duration-300 ${
                  open ? "opacity-0" : "bg-current"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-6 transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45 bg-charcoal" : "bg-current"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-cream lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-8">
              {LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-4 font-display text-3xl font-medium text-ink transition-colors hover:text-terra"
                >
                  {link.label}
                  <span className="text-xs font-body font-semibold tracking-[0.2em] text-terra">
                    0{i + 1}
                  </span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-cream"
              >
                Start Your Project
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}