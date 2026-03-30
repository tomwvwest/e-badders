"use client";

import { CourtContext } from "@/contexts/CourtsContext";
import Court from "./Court";
import useCourtReducer from "@/hooks/reducer/useCourtReducer";
import { ActiveCourts } from "@/types/court.types";

const initialCourtState: ActiveCourts = {
  // 1: {
  //   courtId: 1,
  //   players: {
  //     1: { playerId: 1, name: "Tom" },
  //     2: { playerId: 2, name: "Lara" },
  //     3: { playerId: 34, name: "Noah" },
  //     4: { playerId: 36, name: "Jordan" },
  //   },
  //   secondsPlayed: 0,
  // },
};

export default function GameBase() {
  const numberOfCourts = 2;
  const [activeCourtState, courtDispatch] = useCourtReducer(initialCourtState);
  console.log(activeCourtState);

  return (
    <div className="bg-blue-200">
      <h1>Games</h1>

      <CourtContext.Provider value={{ courtDispatch }}>
        {Array.from({ length: numberOfCourts }, (_, i) => {
          const courtId = i + 1;
          const courtState = activeCourtState[courtId];

          return (
            <Court key={courtId} courtState={courtState} courtId={courtId} />
          );
        })}
      </CourtContext.Provider>
    </div>
  );
}
