import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IMG } from "@/lib/images";

type Member = {
  src: string;
  name: string;
  role: string;
  phone?: string;
  initials: string;
};

const MEMBERS: Member[] = [
  {
    src: IMG.teamOsmoa,
    name: "DSGN OMOSA",
    role: "Space Planner & Founder",
    initials: "DSGN",
  },
  {
    src: IMG.teamAron,
    name: "Aron Rotich",
    role: "Interior Designer",
    phone: "0768 327 899",
    initials: "AR",
  },
  {
    src: IMG.teamJoram,
    name: "Joram Mwakaba",
    role: "Marketer",
    phone: "+254 746 356 565",
    initials: "JM",
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <figure className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-cream">
        <Image
          src={member.src}
          alt={`${member.name} — ${member.role}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{ background: "linear-gradient(to top, rgba(32,31,29,0.5), transparent)" }}
          aria-hidden="true"
        />
      </div>
      <figcaption className="mt-5">
        <p className="font-display text-2xl font-medium tracking-tight text-ink">
          {member.name}
        </p>
        <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-terra">
          {member.role}
        </p>
        {member.phone ? (
          <a
            href={`tel:${member.phone.replace(/[^+\d]/g, "")}`}
            className="mt-3 inline-block text-sm text-slate transition-colors hover:text-charcoal"
          >
            {member.phone}
          </a>
        ) : null}
      </figcaption>
    </figure>
  );
}

export default function Team() {
  return (
    <section id="team" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
        <SectionHeading
          eyebrow="The team"
          title="The people behind"
          titleAccent="every project."
          description="A small studio that moves fast and thinks deeply — designers, planners and communicators working closely on every commission."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((member) => (
            <Reveal key={member.name} delay={0.1}>
              <MemberCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
