// Navy title band that opens every inner page, matching the home hero.
export default function PageHeader({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-navy text-on-navy">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-16 md:pt-24 md:pb-20">
        <p className="text-sm font-bold tracking-wide text-peach">{label}</p>
        <h1 className="mt-4 font-serif font-black text-4xl md:text-6xl leading-tight">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-navy-muted">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
