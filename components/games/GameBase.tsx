"use client";

import Court from "./Court";
import useCourtReducer from "@/hooks/useCourtReducer";
import { ActiveCourts, CourtState } from "@/types/court.types";

const initialCourtState: ActiveCourts = [
  {
    courtId: 1,
    playerIds: { player1Id: 1, player2Id: 2 },
    secondsPlayed: 0,
  },
];

export default function GameBase() {
  const [courtState, dispatch] = useCourtReducer(initialCourtState);

  return (
    <div className="bg-blue-200">
      <h1>Games</h1>

      {/* one big react hook form or a form per court? Probably latter*/}
      {courtState.map((_: CourtState, i: number) => (
        <Court key={i} courtNumber={i + 1} />
      ))}
    </div>
  );
}
