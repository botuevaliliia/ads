// src/utils/form.ts
export async function sendLead(payload: {
  name: string;
  phone: string;
  message?: string;
  source?: string;
}) {
  const gsUrl = import.meta.env.VITE_GS_WEBHOOK; // put your URL in .env.local
  if (!gsUrl) {
    console.warn("VITE_GS_WEBHOOK is missing");
    return { ok: false, gsOk: false, tgOk: false };
  }

  try {
    const r = await fetch(gsUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return { ok: r.ok, gsOk: r.ok, tgOk: false };
  } catch {
    return { ok: false, gsOk: false, tgOk: false };
  }
}
