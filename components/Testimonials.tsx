"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";

const QUOTES = [
  {
    quote:
      "What stood out most was their attention to detail at the earliest stages. Phase Zero gave the whole project a clarity we hadn't found anywhere else — and it never wavered.",
    name: "Elena Rossi",
    context: "Villa Meridiana, Lake Como",
  },
  {
    quote:
      "They translated a very personal brief into something calm, precise and quietly extraordinary. The house feels as though it has always belonged on this hillside.",
    name: "James & Sophie Hartley",
    context: "Sage Terraces, London",
  },
  {
    quote:
      "From first drawing to final fixing, every decision felt considered. No guesswork, no surprises — just beautifully made choices, delivered on time and on budget.",
    name: "Marta Delgado",
    context: "Casa Serena, Seville",
  },
];

const DURATION = 6500;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % QUOTES.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + QUOTES.length) % QUOTES.length);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(next, DURATION);
    return () => window.clearInterval(id);
  }, [paused, reduce, next]);

  const quote = QUOTES[index];

  return (
    <section
      className="border-b border-line bg-cream-deep/60"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-terra">
            <span className="inline-block h-px w-8 bg-terra" aria-hidden="true" />
            Client voices
            <span className="inline-block h-px w-8 bg-terra" aria-hidden="true" />
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-12 min-h-[19rem] md:min-h-[17rem]">
          <span
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[7rem] leading-none text-terra/20 md:text-[9rem]"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <p className="text-center font-display text-2xl font-medium leading-snug text-ink md:text-4xl md:leading-snug">
                {quote.quote}
              </p>
              <footer className="mt-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal">
                  {quote.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate">
                  {quote.context}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </Reveal>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-charcoal transition-all duration-300 hover:-translate-y-px hover:border-charcoal hover:bg-charcoal hover:text-cream"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M19 12H5m0 0l6 6m-6-6l6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2.5">
            {QUOTES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-terra" : "w-1.5 bg-charcoal/25 hover:bg-charcoal/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-charcoal transition-all duration-300 hover:-translate-y-px hover:border-charcoal hover:bg-charcoal hover:text-cream"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 12h14m0 0l-6 6m6-6l-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}