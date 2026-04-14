"use client";

import { useForm } from "react-hook-form";
import PlayerSuggestions from "./PlayerSuggestions";
import usePickGameReducer from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";
import { useAllPlayers } from "@/hooks/context/useAllPlayers";
import getObjectLength from "@/utils/objectUtils";
import { useCourts } from "@/hooks/context/useCourts";
import usePlayerSuggestions from "@/hooks/usePlayerSuggestions";

type FormValues = {
  searchValue: string;
};

export default function PickGame({ courtId }: { courtId: number }) {
  const { allPlayers } = useAllPlayers();
  const { courtsState, courtsDispatch } = useCourts();

  const { register, watch } = useForm<FormValues>();

  const searchValue = watch("searchValue");
  const [gameState, gameDispatch] = usePickGameReducer(courtsState, allPlayers);

  const { noOfPositions, filledPositions, focusedInput, benchedPlayers } =
    gameState;

  const namesToShow = usePlayerSuggestions(benchedPlayers, searchValue);
  const canCreate = getObjectLength(filledPositions) === noOfPositions;

  const createGame = () => {
    if (!canCreate) return;
    courtsDispatch({ type: "startGame", courtId, players: filledPositions });
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
              onClick={() => gameDispatch({ type: "focusPosition", positionId })}
              className={focusedInput === positionId ? "border" : ""}
            >
              {player ? player.name : "Empty"}
            </button>
          );
        })}
      </div>

      <form className="flex gap-6">
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
        gameDispatch={gameDispatch}
      />
    </>
  );
}
