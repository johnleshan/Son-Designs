"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PROJECT_TYPES = [
  "Residential Architecture",
  "Interior Design",
  "Landscape Design",
  "Full Turnkey Project",
  "Commercial / Hospitality",
];

const BUDGETS = [
  "Under £50k",
  "£50k – £150k",
  "£150k – £500k",
  "£500k – £1m",
  "£1m+",
];

const inputClass =
  "w-full rounded-md border border-line bg-white/70 px-4 py-3.5 text-sm text-ink placeholder:text-slate/60 outline-none transition-all duration-300 focus:border-sage focus:ring-2 focus:ring-sage/30";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 border-b border-line bg-cream">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:py-28 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-10">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something"
            titleAccent="enduring."
            description="Tell us where you are in your journey — a new build, a renovation, or just an idea that has not found its shape yet. We reply within two working days."
          />

          <div className="mt-12 space-y-10">
            <Reveal delay={0.1}>
              <div className="border-t border-line pt-8">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
                  Email
                </p>
                <a
                  href="mailto:hello@son-designs.com"
                  className="mt-2 block font-display text-2xl font-medium text-ink transition-colors hover:text-terra-deep"
                >
                  hello@son-designs.com
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="border-t border-line pt-8">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
                  Phone
                </p>
                <a
                  href="tel:+442079460958"
                  className="mt-2 block font-display text-2xl font-medium text-ink transition-colors hover:text-terra-deep"
                >
                  +44 20 7946 0958
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="border-t border-line pt-8">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sage">
                  Studios
                </p>
                <div className="mt-3 grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-ink">London</p>
                    <p className="mt-1 text-sm text-slate">
                      48 Charlotte Row, EC2
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Seattle</p>
                    <p className="mt-1 text-sm text-slate">
                      1207 Elliott Ave, WA
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-xs leading-relaxed text-slate/80">
                  Currently working across the UK, Italy and Spain.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-line bg-white/50 p-8 shadow-[0_1px_0_rgba(32,31,29,0.04)] md:p-12">
            {sent ? (
              <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/15">
                  <svg
                    className="h-7 w-7 text-sage"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-6 font-display text-3xl font-medium text-ink">
                  Thank you.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate">
                  Your vision is in good hands. We&rsquo;ll be in touch within two
                  working days to arrange an initial conversation.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-terra-deep transition-colors hover:text-charcoal"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Project Type">
                    <select
                      name="projectType"
                      required
                      defaultValue=""
                      className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235F5D57%22 stroke-width=%221.5%22><path d=%22M6 9l6 6 6-6%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/></svg>')] bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
                    >
                      <option value="" disabled>
                        Select a discipline
                      </option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Budget Range">
                    <select
                      name="budget"
                      required
                      defaultValue=""
                      className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235F5D57%22 stroke-width=%221.5%22><path d=%22M6 9l6 6 6-6%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/></svg>')] bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Vision">
                  <textarea
                    name="vision"
                    rows={5}
                    placeholder="Tell us about the place, the site, and what you want it to feel like…"
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-charcoal px-8 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:-translate-y-px hover:bg-terra-deep sm:w-auto"
                >
                  Send Enquiry
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
                </button>

                <p className="text-xs leading-relaxed text-slate/70">
                  By sending this enquiry you agree to be contacted about your
                  project. We never share your details.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}