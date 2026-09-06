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

export default function Stats() {
  return (
    <section className="border-b border-line bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="font-display text-6xl font-light text-cream md:text-7xl">
                {stat.value}
                {stat.suffix}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
