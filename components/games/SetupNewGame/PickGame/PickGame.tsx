"use client";

import { useForm } from "react-hook-form";
import PlayerSuggestions from "./PlayerSuggestions";
import usePickGameReducer from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";
import { useAllPlayers } from "@/hooks/context/useAllPlayers";
import { useCourts } from "@/hooks/context/useCourts";
import usePlayerSuggestions from "@/hooks/usePlayerSuggestions";
import { getObjectLength } from "@/utils/objectUtils";
import PositionPicker from "./PositionPicker";
import PickSearchPlayer from "./PickSearchPlayer";
import CreateGameButton from "./CreateGameButton";
import useSelectGame from "@/hooks/useSelectGame";

export type FormValues = {
  searchValue: string;
};

export default function PickGame({
  courtId,
  makeSuggestion,
}: {
  courtId: number;
  makeSuggestion: boolean
}) {
  const {
    gameState,
    gameDispatch,
    register,
    namesToShow,
    canCreate,
    handleCreateGame,
  } = useSelectGame(courtId, makeSuggestion);

  return (
    <>
      <PositionPicker gameState={gameState} gameDispatch={gameDispatch} />

      <PickSearchPlayer register={register} />

      <CreateGameButton canCreate={canCreate} onClick={handleCreateGame} />

      <PlayerSuggestions
        benchedPlayers={namesToShow}
        focusedInput={gameState.focusedInput}
        gameDispatch={gameDispatch}
      />
    </>
  );
}
