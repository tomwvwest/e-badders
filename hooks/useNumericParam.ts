"use client";

import { parseNumericParam } from "@/utils/paramUtils";
import { useParams } from "next/navigation";

export function useNumericParam(key: string): number {
  const params = useParams();
  return parseNumericParam(params[key]);
}
