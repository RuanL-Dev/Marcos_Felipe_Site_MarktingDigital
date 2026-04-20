import type { ServiceItem } from "@/types/site";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article
      className="rounded-[24px] border border-border-soft/80 bg-surface/90 p-6 shadow-[var(--shadow-soft)]"
      id={service.id}
    >
      <span className="inline-flex w-fit rounded-full border border-accent/30 bg-accent/8 px-3 py-2 text-xs tracking-[0.2em] text-accent-strong uppercase">
        0{index + 1}
      </span>
      <h3 className="mt-5 text-2xl font-semibold text-ink">{service.title}</h3>
      <p className="mt-4 text-base leading-7 text-muted">{service.description}</p>
      <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-6 text-muted">
        {service.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ol>
    </article>
  );
}
