"use client";

import { removeSessionPlayerAction } from "@/app/actions/player.actions";
import { useAllPlayers } from "@/hooks/context/useAllPlayers";
import useEditPlayerAttendance from "@/hooks/useEditPlayerAttendance";

export default function CurrentSessionPlayers({
  sessionId,
}: {
  sessionId: number;
}) {
  const { allPlayers, setAllPlayers } = useAllPlayers();
  const sessionPlayers = allPlayers
    .filter((p) => p.isSessionPlayer)
    .sort((a, b) => a.playerId - b.playerId);

  const removePlayer = async (playerId: number) => {
    useEditPlayerAttendance(playerId, false, setAllPlayers);
    await removeSessionPlayerAction(playerId, sessionId);
  };

  return sessionPlayers.map(({ playerId, playerName }, i) => (
    <div key={playerId} className="border flex gap-6">
      <p className="">
        {i + 1}: {playerName}
      </p>
      <button onClick={() => removePlayer(playerId)}>Remove</button>
    </div>
  ));
}
