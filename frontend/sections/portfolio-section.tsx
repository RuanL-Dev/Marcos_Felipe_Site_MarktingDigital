import { PortfolioCard } from "@/components/cards/portfolio-card";
import { SectionHeader } from "@/components/ui/section-header";
import { portfolioItems } from "@/lib/site";

export function PortfolioSection() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Uma curadoria inicial de trabalhos que reforcam qualidade percebida."
          description="O foco nao e volume. A ideia da V1 e mostrar poucos exemplos com boa leitura visual e potencial de gerar confianca."
        />

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <PortfolioCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
