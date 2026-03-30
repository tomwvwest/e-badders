import { ActiveCourts, CourtPlayer } from "@/types/court.types";
import { useReducer } from "react";

export type Action =
  | {
      type: "startGame";
      courtId: number;
      players: Record<number, CourtPlayer | null>;
    }
  | { type: "incrementTimer" }
  | {
      type: "resetTimer";
      courtId: number;
    };

export default function useCourtReducer(initialState: ActiveCourts) {
  function reducer(state: ActiveCourts, action: Action) {
    switch (action.type) {
      case "startGame":
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

      case "incrementTimer":
        return Object.fromEntries(
          Object.entries(state).map(([courtId, court]) => [
            courtId,
            {
              ...court,
              secondsPlayed: court.secondsPlayed + 1,
            },
          ])
        );

      case "resetTimer":
        return {
          ...state,
          [action.courtId]: {
            ...state[action.courtId],
            secondsPlayed: 0,
          },
        };

      default:
        return state;
    }
  }

  return useReducer(reducer, initialState);
}
