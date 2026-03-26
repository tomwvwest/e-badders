import { CourtPlayer, PickPlayersState } from "@/types/court.types";
import { useReducer } from "react";
import {
  getNewAndExistingPlayers,
  getNextFocusedInput,
  updateBenchPlayers,
} from "./utils";
import setPlayerCase from "./setPlayerCase";

export type Action =
  | { type: "setPlayer"; playerId: number }
  | { type: "focusPosition"; positionId: number };

export default function usePickGameReducer(initialPlayers: CourtPlayer[]) {
  const initialState: PickPlayersState = {
    noOfPositions: 4,
    filledPositions: [],
    benchedPlayers: initialPlayers,
    focusedInput: 1,
  };

  function reducer(playerState: PickPlayersState, action: Action) {
    switch (action.type) {
      //handles assigning and swapping players
      case "setPlayer": return setPlayerCase(playerState, action);

      case "focusPosition":
        return {
          ...playerState,
          focusedInput: action.positionId,
        };

      default:
        return playerState;
    }
  }

  return useReducer(reducer, initialState);
}
