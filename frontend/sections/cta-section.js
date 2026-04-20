import { siteConfig } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <span className="eyebrow">CTA principal</span>
          <h2>Se voce quer avancar com seu projeto, o melhor proximo passo e conversar agora.</h2>
          <p>
            O contato principal da V1 acontece por WhatsApp Business. O Instagram
            entra como apoio para quem quer conhecer melhor o trabalho antes da conversa.
          </p>

          <div className="cta-actions">
            <a className="button-primary" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
            <a className="button-secondary" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
              Ver Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
