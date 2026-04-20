import { ActionLink } from "@/components/ui/action-link";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <SectionHeader
            eyebrow="CTA principal"
            title="Se voce quer avancar com seu projeto, o melhor proximo passo e conversar agora."
            description="O contato principal da V1 acontece por WhatsApp Business. O Instagram entra como apoio para quem quer conhecer melhor o trabalho antes da conversa."
          />

          <div className="cta-actions">
            <ActionLink external href={siteConfig.whatsappUrl}>
              Chamar no WhatsApp
            </ActionLink>
            <ActionLink external href={siteConfig.instagramUrl} variant="secondary">
              Ver Instagram
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
