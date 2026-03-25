"use client";

import AddPlayerToSession from "./AddPlayerToSession";
import CurrentSessionPlayers from "./CurrentSessionPlayers";
import { useState } from "react";
import { AllPlayer } from "@/types/player.types";

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
