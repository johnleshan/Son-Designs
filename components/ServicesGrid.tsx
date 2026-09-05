import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    no: "01",
    title: "Architectural Design",
    body: "New builds, sensitive extensions and heritage retrofit — structure and form shaped around the way you actually live.",
  },
  {
    no: "02",
    title: "Interior Design",
    body: "Materiality, light and proportion composed into rooms that feel collected over time, not decorated overnight.",
  },
  {
    no: "03",
    title: "Landscape Design",
    body: "Outdoor rooms designed in dialogue with the building — courtyards, terraces and gardens that extend the interior.",
  },
  {
    no: "04",
    title: "Project Management",
    body: "Tender, contract and site delivery with disciplined budgets and clear communication from first drawing to final fixing.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="Four disciplines,"
            titleAccent="one vision."
          />
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-slate md:pb-2">
              Every project is led by a senior partner and carried end-to-end —
              no handoffs, no surprises, no loss of intent.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.no}
              delay={i * 0.08}
              className="h-full"
            >
              <div className="group flex h-full flex-col justify-between bg-cream p-8 transition-colors duration-500 hover:bg-cream-deep">
                <div>
                  <div className="flex items-start justify-between">
                    <span className="font-display text-3xl italic text-terra/70">
                      {service.no}
                    </span>
                    <svg
                      className="h-5 w-5 -translate-x-1 translate-y-1 text-charcoal opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7m0 0H8m9 0v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-medium leading-tight text-ink">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-slate">
                  {service.body}
                </p>
                <span className="mt-8 h-px w-full bg-line transition-colors duration-500 group-hover:bg-sage/50" aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}