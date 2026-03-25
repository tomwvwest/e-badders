import { ActiveCourts } from "@/types/court.types";
import { useReducer } from "react";

type Action = {
  type: string;
  courtId: number;
};

export default function useCourtReducer(initialState: ActiveCourts) {
  function reducer(
    state: ActiveCourts,
    action: Action
  ) {
    switch (action.type) {
      case "incrementTimer":
        return state.map((court) =>
          court.courtId === action.courtId
            ? { ...court, secondsPlayed: court.secondsPlayed + 1 }
            : court
        );

      case "resetTimer":
        return state.map((court) =>
          court.courtId === action.courtId
            ? { ...court, secondsPlayed: 0 }
            : court
        );

      default:
        return state;
    }
  }
  return useReducer(reducer, initialState);
}
