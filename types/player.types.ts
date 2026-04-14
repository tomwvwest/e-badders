export type CreatePlayer = {
  playerName: string;
  totalGamesPlayed: number;
  clubForm: number;
  clubRanking?: number;
  userId: number;
};

export type Player = {
  userId: number | null;
  playerId: number;
  playerName: string;
  clubForm: number;
  clubRanking: number | null;
};

export type AllPlayer = Player & { isSessionPlayer: boolean };
