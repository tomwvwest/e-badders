import { CourtPlayer } from "@/types/court.types";

export function assertPlayers(
  players: Record<number, CourtPlayer | null>
): asserts players is CourtPlayer {
  if (Object.values(players).some(p => p === null)) {
    throw new Error("A player is missing");
  }
}