"use client";

import Image from "next/image";
import { IMG } from "@/lib/images";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="absolute inset-x-0 -top-[12%] h-[124%]">
        <Image
          src={IMG.hero}
          alt="A serene architectural interior designed by Son Designs"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(32,31,29,0.42) 0%, rgba(32,31,29,0.18) 40%, rgba(32,31,29,0.66) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-28 pt-28 lg:px-10"
        style={{ opacity: 1 }}
      >
        <p
          className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.34em]"
          style={{ color: "#F9F6F0", opacity: 1 }}
        >
          <span
            className="inline-block h-px w-10 bg-terra"
            aria-hidden="true"
          />
          Son Designs — Architecture &amp; Interiors
        </p>

        <h1
          className="mt-8 max-w-4xl font-display text-[2.85rem] font-medium leading-[1.04] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          style={{ color: "#F9F6F0", opacity: 1 }}
        >
          Designing spaces that <em className="italic text-terra">breathe</em>,
          inspire, and endure.
        </h1>

        <p
          className="mt-8 max-w-xl text-base leading-relaxed md:text-lg"
          style={{ color: "rgba(249,246,240,0.88)", opacity: 1 }}
        >
          Architecture and interior design for spaces made to last. We work
          across Kenya and East Africa.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-cream/50 px-8 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:-translate-y-px hover:border-cream hover:bg-cream/10"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-terra px-8 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-px hover:bg-terra-deep"
          >
            Start Your Project
          </a>
        </div>
      </div>

      <a
        href="#studio"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/80 transition-colors hover:text-cream"
      >
        <span className="flex flex-col items-center gap-2">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em]">
            Scroll
          </span>
          <svg
            className="animate-chevron h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </section>
  );
}