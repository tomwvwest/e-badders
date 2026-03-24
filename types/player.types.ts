import { PlayerSession } from "./playerSession.types";
import { Session } from "./session.types";

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
  totalGamesPlayed: number;
  playerName: string;
  clubForm: number;
  clubRanking: number | null;
};

export type AllPlayer = Player & { isSessionPlayer: boolean };
