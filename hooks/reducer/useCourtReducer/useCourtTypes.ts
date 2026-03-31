import { CourtPlayer } from "@/types/court.types";

export type StartGameAction = {
  type: "startGame";
  courtId: number;
  players: Record<number, CourtPlayer | null>;
};

export type EndGameAction = {
  type: "endGame";
  courtId: number;
  score: { team1Score: number; team2Score: number };
};

type IncrementTimerAction = { type: "incrementTimer" };

export type ResetTimerAction = {
  type: "resetTimer";
  courtId: number;
};

export type Action =
  | StartGameAction
  | EndGameAction
  | IncrementTimerAction
  | ResetTimerAction;
