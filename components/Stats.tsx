"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 7, suffix: "", label: "Years of Practice" },
  { value: 100, suffix: "%", label: "Passion for Craft" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(() => (reduce ? value : 0));

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-b border-line bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-64px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="font-display text-6xl font-light text-cream md:text-7xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-sage">
                {stat.label}
              </span>
              {i < STATS.length - 1 && (
                <span
                  className="mt-3 h-8 w-px bg-cream/15 sm:hidden"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}