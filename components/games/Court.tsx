"use client";

import SetupNewGame from "./SetupNewGame/SetupNewGame";
import ActiveCourt from "./ActiveCourt/ActiveCourt";
import { useCourts } from "@/hooks/context/useCourts";
import { useState } from "react";
import useSelectGame from "@/hooks/useSelectGame";
import CourtHeader from "./CourtHeader";

export type GamePickType = "manual" | "suggest" | undefined;

export default function Court({ courtId }: { courtId: number }) {
  const { courtsState } = useCourts();

  const selectGame = useSelectGame(courtId);
  const { handleCreateGame, pickType, setPickType } = selectGame;

  const emptyCourt = courtsState[courtId] === undefined;

  return (
    <div className="flex flex-col border rounded m-3">
      <CourtHeader
        courtId={courtId}
        handleCreateGame={handleCreateGame}
        pickType={pickType}
        setPickType={setPickType}
      />

      {/* Court Body */}
      <div className="flex-1">
        {emptyCourt ? (
          <SetupNewGame
            pickType={pickType}
            setPickType={setPickType}
            selectGame={selectGame}
          />
        ) : (
          <ActiveCourt courtId={courtId} />
        )}
      </div>
    </div>
  );
}
