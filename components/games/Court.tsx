"use client";

import SetupNewGame from "./SetupNewGame/SetupNewGame";
import ActiveCourt from "./ActiveCourt/ActiveCourt";
import { useCourts } from "@/hooks/context/useCourts";
import { isObjectEmpty } from "@/utils/objectUtils";

export default function Court({ courtId }: { courtId: number }) {
  const { courtsState } = useCourts();
  const emptyCourt = courtsState[courtId] === undefined;

  return (
    <div className="border rounded m-3">
      <p className="p-2">Court {courtId}</p>
      <div className="flex justify-center">
        {emptyCourt ? (
          <SetupNewGame courtId={courtId} />
        ) : (
          <ActiveCourt courtId={courtId} />
        )}
      </div>
    </div>
  );
}
