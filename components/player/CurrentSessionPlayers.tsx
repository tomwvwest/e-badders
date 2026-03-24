"use client";

import { removeSessionPlayerAction } from "@/app/actions/player.actions";
import useEditPlayerAttendance from "@/hooks/useEditPlayerAttendance";
import { AllPlayer } from "@/types/player.types";
import { Dispatch, SetStateAction } from "react";

export default function CurrentSessionPlayers({
  allPlayers,
  setAllPlayers,
  sessionId,
}: {
  allPlayers: AllPlayer[];
  setAllPlayers: Dispatch<SetStateAction<AllPlayer[]>>;
  sessionId: number;
}) {
  const sessionPlayers = allPlayers
    .filter((p) => p.isSessionPlayer)
    .sort((a, b) => a.playerId - b.playerId);

  const removePlayer = async (playerId: number) => {
    useEditPlayerAttendance(playerId, false, setAllPlayers);
    await removeSessionPlayerAction(playerId, sessionId);
  };

  return sessionPlayers.map(({ playerId, playerName }) => (
    <div className="flex" key={playerId}>
      <p>
        {playerId}: {playerName}
      </p>
      <button onClick={() => removePlayer(playerId)}>Delete</button>
    </div>
  ));
}
