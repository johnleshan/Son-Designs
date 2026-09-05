"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    no: "01",
    title: "Discovery & Consultation",
    duration: "Weeks 1–3",
    body: "We meet on site, hear the whole story and run Phase Zero — a forensic pass over site, brief, budget and lifestyle so nothing is assumed.",
  },
  {
    no: "02",
    title: "Concept Development",
    duration: "Weeks 4–8",
    body: "Spatial ideas, material language and early drawings tested against the brief. One clear concept is chosen, not a collage of maybes.",
  },
  {
    no: "03",
    title: "Design & Planning",
    duration: "Weeks 8–20",
    body: "Full planning and technical design — working drawings, schedules and specifications precise enough to cost, permit and ultimately build.",
  },
  {
    no: "04",
    title: "Construction & Delivery",
    duration: "On site",
    body: "We manage tender, contracts and the site itself — protecting quality, programme and budget until the last fixing is in place.",
  },
];

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section id="process" className="scroll-mt-20 border-b border-line bg-cream-deep/60">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="The process"
              title="A measured route from"
              titleAccent="first thought to final key."
              description="Four phases, each with a clear outcome and a senior partner accountable for it. The calm you feel in the finished home comes from this structure."
            />
            <Reveal delay={0.2}>
              <p className="mt-8 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-sage">
                <span className="inline-block h-px w-6 bg-sage" aria-hidden="true" />
                12–18 months, typical project
              </p>
            </Reveal>
          </div>

          <div ref={ref} className="relative">
            <div className="absolute left-[1.05rem] top-2 bottom-2 w-px bg-line md:left-[1.3rem]" aria-hidden="true">
              <motion.div
                style={reduce ? undefined : { scaleY }}
                className="h-full w-full origin-top bg-sage"
              />
            </div>

            <div className="space-y-14 md:space-y-20">
              {STEPS.map((step, i) => (
                <Reveal key={step.no} delay={i * 0.05}>
                  <div className="grid grid-cols-[3rem_1fr] gap-6 md:grid-cols-[4rem_1fr] md:gap-10">
                    <div className="flex flex-col items-center">
                      <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-sage/60 bg-cream md:h-10 md:w-10">
                        <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="border-b border-line pb-10 md:pb-14">
                      <div className="grid gap-2 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-6">
                        <span className="font-display text-6xl font-light leading-none text-charcoal/15 md:text-8xl">
                          {step.no}
                        </span>
                        <span className="hidden self-start text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-sage md:block">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="-mt-7 font-display text-3xl font-medium text-ink md:-mt-9 md:text-4xl">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate md:text-base">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}