import Image from "next/image";
import type { PortfolioItem } from "@/types/site";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className="rounded-[24px] border border-border-soft/80 bg-surface/90 p-6 shadow-[var(--shadow-soft)]">
      <Image
        alt={item.title}
        className="mb-5 h-60 w-full rounded-[18px] object-cover"
        height={480}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={item.image}
        width={640}
      />
      <span className="inline-flex w-fit rounded-full border border-accent/30 bg-accent/8 px-3 py-2 text-xs tracking-[0.2em] text-accent-strong uppercase">
        {item.category}
      </span>
      <h3 className="mt-5 text-2xl font-semibold text-ink">{item.title}</h3>
      <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
    </article>
  );
}
