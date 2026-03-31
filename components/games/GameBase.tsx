"use client";

import { CourtContext } from "@/contexts/CourtsContext";
import Court from "./Court";
import useCourtReducer from "@/hooks/reducer/useCourtReducer/useCourtReducer";
import { useEffect } from "react";

export default function GameBase() {
  const numberOfCourts = 3;
  const [courtsState, courtDispatch] = useCourtReducer();

  useEffect(() => {
    const interval = setInterval(() => {
      courtDispatch({ type: "incrementTimer" });
    }, 1000);

    return () => clearInterval(interval);
  }, [courtDispatch]);

  return (
    <div className="bg-blue-200">
      <h1>Games</h1>

      <CourtContext.Provider value={{ courtsState, courtDispatch }}>
        {Array.from({ length: numberOfCourts }, (_, i) => {
          const courtId = i + 1;
          const courtState = courtsState[courtId];

          return (
            <Court key={courtId} courtState={courtState} courtId={courtId} />
          );
        })}
      </CourtContext.Provider>
    </div>
  );
}
