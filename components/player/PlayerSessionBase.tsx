"use client";

import { PlayerSession } from "@/types/playerSession.types";
import AddPlayerToSession from "./AddPlayerToSession";
import CurrentSessionPlayers from "./CurrentSessionPlayers";
import { useState } from "react";
import { AllPlayer } from "@/types/player.types";

export default function PlayerSessionBase({
  allPlayers,
  sessionId,
}: {
  allPlayers: AllPlayer[];
  sessionId: number;
}) {
  const [sessionPlayers, setSessionPlayers] =
    useState<AllPlayer[]>(allPlayers);

  return (
    <>
      <AddPlayerToSession
        currentPlayers={sessionPlayers}
        setSessionPlayers={setSessionPlayers}
        sessionId={sessionId}
      />
      <CurrentSessionPlayers
        currentPlayers={sessionPlayers}
        setSessionPlayers={setSessionPlayers}
        sessionId={sessionId}
      />
    </>
  );
}
