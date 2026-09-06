import Reveal from "./Reveal";

const PRESS = [
  { name: "AD", serif: true },
  { name: "ELLE DECOR", serif: true },
  { name: "DEZEEN", serif: false },
  { name: "WALLPAPER*", serif: false },
  { name: "DAILY NATION", serif: true },
  { name: "THE EAST AFRICAN", serif: true },
];

export default function PressStrip() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16 lg:px-10">
        <Reveal>
          <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-slate">
            Our work has been featured in
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {PRESS.map((item) => (
              <span
                key={item.name}
                className={`select-none text-slate/55 transition-colors duration-300 hover:text-charcoal grayscale ${
                  item.serif
                    ? "font-display text-2xl font-medium tracking-wide md:text-3xl"
                    : "text-sm font-bold uppercase tracking-[0.22em] md:text-base"
                }`}
              >
                {item.name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}