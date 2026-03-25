import { CourtPlayer, PickPlayersState } from "@/types/court.types";
import { useReducer } from "react";

export type Action =
  | { type: "setPlayer"; player: CourtPlayer }
  | { type: "focusPosition"; positionId: number };

const initialState: PickPlayersState = {
  noOfCourts: 4,
  players: [],
  focusedInput: 1,
};

export default function usePickGameReducer() {
  function reducer(playerState: PickPlayersState, action: Action) {
    const { players, focusedInput, noOfCourts } = playerState;

    switch (action.type) {
      // fill the position with the player, then focus next selection
      case "setPlayer":
        if (focusedInput === null) return playerState;
        console.log(focusedInput, action.player);
        return {
          ...playerState,
          players: {
            ...players,
            [focusedInput]: action.player,
          },
          focusedInput: getNextFocusedInput(focusedInput, noOfCourts),
        };
      default:
        return playerState;
    }
  }

  return useReducer(reducer, initialState);
}

function getNextFocusedInput(focusedInput: number | null, noOfCourts: number) {
  if (focusedInput === null) return 1;
  else if (focusedInput >= noOfCourts) return null;
  else return focusedInput + 1;
}
