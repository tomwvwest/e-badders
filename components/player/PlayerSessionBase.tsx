"use client";

import AddPlayerToSession from "./AddPlayerToSession";
import CurrentSessionPlayers from "./CurrentSessionPlayers";
import { useState } from "react";
import { AllPlayer } from "@/types/player.types";

export default function PlayerSessionBase({
  allPlayersRes,
  sessionId,
}: {
  allPlayersRes: AllPlayer[];
  sessionId: number;
}) {
  const [allPlayers, setAllPlayers] =
    useState<AllPlayer[]>(allPlayersRes);

  return (
    <>
      <AddPlayerToSession
        allPlayers={allPlayers}
        setAllPlayers={setAllPlayers}
        sessionId={sessionId}
      />
      <CurrentSessionPlayers
        allPlayers={allPlayers}
        setAllPlayers={setAllPlayers}
        sessionId={sessionId}
      />
    </>
  );
}
