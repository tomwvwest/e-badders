"use client";

import SetupNewGame from "./SetupNewGame/SetupNewGame";
import ActiveCourt from "./ActiveCourt/ActiveCourt";
import { CourtState } from "@/types/court.types";

export default function Court({
  courtState,
  courtId,
}: {
  courtState: CourtState | undefined;
  courtId: number;
}) {
  const emptyCourt = courtState === undefined;

  return (
    <div className="border rounded m-3">
      <p className="p-2">Court {courtId}</p>
      <div className="flex justify-center">
        {emptyCourt ? (
          <SetupNewGame courtId={courtId} />
        ) : (
          <ActiveCourt court={courtState} />
        )}
      </div>
    </div>
  );
}
