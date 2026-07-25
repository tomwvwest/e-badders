"use client";
import { Action } from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";
import { CourtPlayer, FocusedInput } from "@/types/court.types";
import { ActionDispatch } from "react";

export default function PlayerSuggestions({
  benchedPlayers,
  focusedInput,
  gameDispatch,
}: {
  benchedPlayers: CourtPlayer[];
  focusedInput: FocusedInput;
  gameDispatch: ActionDispatch<[action: Action]>;
}) {
  const handlePlayerSelection = (playerId: number) => {
    if (focusedInput !== null) {
      gameDispatch({
        type: "setPlayer",
        playerId,
      });
    }
  };

  return (
    <div className="flex flex-col divide-y overflow-auto min-h-0 max-h-64 flex-1">
      {benchedPlayers.map(({ playerId, name }, i) => (
        <button key={i} onClick={() => handlePlayerSelection(playerId)}>
          {name}
        </button>
      ))}
    </div>
  );
}
