import { ActionLink } from "@/components/ui/action-link";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Presenca visual com foco em conversao</span>
          <h1>Projetos que valorizam marcas, eventos e experiencias.</h1>
          <p>
            Marcos Felipe atua com decoracao de eventos, material grafico e
            design grafico para transformar ideias em apresentacoes mais fortes,
            mais claras e mais memoraveis.
          </p>

          <div className="hero-actions">
            <ActionLink external href={siteConfig.whatsappUrl}>
              Solicitar atendimento
            </ActionLink>
            <ActionLink href="#portfolio" variant="secondary">
              Ver portfolio
            </ActionLink>
          </div>
        </div>

        <aside className="hero-card">
          <div>
            <span className="eyebrow">V1 enxuta, comercial e direta</span>
            <p className="support-text">
              O site foi pensado para apresentar poucos trabalhos fortes,
              explicar os servicos com objetividade e conduzir o visitante ao
              contato.
            </p>
          </div>

          <div className="hero-metrics">
            <div className="metric">
              <strong>3</strong>
              <span>frentes principais de servico</span>
            </div>
            <div className="metric">
              <strong>CTA</strong>
              <span>WhatsApp em primeiro plano</span>
            </div>
            <div className="metric">
              <strong>5-10</strong>
              <span>cases fortes na curadoria inicial</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
