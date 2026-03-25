"use client";

import { AllPlayer, CreatePlayer } from "@/types/player.types";

export default function AddExistingPlayer({
  allPlayers,
  addPlayer,
}: {
  allPlayers: AllPlayer[] | undefined;
  addPlayer: (playerId?: number, player?: CreatePlayer) => Promise<void>;
}) {
  if (!allPlayers?.length) return;
  const existingPlayers = allPlayers
    .filter((p) => !p.isSessionPlayer)
    .sort((a, b) => a.playerId - b.playerId);

  return (
    <>
      <p>Pick from existing players: </p>
      {existingPlayers.map((p) => (
        <button
          className="px-5"
          key={p.playerId}
          onClick={() => addPlayer(p.playerId)}
        >
          {p.playerName}
        </button>
      ))}
    </>
  );
}
