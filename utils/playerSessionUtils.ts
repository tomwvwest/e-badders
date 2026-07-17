import { CourtPlayer } from "@/types/court.types";

export default function getWinningPlayerIds(
  players: Record<number, CourtPlayer>,
  score: { team1Score: number; team2Score: number }
) {
  const winningTeam = score.team1Score > score.team2Score ? 1 : 2;

  const winningPlayerIds = Object.entries(players)
    .filter(([position]) =>
      winningTeam === 1
        ? ["1", "2"].includes(position)
        : ["3", "4"].includes(position)
    )
    .map(([, player]) => player.playerId);

  return winningPlayerIds;
}

export function updateSessionPlayerTimes(secondsPlayed: number) {
  return {
    totalGamesPlayed: {
      increment: 1,
    },
    totalSecondsPlayed: {
      increment: secondsPlayed,
    },
    lastPlayedAt: new Date(),
  };
}

export function updateGamesWonLost(playerWon: boolean) {
  return playerWon
    ? {
        gamesWon: {
          increment: 1,
        },
      }
    : {
        gamesLost: {
          increment: 1,
        },
      };
}

export function updateStreaks(
  playerWon: boolean,
  currentWinStreak: number,
  longestWinStreak: number
) {
  const newWinStreak = playerWon ? currentWinStreak + 1 : 0;

  return {
    winStreak: newWinStreak,
    longestWinStreak: Math.max(longestWinStreak, newWinStreak),
  };
}
