import { prisma } from "@/lib/db";
import { Game } from "@/lib/generated/prisma/client";
import { CourtPlayer } from "@/types/court.types";
import { CreateGame } from "@/types/game.types";

export default async function addGameToSession(
  sessionId: number,
  players: Record<number, CourtPlayer>,
  secondsPlayed: number,
  score: { team1Score: number; team2Score: number }
): Promise<Game> {
  const { team1Score, team2Score } = score;

  const gameRes: CreateGame = {
    sessionId,
    player1: players[1].playerId,
    player2: players[2].playerId,
    player3: players[3].playerId,
    player4: players[4].playerId,
    scoreHome: team1Score,
    scoreAway: team2Score,
    gameTimeSeconds: secondsPlayed,
  };

  return prisma.game.create({ data: gameRes });
}

