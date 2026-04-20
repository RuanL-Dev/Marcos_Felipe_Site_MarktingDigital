"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { createLead } from "@/lib/api";
import { SectionHeader } from "@/components/ui/section-header";
import type { LeadPayload } from "@/types/site";

const initialState: LeadPayload = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  honeypot: "",
};

interface FormStatus {
  type: "idle" | "success" | "error";
  message: string;
}

export function LeadForm() {
  const [formData, setFormData] = useState<LeadPayload>(initialState);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      await createLead(formData);
      setFormData(initialState);
      setStatus({
        type: "success",
        message:
          "Seu contato foi enviado com sucesso. Em breve voce recebe retorno.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Nao foi possivel enviar o formulario.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="rounded-[24px] border border-border-soft/80 bg-surface/90 p-6 shadow-[var(--shadow-soft)]"
      id="contato"
    >
      <SectionHeader
        eyebrow="Formulario de leads"
        title="Prefere deixar seu contato?"
        description="Preencha os dados abaixo para que o atendimento comercial possa retornar com mais contexto e agilidade."
      />

      <form className="mt-7 grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-semibold" htmlFor="firstName">
              Nome
            </label>
            <input
              autoComplete="given-name"
              className="min-h-12 rounded-2xl border border-border-soft bg-white px-4 text-base text-ink outline-none transition focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              required
              type="text"
              value={formData.firstName}
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold" htmlFor="lastName">
              Sobrenome
            </label>
            <input
              autoComplete="family-name"
              className="min-h-12 rounded-2xl border border-border-soft bg-white px-4 text-base text-ink outline-none transition focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              required
              type="text"
              value={formData.lastName}
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-semibold" htmlFor="email">
              E-mail
            </label>
            <input
              autoComplete="email"
              className="min-h-12 rounded-2xl border border-border-soft bg-white px-4 text-base text-ink outline-none transition focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20"
              id="email"
              name="email"
              onChange={handleChange}
              required
              type="email"
              value={formData.email}
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold" htmlFor="phone">
              Telefone
            </label>
            <input
              autoComplete="tel"
              className="min-h-12 rounded-2xl border border-border-soft bg-white px-4 text-base text-ink outline-none transition focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20"
              id="phone"
              inputMode="tel"
              name="phone"
              onChange={handleChange}
              required
              type="tel"
              value={formData.phone}
            />
          </div>
        </div>

        <div aria-hidden="true" className="sr-only">
          <label htmlFor="honeypot">Campo nao preencher</label>
          <input
            autoComplete="off"
            id="honeypot"
            name="honeypot"
            onChange={handleChange}
            tabIndex={-1}
            type="text"
            value={formData.honeypot}
          />
        </div>

        <p className="rounded-2xl border border-border-soft/70 bg-surface-strong/55 px-4 py-3 text-sm leading-6 text-muted">
          Ao clicar em "Enviar contato" voce concorda com a{" "}
          <Link
            className="font-semibold text-accent underline underline-offset-4 transition hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            href="/politica-de-privacidade"
          >
            Politica de Privacidade
          </Link>
          , onde descrevemos como sao tratados os dados enviados por voce.
        </p>

        {status.type !== "idle" ? (
          <p
            aria-live="polite"
            className={`rounded-2xl px-4 py-3 text-sm ${
              status.type === "success"
                ? "bg-success/12 text-success"
                : "bg-danger/12 text-danger"
            }`}
          >
            {status.message}
          </p>
        ) : null}

        <button
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-transparent bg-accent px-5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Enviando..." : "Enviar contato"}
        </button>
      </form>
    </div>
  );
}
