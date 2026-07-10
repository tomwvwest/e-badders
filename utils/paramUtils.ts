import { notFound } from "next/navigation";

export function parseNumericParam(value: string | string[] | undefined): number {
  const raw = Array.isArray(value) ? value[0] : value;
  const id = Number(raw);

  if (raw === undefined || Number.isNaN(id)) {
    notFound();
  }

  return id;
}
