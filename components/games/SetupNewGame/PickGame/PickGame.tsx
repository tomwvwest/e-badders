"use client";

import { useForm } from "react-hook-form";
import PlayerSuggestions from "./PlayerSuggestions";
import usePickGameReducer from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";
import { useAllPlayers } from "@/hooks/context/useAllPlayers";
import { useCourts } from "@/hooks/context/useCourts";
import usePlayerSuggestions from "@/hooks/usePlayerSuggestions";
import { getObjectLength } from "@/utils/objectUtils";
import PositionPicker from "./SelectedPlayers";

type FormValues = {
  searchValue: string;
};

export default function PickGame({ courtId }: { courtId: number }) {
  const { allPlayers } = useAllPlayers();
  const { courtsState, courtsDispatch } = useCourts();
  const [gameState, gameDispatch] = usePickGameReducer(courtsState, allPlayers);

  const { register, watch } = useForm<FormValues>();
  const searchValue = watch("searchValue");

  const { noOfPositions, filledPositions, focusedInput, benchedPlayers } =
    gameState;

  const namesToShow = usePlayerSuggestions(benchedPlayers, searchValue);
  const canCreate = getObjectLength(filledPositions) === noOfPositions;

  const handleCreateGame = () => {
    if (!canCreate) return;
    courtsDispatch({ type: "startGame", courtId, players: filledPositions });
  };

  return (
    <>
      {/* <div className="flex gap-4">
        {Array.from({ length: noOfPositions }, (_, i) => {
          const positionId = i + 1;
          const player = filledPositions[positionId];

          return (
            <button
              key={positionId}
              onClick={() =>
                gameDispatch({ type: "focusPosition", positionId })
              }
              className={focusedInput === positionId ? "border" : ""}
            >
              {player ? player.name : "Empty"}
            </button>
          );
        })}
      </div> */}
      <PositionPicker gameState={gameState} gameDispatch={gameDispatch} />

      <form className="flex gap-6">
        <input
          {...register("searchValue")}
          placeholder="Search for a player..."
        />
      </form>
      <button onClick={handleCreateGame}>
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
