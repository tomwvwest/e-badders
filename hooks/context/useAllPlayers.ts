import { AllPlayerContext } from "@/contexts/AllPlayersContext";
import { useContext } from "react";

export function useAllPlayers() {
  const context = useContext(AllPlayerContext);

  if (!context) {
    throw new Error("useAllPlayers must be used within AllPlayerProvider");
  }

  return context;
}