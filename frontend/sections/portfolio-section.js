import Image from "next/image";
import { portfolioItems } from "@/lib/site";

export function PortfolioSection() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Portfolio</span>
          <h2>Uma curadoria inicial de trabalhos que reforcam qualidade percebida.</h2>
          <p>
            O foco nao e volume. A ideia da V1 e mostrar poucos exemplos com boa
            leitura visual e potencial de gerar confianca.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <article className="portfolio-card" key={item.title}>
              <Image src={item.image} alt={item.title} width={640} height={480} />
              <span className="eyebrow">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
