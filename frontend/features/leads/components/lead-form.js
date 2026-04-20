"use client";

import { useState } from "react";
import { createLead } from "@/lib/api";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  honeypot: "",
};

export function LeadForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      await createLead(formData);
      setFormData(initialState);
      setStatus({
        type: "success",
        message: "Seu contato foi enviado com sucesso. Em breve voce recebe retorno.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Nao foi possivel enviar o formulario.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="form-shell" id="contato">
      <div className="section-heading">
        <span className="eyebrow">Formulario de leads</span>
        <h2>Prefere deixar seu contato?</h2>
        <p>
          Preencha os dados abaixo para que o atendimento comercial possa retornar
          com mais contexto e agilidade.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="firstName">Nome</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="lastName">Sobrenome</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="phone">Telefone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field visually-hidden" aria-hidden="true">
          <label htmlFor="honeypot">Campo nao preencher</label>
          <input
            id="honeypot"
            name="honeypot"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={handleChange}
          />
        </div>

        <p className="consent-text">
          Ao enviar este formulario, voce concorda com o uso dos seus dados para
          contato comercial e comunicacoes relacionadas aos servicos, conforme nossa{" "}
          <a href="/politica-de-privacidade">Politica de Privacidade</a>.
        </p>

        {status.type !== "idle" ? (
          <p className={`status-message ${status.type === "success" ? "status-success" : "status-error"}`}>
            {status.message}
          </p>
        ) : null}

        <button className="button-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar contato"}
        </button>
      </form>
    </div>
  );
}
