"use client";
import { Action } from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";
import { CourtPlayer, FocusedInput, PickPlayersState } from "@/types/court.types";
import { ActionDispatch } from "react";

export default function PlayerSuggestions({
  benchedPlayers,
  focusedInput,
  dispatch,
}: {
  benchedPlayers: CourtPlayer[];
  focusedInput: FocusedInput;
  dispatch: ActionDispatch<[action: Action]>;
}) {
  const handlePlayerSelection = (playerId: number) => {
    if (focusedInput !== null) {
      dispatch({
        type: "setPlayer",
        playerId,
      });
    }
  };

  return (
    <div className="flex gap-4">
      {benchedPlayers.map(({ playerId, name }, i) => (
        <button key={i} onClick={() => handlePlayerSelection(playerId)}>
          {name}
        </button>
      ))}
    </div>
  );
}
