import { TestimonialCard } from "@/components/cards/testimonial-card";
import { SectionHeader } from "@/components/ui/section-header";
import { testimonials } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <section className="px-4 py-14 sm:px-6" id="depoimentos">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="Prova social"
          title="Confianca e percepcao de valor precisam aparecer antes do contato."
        />

        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
