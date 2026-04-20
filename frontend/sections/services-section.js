import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Areas de atuacao</span>
          <h2>Os tres servicos ganham destaque na ordem comercial definida para a V1.</h2>
          <p>
            A apresentacao prioriza decoracao de eventos, seguida por material
            grafico e design grafico, mantendo clareza para quem quer entender
            rapidamente o valor entregue.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.id}>
              <span className="eyebrow">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ol>
                {service.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
