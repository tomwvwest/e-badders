"use server";

import addGameToSession from "@/services/game.service";
import { CourtPlayer } from "@/types/court.types";

export async function addGameToSessionAction(
  sessionId: number,
  players: Record<number, CourtPlayer>,
  secondsPlayed: number,
  score: { team1Score: number; team2Score: number }
) {
  return addGameToSession(sessionId, players, secondsPlayed, score);
}
