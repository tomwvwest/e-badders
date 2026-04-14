import { ActiveCourts } from "@/types/court.types";
import {
  EndGameAction,
  ResetTimerAction,
  StartGameAction,
} from "./useCourtTypes";
import { assertPlayers } from "./useCourtUtils";
import { addGameToSessionAction } from "@/app/actions/game.actions";

export function startGameCase(state: ActiveCourts, action: StartGameAction) {
  const { courtId } = action;
  if (!action.players) return state;

  return {
    ...state,
    [courtId]: {
      ...state[courtId],
      players: action.players,
      secondsPlayed: 0,
    },
  };
}

export function endGameCase(state: ActiveCourts, action: EndGameAction) {
  const { [action.courtId]: _, ...remainingCourts } = state;
  return remainingCourts;
}

export function incrementTimerCase(state: ActiveCourts) {
  return Object.fromEntries(
    Object.entries(state).map(([courtId, court]) => [
      courtId,
      {
        ...court,
        courtId: parseInt(courtId),
        secondsPlayed: court.secondsPlayed + 1,
      },
    ])
  );
}

export function resetTimerCase(state: ActiveCourts, action: ResetTimerAction) {
  return {
    ...state,
    [action.courtId]: {
      ...state[action.courtId],
      secondsPlayed: 0,
    },
  };
}
