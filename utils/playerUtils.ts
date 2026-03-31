import { ActiveCourts, CourtPlayer } from "@/types/court.types";
import { AllPlayer } from "@/types/player.types";

export default function getBenchOptions(
  courts: ActiveCourts,
  players: AllPlayer[]
): CourtPlayer[] {
  const playingPlayerIds = Object.values(courts).flatMap((court) =>
    Object.values(court.players).map((p) => p?.playerId)
  );
  const benchOptions = players
    .filter((p) => p.isSessionPlayer && !playingPlayerIds.includes(p.playerId))
    .map((p) => ({
      playerId: p.playerId,
      name: p.playerName,
    })) as CourtPlayer[];
  
    return benchOptions;
}
