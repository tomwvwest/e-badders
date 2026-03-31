"use client";

import { useForm } from "react-hook-form";
import PlayerSuggestions from "./PlayerSuggestions";
import usePickGameReducer from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";
import { useAllPlayers } from "@/hooks/context/useAllPlayers";
import getObjectLength from "@/utils/objectUtils";
import { useCourts } from "@/hooks/context/useCourts";
import getBenchOptions from "@/utils/playerUtils";
import { useEffect, useMemo } from "react";

type FormValues = {
  searchValue: string;
};

export default function PickGame({ courtId }: { courtId: number }) {
  const { allPlayers } = useAllPlayers();
  const { courtsState, courtDispatch } = useCourts();

  const { register, handleSubmit, watch } = useForm<FormValues>();

  const searchValue = watch("searchValue");
  const benchOptions = getBenchOptions(courtsState, allPlayers);
  const [state, dispatch] = usePickGameReducer(benchOptions);
  const { noOfPositions, filledPositions, focusedInput, benchedPlayers } =
    state;

  const namesToShow = useMemo(() => {
    return !searchValue
      ? benchedPlayers
      : benchedPlayers.filter(({ name }) =>
          name.toLowerCase().includes(searchValue.trim().toLowerCase())
        );
  }, [benchedPlayers, searchValue]);

  const canCreate = getObjectLength(filledPositions) === noOfPositions;

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  const createGame = () => {
    if (!canCreate) return;
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
      <PlayerSuggestions
        benchedPlayers={namesToShow}
        focusedInput={focusedInput}
        dispatch={dispatch}
      />
    </>
  );
}
