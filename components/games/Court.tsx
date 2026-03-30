"use client";

import SetupNewGame from "./SetupNewGame/SetupNewGame";
import ActiveCourt from "./ActiveCourt";
import { CourtState } from "@/types/court.types";

export default function Court({
  courtState,
  courtId,
}: {
  courtState: CourtState | undefined;
  courtId: number;
}) {
  console.log(courtState);
  const emptyCourt = courtState === undefined;

  return (
    <div className="border">
      <p>Court {courtId}</p>
      {emptyCourt ? (
        <SetupNewGame courtId={courtId} />
      ) : (
        <ActiveCourt court={courtState} />
      )}
    </div>
  );
}
