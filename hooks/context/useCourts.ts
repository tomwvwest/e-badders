import { CourtContext } from "@/contexts/CourtsContext";
import { useContext } from "react";

export function useCourts() {
  const context = useContext(CourtContext);

  if (!context) {
    throw new Error("Could not acquire court context");
  }

  return context;
}
