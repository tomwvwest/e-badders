export type SessionPlayer = {
  playerId: number;
  sessionId: number;
  totalGamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  lastMatchEnd: Date | null,
  totalSecondsPlayed: number,
  winStreak: number,
  longestWinStreak: number
};
