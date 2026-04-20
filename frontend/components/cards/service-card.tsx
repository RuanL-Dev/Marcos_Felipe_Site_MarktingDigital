import type { ServiceItem } from "@/types/site";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className="service-card">
      <span className="eyebrow">0{index + 1}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ol>
        {service.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ol>
    </article>
  );
}
