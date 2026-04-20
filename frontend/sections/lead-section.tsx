import { LeadForm } from "@/features/leads/components/lead-form";
import { ActionLink } from "@/components/ui/action-link";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/lib/site";

export function LeadSection() {
  return (
    <section className="px-4 py-14 sm:px-6">
      <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Contato alternativo"
            title="O contato principal continua sendo o WhatsApp, com formulario como reforco."
            description="Se preferir atendimento imediato, o melhor caminho e chamar no WhatsApp. Se quiser deixar seus dados para retorno posterior, use o formulario ao lado."
          />

          <div className="mt-7 flex flex-wrap gap-3 max-sm:flex-col">
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
