// Shared section header: a small label, a two-line claim on the left and a
// short explanation on the right. `tone` matches the band it sits on.
export default function SectionHeading({
  id,
  label,
  title,
  intro,
  tone = "light",
}: {
  id?: string;
  label: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">
      <div>
        <p
          className={`text-sm font-bold tracking-wide ${dark ? "text-peach" : "text-accent"}`}
        >
          {label}
        </p>
        <h2
          id={id}
          className="mt-4 font-serif font-black text-4xl md:text-5xl leading-tight max-w-3xl"
        >
          {title}
        </h2>
      </div>
      {intro && (
        <p
          className={`lg:max-w-md text-base md:text-lg leading-relaxed ${dark ? "text-on-navy-muted" : "text-muted"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
