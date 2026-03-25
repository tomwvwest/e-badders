import { AllPlayerContext } from "@/contexts/AllPlayersContext";
import { useContext } from "react";

export function useAllPlayers() {
  const context = useContext(AllPlayerContext);

  if (!context) {
    throw new Error("Could not acquire player context");
  }

  return context;
}