import { siteConfig } from "@/lib/site";
import type { LeadPayload, LeadResponse } from "@/types/site";

interface ErrorPayload {
  message?: string;
}

export async function createLead(payload: LeadPayload): Promise<LeadResponse> {
  const response = await fetch(`${siteConfig.apiUrl}/api/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as
    | LeadResponse
    | ErrorPayload;

  if (!response.ok) {
    throw new Error(
      "message" in data && data.message
        ? data.message
        : "Nao foi possivel enviar seus dados agora.",
    );
  }

  return data as LeadResponse;
}
