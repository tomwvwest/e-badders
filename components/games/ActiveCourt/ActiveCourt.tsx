import { CourtState } from "@/types/court.types";
import CourtTimer from "./CourtTimer";
import EnterScores from "./EnterScores";
import { useCourts } from "@/hooks/context/useCourts";

export default function ActiveCourt({ courtId }: { courtId: number }) {
  const { courtsState } = useCourts();
  const { players, secondsPlayed } = courtsState[courtId];

  return (
    <>
      <p>P1: {players[1]?.name}</p>
      <p>P2: {players[2]?.name}</p>
      <p>P3: {players[3]?.name}</p>
      <p>P4: {players[4]?.name}</p>
      <CourtTimer seconds={secondsPlayed} />
      <EnterScores courtId={courtId} />
    </>
  );
}
