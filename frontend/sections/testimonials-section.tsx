import { TestimonialCard } from "@/components/cards/testimonial-card";
import { SectionHeader } from "@/components/ui/section-header";
import { testimonials } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <SectionHeader
          eyebrow="Prova social"
          title="Confianca e percepcao de valor precisam aparecer antes do contato."
        />

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
