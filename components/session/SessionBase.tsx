"use client";

import { AllPlayerContext } from "@/contexts/AllPlayersContext";
import { AllPlayer } from "@/types/player.types";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  allPlayersRes: AllPlayer[];
};
export default function SessionBase({ children, allPlayersRes }: Props) {
  const [allPlayers, setAllPlayers] = useState<AllPlayer[]>(allPlayersRes);

  return (
    <AllPlayerContext.Provider value={{ allPlayers, setAllPlayers }}>
      {children}
    </AllPlayerContext.Provider>
  );
}
