import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${className} ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-terra">
        <span className="inline-block h-px w-8 bg-terra" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-6 font-display text-4xl font-medium leading-[1.08] text-ink md:text-5xl lg:text-[3.4rem]">
        {title}{" "}
        {titleAccent ? (
          <em className="font-normal italic text-terra">{titleAccent}</em>
        ) : null}
      </h2>
      {description ? (
        <p className="mt-6 text-base leading-relaxed text-slate md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}