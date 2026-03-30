import { ActiveCourts, CourtPlayer } from "@/types/court.types";
import { useReducer } from "react";

export type Action =
  | {
      type: "startGame";
      courtId: number;
      players: Record<number, CourtPlayer | null>;
    }
  | {
      type: "incrementTimer" | "resetTimer";
      courtId: number;
    };

export default function useCourtReducer(initialState: ActiveCourts) {
  function reducer(state: ActiveCourts, action: Action) {
    const { courtId } = action;
    switch (action.type) {
      case "startGame":
        if (!action.players) return state;

        return {
          ...state,
          [courtId]: {
            ...state[courtId],
            players: action.players,
          },
        };

      case "incrementTimer":
        return {
          ...state,
          [courtId]: {
            ...state[courtId],
            secondsPlayed: state[courtId].secondsPlayed + 1,
          },
        };

      case "resetTimer":
        return {
          ...state,
          [courtId]: {
            ...state[courtId],
            secondsPlayed: 0,
          },
        };

      default:
        return state;
    }
  }

  return useReducer(reducer, initialState);
}
