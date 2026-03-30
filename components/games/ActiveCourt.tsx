import { CourtState } from "@/types/court.types";
import CourtTimer from "./CourtTimer";

export default function ActiveCourt({ court }: { court: CourtState }) {
  const { players, secondsPlayed } = court;

  return (
    <>
      <p>{players[1]?.name}</p>
      <p>{players[2]?.name}</p>
      <p>{players[3]?.name}</p>
      <p>{players[4]?.name}</p>
      <CourtTimer seconds={secondsPlayed}/>
    </>
  );
}
