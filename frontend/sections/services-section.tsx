import { ServiceCard } from "@/components/cards/service-card";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <SectionHeader
          eyebrow="Areas de atuacao"
          title="Os tres servicos ganham destaque na ordem comercial definida para a V1."
          description="A apresentacao prioriza decoracao de eventos, seguida por material grafico e design grafico, mantendo clareza para quem quer entender rapidamente o valor entregue."
        />

        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} index={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
