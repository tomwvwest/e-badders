import { AllPlayer } from "@/types/player.types";
import { createContext } from "react";

export type AllPlayerContextType = {
  allPlayers: AllPlayer[];
  setAllPlayers: React.Dispatch<React.SetStateAction<AllPlayer[]>>;
};

export const AllPlayerContext = createContext<AllPlayerContextType | null>(null);