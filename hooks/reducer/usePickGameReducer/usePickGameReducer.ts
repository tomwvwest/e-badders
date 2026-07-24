import {
  ActiveCourts,
  CourtPlayer,
  PickPlayersState,
} from "@/types/court.types";
import { useReducer } from "react";
import setPlayerCase from "./setPlayerCase";
import { AllPlayer } from "@/types/player.types";
import { getBenchOptions } from "@/utils/playerUtils";

export type Action =
  | { type: "setPlayer"; playerId: number }
  | { type: "focusPosition"; positionId: number };

export default function usePickGameReducer(
  courtsState: ActiveCourts,
  allPlayers: AllPlayer[],
  makeSuggestion: boolean
) {
  const benchedPlayers = getBenchOptions(courtsState, allPlayers);
  const practiceSuggestions: Record<number, CourtPlayer> = benchedPlayers
    .slice(0, 4)
    .reduce<Record<number, CourtPlayer>>((record, player, index) => {
      record[index + 1] = player;
      return record;
    }, {});

  const initialState: PickPlayersState = {
    noOfPositions: 4,
    filledPositions: makeSuggestion ? practiceSuggestions : {},
    benchedPlayers,
    focusedInput: 1,
  };

  function reducer(playerState: PickPlayersState, action: Action) {
    switch (action.type) {
      case "setPlayer":
        return setPlayerCase(playerState, action);

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
