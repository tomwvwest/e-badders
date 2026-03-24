"use client";

import { AllPlayer, CreatePlayer } from "@/types/player.types";
import { Dispatch, SetStateAction } from "react";

export default function AddExistingPlayer({
  currentPlayers,
  addPlayer,
}: {
  currentPlayers: AllPlayer[] | undefined;
  addPlayer: (playerId?: number, player?: CreatePlayer) => Promise<void>;
}) {
  if (!currentPlayers?.length) return;
  const existingPlayers = currentPlayers.filter((p) => !p.isSessionPlayer);

  return (
    <>
      <p>Pick from existing players: </p>
      {existingPlayers.map((p) => (
        <button key={p.playerId} onClick={() => addPlayer(p.playerId)}>
          {p.playerName}
        </button>
      ))}
    </>
  );
}
