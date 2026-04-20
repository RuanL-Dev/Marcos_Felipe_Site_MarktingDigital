import { ActionLink } from "@/components/ui/action-link";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="px-4 py-14 sm:px-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-4 rounded-[24px] bg-[linear-gradient(135deg,rgba(161,79,66,0.92),rgba(53,25,21,0.92))] p-8 text-white shadow-[var(--shadow-soft)]">
          <SectionHeader
            eyebrow="CTA principal"
            title="Se voce quer avancar com seu projeto, o melhor proximo passo e conversar agora."
            description="O contato principal da V1 acontece por WhatsApp Business. O Instagram entra como apoio para quem quer conhecer melhor o trabalho antes da conversa."
          />

          <div className="flex flex-wrap gap-3 max-sm:flex-col">
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
