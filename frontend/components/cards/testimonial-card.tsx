import type { TestimonialItem } from "@/types/site";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <p>"{testimonial.text}"</p>
      <strong>{testimonial.author}</strong>
    </article>
  );
}
