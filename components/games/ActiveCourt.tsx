import { CourtState } from "@/types/court.types";

export default function ActiveCourt({
  courtState,
}: {
  courtState: CourtState;
}) {
  const { players } = courtState;
  console.log(players);

  return (
    <>
      <p>{players[1]?.name}</p>
      <p>{players[2]?.name}</p>
      <p>{players[3]?.name}</p>
      <p>{players[4]?.name}</p>
    </>
  );
}
