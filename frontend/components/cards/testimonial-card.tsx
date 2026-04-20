import type { TestimonialItem } from "@/types/site";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="rounded-[24px] border border-border-soft/80 bg-surface/90 p-6 shadow-[var(--shadow-soft)]">
      <p className="text-base leading-7 text-muted">"{testimonial.text}"</p>
      <strong className="mt-5 block text-base font-semibold text-ink">
        {testimonial.author}
      </strong>
    </article>
  );
}
