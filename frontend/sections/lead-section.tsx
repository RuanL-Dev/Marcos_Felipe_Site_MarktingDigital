import { LeadForm } from "@/features/leads/components/lead-form";
import { ActionLink } from "@/components/ui/action-link";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/lib/site";

export function LeadSection() {
  return (
    <section className="section">
      <div className="container lead-layout">
        <div>
          <SectionHeader
            eyebrow="Contato alternativo"
            title="O contato principal continua sendo o WhatsApp, com formulario como reforco."
            description="Se preferir atendimento imediato, o melhor caminho e chamar no WhatsApp. Se quiser deixar seus dados para retorno posterior, use o formulario ao lado."
          />

          <div className="cta-actions">
            <ActionLink external href={siteConfig.whatsappUrl}>
              Abrir WhatsApp Business
            </ActionLink>
            <ActionLink external href={siteConfig.instagramUrl} variant="secondary">
              Ir para Instagram
            </ActionLink>
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
