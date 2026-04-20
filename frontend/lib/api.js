import { siteConfig } from "@/lib/site";

export async function createLead(payload) {
  const response = await fetch(`${siteConfig.apiUrl}/api/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Nao foi possivel enviar seus dados agora.");
  }

  return data;
}
