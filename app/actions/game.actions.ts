"use server";

import submitCompletedGame from "@/services/game.service";
import { CourtPlayer } from "@/types/court.types";

export async function submitGameAction(
  sessionId: number,
  players: Record<number, CourtPlayer>,
  secondsPlayed: number,
  score: { team1Score: number; team2Score: number }
) {
  return submitCompletedGame(sessionId, players, secondsPlayed, score);
}
