"use client";

import { removeSessionPlayerAction } from "@/app/actions/player.actions";
import useEditPlayerAttendance from "@/hooks/useEditPlayerAttendance";
import { AllPlayer } from "@/types/player.types";
import { PlayerSession } from "@/types/playerSession.types";
import { Dispatch, SetStateAction, useState } from "react";

export default function CurrentSessionPlayers({
  currentPlayers,
  setSessionPlayers,
  sessionId,
}: {
  currentPlayers: AllPlayer[];
  setSessionPlayers: Dispatch<SetStateAction<AllPlayer[]>>;
  sessionId: number;
}) {
  const sessionPlayers = currentPlayers.filter((p) => p.isSessionPlayer);

  const removePlayer = async (playerId: number) => {
    useEditPlayerAttendance(playerId, false, setSessionPlayers);
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
