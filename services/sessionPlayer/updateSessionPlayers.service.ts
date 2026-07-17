import { prisma } from "@/lib/db";
import { CourtPlayer } from "@/types/court.types";
import getWinningPlayerIds, { updateSessionPlayerTimes, updateGamesWonLost, updateStreaks } from "@/utils/playerSessionUtils";

export default async function updateSessionPlayers(
  sessionId: number,
  players: Record<number, CourtPlayer>,
  secondsPlayed: number,
  score: { team1Score: number; team2Score: number }
) {
  const winningPlayerIds = getWinningPlayerIds(players, score);

  const playerIds = Object.values(players).map((player) => player.playerId);

  const sessionPlayers = await prisma.sessionPlayer.findMany({
    where: {
      sessionId,
      playerId: {
        in: playerIds,
      },
    },
  });

  await updateSessionPlayersDB(sessionPlayers, winningPlayerIds, secondsPlayed);
}

async function updateSessionPlayersDB(
  sessionPlayers: {
    playerId: number;
    sessionId: number;
    totalGamesPlayed: number;
    gamesWon: number;
    gamesLost: number;
    lastPlayedAt: Date | null;
    longestWinStreak: number;
    sessionPlayerId: number;
    totalSecondsPlayed: number;
    winStreak: number;
  }[],
  winningPlayerIds: number[],
  secondsPlayed: number
) {
  await prisma.$transaction(
    sessionPlayers.map(
      ({ sessionPlayerId, playerId, winStreak, longestWinStreak }) => {
        const playerWon = winningPlayerIds.includes(playerId);

        return prisma.sessionPlayer.update({
          where: {
            sessionPlayerId: sessionPlayerId,
          },
          data: {
            ...updateSessionPlayerTimes(secondsPlayed),

            ...updateGamesWonLost(playerWon),

            ...updateStreaks(playerWon, winStreak, longestWinStreak),
          },
        });
      }
    )
  );
}
