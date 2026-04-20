import { siteConfig } from "@/lib/site";
import { LeadForm } from "@/features/leads/components/lead-form";

export function LeadSection() {
  return (
    <section className="section">
      <div className="container lead-layout">
        <div>
          <div className="section-heading">
            <span className="eyebrow">Contato alternativo</span>
            <h2>O contato principal continua sendo o WhatsApp, com formulario como reforco.</h2>
            <p>
              Se preferir atendimento imediato, o melhor caminho e chamar no
              WhatsApp. Se quiser deixar seus dados para retorno posterior,
              use o formulario ao lado.
            </p>
          </div>

          <div className="cta-actions">
            <a className="button-primary" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
              Abrir WhatsApp Business
            </a>
            <a className="button-secondary" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
              Ir para Instagram
            </a>
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
