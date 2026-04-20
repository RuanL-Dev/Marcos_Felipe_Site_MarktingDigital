import { PortfolioCard } from "@/components/cards/portfolio-card";
import { SectionHeader } from "@/components/ui/section-header";
import { portfolioItems } from "@/lib/site";

export function PortfolioSection() {
  return (
    <section className="px-4 py-14 sm:px-6" id="portfolio">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="Portfolio"
          title="Uma curadoria inicial de trabalhos que reforcam qualidade percebida."
          description="O foco nao e volume. A ideia da V1 e mostrar poucos exemplos com boa leitura visual e potencial de gerar confianca."
        />

        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
