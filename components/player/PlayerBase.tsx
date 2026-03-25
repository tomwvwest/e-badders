"use client";

import AddPlayerToSession from "./AddPlayerToSession";
import CurrentSessionPlayers from "./CurrentSessionPlayers";

export default function PlayerBase({
  sessionId,
}: {
  sessionId: number;
}) {
  return (
    <>
      <AddPlayerToSession
        sessionId={sessionId}
      />
      <CurrentSessionPlayers
        sessionId={sessionId}
      />
    </>
  );
}
