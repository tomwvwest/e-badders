import { CourtPlayer } from "@/types/court.types";
import { useMemo } from "react";

export default function usePlayerSuggestions(
  benchedPlayers: CourtPlayer[],
  searchValue: string
){
  return useMemo(() => {
    return !searchValue
      ? benchedPlayers
      : benchedPlayers.filter(({ name }) =>
          name.toLowerCase().includes(searchValue.trim().toLowerCase())
        );
  }, [benchedPlayers, searchValue])
};
