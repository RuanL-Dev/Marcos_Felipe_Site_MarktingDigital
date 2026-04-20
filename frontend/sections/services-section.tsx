import { ServiceCard } from "@/components/cards/service-card";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section className="px-4 py-14 sm:px-6" id="servicos">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="Areas de atuacao"
          title="Os tres servicos ganham destaque na ordem comercial definida para a V1."
          description="A apresentacao prioriza decoracao de eventos, seguida por material grafico e design grafico, mantendo clareza para quem quer entender rapidamente o valor entregue."
        />

        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} index={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
