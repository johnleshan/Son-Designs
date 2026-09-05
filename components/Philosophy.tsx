"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Reveal from "./Reveal";
import { IMG } from "@/lib/images";

const NOTES = [
  {
    no: "01",
    title: "Immersion",
    body: "We live inside the site and the brief — light, history, climate, context — before a single line is drawn.",
  },
  {
    no: "02",
    title: "Interrogation",
    body: "Client vision, budget and risk are tested honestly. Every assumption is questioned, every priority ranked.",
  },
  {
    no: "03",
    title: "Direction",
    body: "A written creative brief becomes the North Star for architecture, interiors and landscape alike.",
  },
];

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      id="studio"
      className="scroll-mt-20 border-b border-line"
    >
      <div className="grid lg:grid-cols-2">
        {/* Left — image */}
        <div className="relative h-[52vh] min-h-[420px] overflow-hidden lg:h-auto lg:min-h-[820px]">
          <motion.div style={reduce ? undefined : { y }} className="absolute inset-0">
            <Image
              src={IMG.philosophy}
              alt="A light-filled interior from a Son Designs project"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 text-cream">
            <span className="font-display text-sm italic">
              Casa del Sole — Lake Como, Italy
            </span>
          </div>
        </div>

        {/* Right — content */}
        <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-16 lg:py-28">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-terra">
              <span className="inline-block h-px w-8 bg-terra" aria-hidden="true" />
              The Studio
            </p>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.08] text-ink md:text-5xl">
              Phase Zero is where every <em className="italic text-terra">good build</em> begins.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-slate md:text-lg">
              Before architecture there is strategy. Phase Zero is our pre-design
              discipline — the careful, sometimes uncomfortable thinking that
              turns a wish into a brief, and a brief into spaces that feel
              inevitable. It is why our homes read as calm, precise and quietly
              extraordinary.
            </p>
          </Reveal>

          <div className="mt-12 space-y-2">
            {NOTES.map((note, i) => (
              <Reveal key={note.no} delay={0.1 + i * 0.1}>
                <div className="group grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line py-6 transition-colors">
                  <span className="pt-1 font-display text-2xl italic text-terra/80">
                    {note.no}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                      {note.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {note.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <a
              href="#process"
              className="mt-10 inline-flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-charcoal transition-all duration-300 hover:-translate-y-px hover:text-terra-deep"
            >
              Explore the process
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}