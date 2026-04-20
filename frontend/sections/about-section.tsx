import { SectionHeader } from "@/components/ui/section-header";

export function AboutSection() {
  return (
    <section className="section" id="sobre">
      <div className="container about-grid">
        <div className="about-panel">
          <span className="eyebrow">Sobre o trabalho</span>
          <h2>Estetica com direcao, entrega com intencao.</h2>
          <p>
            Marcos Felipe atua na construcao de apresentacoes visuais que
            aproximam marca, ambiente e experiencia. O trabalho combina
            sensibilidade estetica com foco em clareza comercial.
          </p>
        </div>

        <div>
          <SectionHeader
            eyebrow="Autoridade"
            title="Uma apresentacao profissional para quem precisa ser lembrado pela imagem certa."
          />
          <p>
            A V1 deste site foi estruturada para explicar melhor os servicos,
            destacar trabalhos relevantes e facilitar o contato de clientes que
            buscam decoracao de eventos, materiais personalizados e design
            grafico.
          </p>
          <p>
            O objetivo e simples: tornar o primeiro contato mais forte, mais
            confiavel e mais propenso a virar conversa comercial.
          </p>
        </div>
      </div>
    </section>
  );
}
