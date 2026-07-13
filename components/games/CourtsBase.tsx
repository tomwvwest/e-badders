"use client";

import { CourtContext } from "@/contexts/CourtsContext";
import useCourtReducer from "@/hooks/reducer/useCourtReducer/useCourtReducer";
import { useEffect } from "react";
import SessionCourts from "./SessionCourts";

export default function CourtsBase() {
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
        <SessionCourts numberOfCourts={numberOfCourts} />
      </CourtContext.Provider>
    </div>
  );
}
