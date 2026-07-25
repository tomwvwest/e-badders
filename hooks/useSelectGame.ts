import { FormValues } from "@/components/games/SetupNewGame/PickGame/PickGame";
import { getObjectLength } from "@/utils/objectUtils";
import { UseFormRegister, useForm } from "react-hook-form";
import { useAllPlayers } from "./context/useAllPlayers";
import { useCourts } from "./context/useCourts";
import usePickGameReducer, { Action } from "./reducer/usePickGameReducer/usePickGameReducer";
import usePlayerSuggestions from "./usePlayerSuggestions";
import { CourtPlayer, PickPlayersState } from "@/types/court.types";
import { ActionDispatch, Dispatch, SetStateAction, useState } from "react";

export type useSelectGameType = {
  gameState: PickPlayersState;
  gameDispatch: ActionDispatch<[action: Action]>;
  register: UseFormRegister<FormValues>;
  namesToShow: CourtPlayer[];
  canCreate: boolean;
  handleCreateGame: () => void;
  pickType: GamePickType,
  setPickType: Dispatch<SetStateAction<GamePickType>>
}

export type GamePickType = "manual" | "suggest" | undefined;

export default function useSelectGame(
  courtId: number,
  // makeSuggestion: boolean
): useSelectGameType {
  const { allPlayers } = useAllPlayers();
  const { courtsState, courtsDispatch } = useCourts();

  const [pickType, setPickType] = useState<GamePickType>();

  const makeSuggestion = pickType === "suggest";
  const [gameState, gameDispatch] = usePickGameReducer(
    courtsState,
    allPlayers,
    makeSuggestion
  );

  const { register, watch } = useForm<FormValues>();
  const searchValue = watch("searchValue");

  const { noOfPositions, filledPositions, benchedPlayers } = gameState;

  const namesToShow = usePlayerSuggestions(benchedPlayers, searchValue);

  const canCreate = getObjectLength(filledPositions) === noOfPositions;

  const handleCreateGame = () => {
    if (!canCreate) return;

    setPickType(undefined);

    courtsDispatch({
      type: "startGame",
      courtId,
      players: filledPositions,
    });
  };

  return {
    gameState,
    gameDispatch,
    register,
    namesToShow,
    canCreate,
    handleCreateGame,
    pickType,
    setPickType
  };
}
