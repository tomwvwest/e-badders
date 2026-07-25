"use client";

import { useForm } from "react-hook-form";
import PlayerSuggestions from "./RHS/PlayerSuggestions";
import usePickGameReducer from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";
import { useAllPlayers } from "@/hooks/context/useAllPlayers";
import { useCourts } from "@/hooks/context/useCourts";
import usePlayerSuggestions from "@/hooks/usePlayerSuggestions";
import { getObjectLength } from "@/utils/objectUtils";
import PositionPicker from "./LHS/PositionPicker";
import PickSearchPlayer from "./RHS/PickSearchPlayer";
import CreateGameButton from "./RHS/CreateGameButton";
import useSelectGame from "@/hooks/useSelectGame";
import PickFromBenchedPlayers from "./RHS/PickFromBenchedPlayers";

export type FormValues = {
  searchValue: string;
};

export default function PickGame({
  courtId,
  makeSuggestion,
}: {
  courtId: number;
  makeSuggestion: boolean;
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
    <div className="grid grid-cols-2 h-full divide-x">
      {/* LHS */}
      <PositionPicker gameState={gameState} gameDispatch={gameDispatch} />

      {/* RHS */}
      <PickFromBenchedPlayers
        register={register}
        namesToShow={namesToShow}
        focusedInput={gameState.focusedInput}
        gameDispatch={gameDispatch}
      />
    </div>
  );
}
