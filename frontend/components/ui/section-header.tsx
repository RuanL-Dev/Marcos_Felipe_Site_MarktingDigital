interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="grid gap-3">
      <span className="inline-flex w-fit rounded-full border border-accent/30 bg-accent/8 px-3 py-2 text-xs tracking-[0.2em] text-accent-strong uppercase">
        {eyebrow}
      </span>
      <h2 className="m-0 text-4xl leading-[0.98] font-semibold md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
