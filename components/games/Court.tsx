"use client";

import SetupNewGame from "./SetupNewGame/SetupNewGame";
import ActiveCourt from "./ActiveCourt/ActiveCourt";
import { useCourts } from "@/hooks/context/useCourts";
import { useState } from "react";

export type GamePickType = "manual" | "suggest" | undefined;

export default function Court({ courtId }: { courtId: number }) {
  const { courtsState } = useCourts();
  const [pickType, setPickType] = useState<GamePickType>();

  const emptyCourt = courtsState[courtId] === undefined;

  const resetStep = () => setPickType(undefined);

  return (
    <div className="flex flex-col border rounded m-3">
      {/* Court Header - move Create Game and Cancel here? */}
      <div className="p-2 border-b flex">
        <p>Court {courtId}</p>
        {pickType && <button onClick={resetStep}>Cancel</button>}
      </div>

      {/* Court Body */}
      <div className="flex-1">
        {emptyCourt ? (
          <SetupNewGame
            courtId={courtId}
            pickType={pickType}
            setPickType={setPickType}
          />
        ) : (
          <ActiveCourt courtId={courtId} />
        )}
      </div>
    </div>
  );
}
