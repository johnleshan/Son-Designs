import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IMG } from "@/lib/images";

type Project = {
  src: string;
  name: string;
  location: string;
  type: string;
  height: string;
};

const PROJECTS: Project[] = [
  { src: IMG.project1, name: "The Courtyard House", location: "Como, Italy", type: "Architecture + Interiors", height: "h-72 md:h-[26rem]" },
  { src: IMG.project2, name: "Sage Terraces", location: "London, UK", type: "Interior Design", height: "h-96 md:h-[34rem]" },
  { src: IMG.project3, name: "Villa Meridiana", location: "Sanremo, Italy", type: "Landscape + Architecture", height: "h-80 md:h-[30rem]" },
  { src: IMG.project4, name: "The Oak Studio", location: "Kent, UK", type: "Heritage Retrofit", height: "h-72 md:h-[24rem]" },
  { src: IMG.project5, name: "Casa Serena", location: "Seville, Spain", type: "Full Turnkey", height: "h-96 md:h-[36rem]" },
  { src: IMG.project6, name: "Casa del Mar", location: "Valencia, Spain", type: "Interiors + Landscape", height: "h-80 md:h-[28rem]" },
  { src: IMG.project7, name: "Haus Am Wald", location: "Milan, Italy", type: "Architecture", height: "h-96 md:h-[32rem]" },
  { src: IMG.project8, name: "The Loft Collection", location: "London, UK", type: "Interior Design", height: "h-72 md:h-[26rem]" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <figure className="group mb-6 break-inside-avoid">
      <div className={`relative w-full overflow-hidden rounded-md ${project.height}`}>
        <Image
          src={project.src}
          alt={`${project.name} — ${project.location}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "linear-gradient(to bottom, rgba(32,31,29,0) 30%, rgba(32,31,29,0.78) 100%)" }}
          aria-hidden="true"
        />
        <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-terra">
            {project.type}
          </p>
          <p className="mt-1.5 font-display text-2xl font-medium text-cream">
            {project.name}
          </p>
          <p className="mt-1 text-sm text-cream/75">{project.location}</p>
        </figcaption>
      </div>
    </figure>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that hold"
            titleAccent="their own light."
            description="A small cross-section of completed and in-progress work across our three homes: the UK, Italy and Spain."
          />
          <Reveal delay={0.15}>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-charcoal transition-all duration-300 hover:-translate-y-px hover:text-terra-deep"
            >
              Start yours
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

        <Reveal className="mt-16">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}