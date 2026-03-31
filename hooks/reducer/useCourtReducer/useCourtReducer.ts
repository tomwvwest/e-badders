import { ActiveCourts, CourtPlayer } from "@/types/court.types";
import { useReducer } from "react";
import { Action } from "./useCourtTypes";
import {
  endGameCase,
  incrementTimerCase,
  resetTimerCase,
  startGameCase,
} from "./useCourtCases";

const initialCourtState: ActiveCourts = {
  // 1: {
  //   courtId: 1,
  //   players: {
  //     1: { playerId: 1, name: "Tom" },
  //     2: { playerId: 2, name: "Lara" },
  //     3: { playerId: 34, name: "Noah" },
  //     4: { playerId: 36, name: "Jordan" },
  //   },
  //   secondsPlayed: 0,
  // },
};

export default function useCourtReducer() {
  function reducer(state: ActiveCourts, action: Action) {
    switch (action.type) {
      case "startGame":
        return startGameCase(state, action);

      case "endGame":
        return endGameCase(state, action);

      case "incrementTimer":
        return incrementTimerCase(state);

      case "resetTimer":
        return resetTimerCase(state, action);

      default:
        return state;
    }
  }

  return useReducer(reducer, initialCourtState);
}
