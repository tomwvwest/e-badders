"use client";

import AddPlayerToSession from "./AddPlayerToSession";
import CurrentSessionPlayers from "./CurrentSessionPlayers";

export default function PlayerBase() {
  return (
    <>
      <AddPlayerToSession />
      <CurrentSessionPlayers />
    </>
  );
}
