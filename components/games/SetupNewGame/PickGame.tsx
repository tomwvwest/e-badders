"use client";

import { useForm } from "react-hook-form";
import PlayerSuggestions from "./PlayerSuggestions";
import usePickGameReducer from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";
import { useAllPlayers } from "@/hooks/context/useAllPlayers";
import { CourtPlayer } from "@/types/court.types";
import getObjectLength from "@/utils/objectUtils";
import { useCourts } from "@/hooks/context/useCourts";

type FormValues = {
  searchValue: string;
};

export default function PickGame({ courtId }: { courtId: number }) {
  const { allPlayers } = useAllPlayers();
  const { courtsState, courtDispatch } = useCourts();

  const { register, handleSubmit } = useForm<FormValues>();

  const playingPlayerIds = Object.values(courtsState).flatMap((court) =>
    Object.values(court.players).map((p) => p?.playerId)
  );
  const benchOptions = allPlayers
    .filter((p) => p.isSessionPlayer && !playingPlayerIds.includes(p.playerId))
    .map((p) => ({
      playerId: p.playerId,
      name: p.playerName,
    })) as CourtPlayer[];

  const [state, dispatch] = usePickGameReducer(benchOptions);
  const { noOfPositions, filledPositions, focusedInput } = state;

  const canCreate = getObjectLength(filledPositions) === noOfPositions;

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  const createGame = () => {
    if (!canCreate) return;
    console.log(state);
    courtDispatch({ type: "startGame", courtId, players: filledPositions });
  };

  return (
    <>
      <div className="flex gap-4">
        {Array.from({ length: noOfPositions }, (_, i) => {
          const positionId = i + 1;
          const player = filledPositions[positionId];

          return (
            <button
              key={positionId}
              onClick={() => dispatch({ type: "focusPosition", positionId })}
              className={focusedInput === positionId ? "border" : ""}
            >
              {player ? player.name : "Empty"}
            </button>
          );
        })}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-6">
        <input
          {...register("searchValue")}
          placeholder="Search for a player..."
        />
      </form>
      <button onClick={createGame}>
        {canCreate && ">> "}Create Game{canCreate && " <<"}
      </button>
      <PlayerSuggestions state={state} dispatch={dispatch} />
    </>
  );
}
