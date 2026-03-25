"use client";
import { useAllPlayers } from "@/hooks/context/useAllPlayers";
import { Action } from "@/hooks/reducer/usePickGameReducer";
import { PickPlayersState } from "@/types/court.types";
import { AllPlayer } from "@/types/player.types";
import { ActionDispatch, useState } from "react";

export default function PlayerSuggestions({
  state: { players: courtPlayers, noOfCourts },
  dispatch,
}: {
  state: PickPlayersState;
  dispatch: ActionDispatch<[action: Action]>;
}) {
  const { allPlayers } = useAllPlayers();
  const initialOptions = allPlayers.filter((p) => p.isSessionPlayer);

  const [playerOptions, setPlayerOptions] =
    useState<AllPlayer[]>(initialOptions);

  const handlePlayerSelection = (playerId: number, name: string) => {
    //if the court places arent filled, add player
    const noOfCourtPlayers = Object.keys(courtPlayers).length;
    if (noOfCourtPlayers < noOfCourts) {
      dispatch({ type: "setPlayer", player: { playerId, name } });
      setPlayerOptions((curr) => [
        ...curr.filter((p) => p.playerId !== playerId),
      ]);
    }
  };

  return (
    <div className="flex gap-4">
      {playerOptions.map(({ playerId, playerName }) => (
        <button onClick={() => handlePlayerSelection(playerId, playerName)}>
          {playerName}
        </button>
      ))}
    </div>
  );
}
