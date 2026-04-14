"use client";

import { CourtContext } from "@/contexts/CourtsContext";
import Court from "./Court";
import useCourtReducer from "@/hooks/reducer/useCourtReducer/useCourtReducer";
import { useEffect } from "react";

export default function GameBase() {
  const numberOfCourts = 3;
  const [courtsState, courtsDispatch] = useCourtReducer();

  useEffect(() => {
    const interval = setInterval(() => {
      courtsDispatch({ type: "incrementTimer" });
    }, 1000);

    return () => clearInterval(interval);
  }, [courtsDispatch]);

  return (
    <div className="bg-blue-200">
      <h1>Games</h1>

      <CourtContext.Provider value={{ courtsState, courtsDispatch }}>
        <div className="grid grid-cols-3 h-70">
          {Array.from({ length: numberOfCourts }, (_, i) => {
            const courtId = i + 1;
            const courtState = courtsState[courtId];

            return (
              <Court key={courtId} courtState={courtState} courtId={courtId} />
            );
          })}
        </div>
      </CourtContext.Provider>
    </div>
  );
}
