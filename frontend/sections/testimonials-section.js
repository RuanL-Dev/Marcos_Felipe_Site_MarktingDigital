import { testimonials } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Prova social</span>
          <h2>Confianca e percepcao de valor precisam aparecer antes do contato.</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.author}>
              <p>"{testimonial.text}"</p>
              <strong>{testimonial.author}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
