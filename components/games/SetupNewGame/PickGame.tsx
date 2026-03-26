"use client";

import { useForm } from "react-hook-form";
import PlayerSuggestions from "./PlayerSuggestions";
import usePickGameReducer from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";
import { useAllPlayers } from "@/hooks/context/useAllPlayers";
import { CourtPlayer } from "@/types/court.types";

type FormValues = {
  searchValue: string;
};

export default function PickGame() {
  const { allPlayers } = useAllPlayers();
  const { register, handleSubmit } = useForm<FormValues>();
  const benchOptions = allPlayers
    .filter((p) => p.isSessionPlayer)
    .map((p) => ({
      playerId: p.playerId,
      name: p.playerName,
    })) as CourtPlayer[];

  const [state, dispatch] = usePickGameReducer(benchOptions);
  const { noOfPositions, filledPositions, focusedInput } = state;

  const onSubmit = async (data: FormValues) => {
    console.log(data);
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
      <button>Create Game</button>
      <PlayerSuggestions state={state} dispatch={dispatch} />
    </>
  );
}
