import { CourtState } from "@/types/court.types";
import CourtTimer from "../CourtTimer";
import EnterScores from "./EnterScores";

export default function ActiveCourt({ court }: { court: CourtState }) {
  const { players, secondsPlayed, courtId } = court;

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
