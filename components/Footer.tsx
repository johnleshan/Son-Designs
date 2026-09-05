import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-baseline gap-2 font-display text-2xl font-medium text-cream">
              <span className="font-semibold">Son</span>
              <span className="text-xs font-normal uppercase tracking-[0.3em] text-cream/60">
                Designs
              </span>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                ["Studio", "#studio"],
                ["Services", "#services"],
                ["Process", "#process"],
                ["Work", "#work"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cream/55 transition-colors hover:text-cream"
                >
                  {label}
                </a>
              ))}
            </nav>

            <a
              href="#top"
              className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cream/55 transition-all duration-300 hover:-translate-y-px hover:text-cream"
            >
              Back to top
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 19V5m0 0l-6 6m6-6l6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs text-cream/40 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Son Designs. All rights reserved.
            </p>
            <p className="tracking-[0.14em] uppercase">
              London · Lake Como · Seville
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}