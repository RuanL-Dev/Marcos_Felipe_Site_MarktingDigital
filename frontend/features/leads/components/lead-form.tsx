"use client";

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
    <div className="form-shell" id="contato">
      <SectionHeader
        eyebrow="Formulario de leads"
        title="Prefere deixar seu contato?"
        description="Preencha os dados abaixo para que o atendimento comercial possa retornar com mais contexto e agilidade."
      />

      <form onSubmit={handleSubmit}>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="firstName">Nome</label>
            <input
              id="firstName"
              name="firstName"
              onChange={handleChange}
              required
              type="text"
              value={formData.firstName}
            />
          </div>

          <div className="field">
            <label htmlFor="lastName">Sobrenome</label>
            <input
              id="lastName"
              name="lastName"
              onChange={handleChange}
              required
              type="text"
              value={formData.lastName}
            />
          </div>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              onChange={handleChange}
              required
              type="email"
              value={formData.email}
            />
          </div>

          <div className="field">
            <label htmlFor="phone">Telefone</label>
            <input
              id="phone"
              name="phone"
              onChange={handleChange}
              required
              type="tel"
              value={formData.phone}
            />
          </div>
        </div>

        <div aria-hidden="true" className="field visually-hidden">
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

        <p className="consent-text">
          Ao enviar este formulario, voce concorda com o uso dos seus dados para
          contato comercial e comunicacoes relacionadas aos servicos, conforme
          nossa <a href="/politica-de-privacidade">Politica de Privacidade</a>.
        </p>

        {status.type !== "idle" ? (
          <p
            className={`status-message ${
              status.type === "success" ? "status-success" : "status-error"
            }`}
          >
            {status.message}
          </p>
        ) : null}

        <button className="button-primary" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Enviando..." : "Enviar contato"}
        </button>
      </form>
    </div>
  );
}
