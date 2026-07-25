"use client";

import SetupNewGame from "./SetupNewGame/SetupNewGame";
import ActiveCourt from "./ActiveCourt/ActiveCourt";
import { useCourts } from "@/hooks/context/useCourts";
import { useState } from "react";
import useSelectGame from "@/hooks/useSelectGame";
import CourtHeader from "./Court Header/CourtHeader";

export type GamePickType = "manual" | "suggest" | undefined;

export default function Court({ courtId }: { courtId: number }) {
  const { courtsState } = useCourts();

  const selectGame = useSelectGame(courtId);
  const { canCreate, handleCreateGame, pickType, setPickType } = selectGame;

  const emptyCourt = courtsState[courtId] === undefined;

  return (
    <div className="flex flex-col border rounded m-3 overflow-hidden">
      <CourtHeader
        courtId={courtId}
        canCreate={canCreate}
        handleCreateGame={handleCreateGame}
        pickType={pickType}
        setPickType={setPickType}
      />

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
