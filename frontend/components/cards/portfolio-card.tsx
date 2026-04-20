import Image from "next/image";
import type { PortfolioItem } from "@/types/site";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className="portfolio-card">
      <Image src={item.image} alt={item.title} width={640} height={480} />
      <span className="eyebrow">{item.category}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}
