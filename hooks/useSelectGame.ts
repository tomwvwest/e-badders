import { FormValues } from "@/components/games/SetupNewGame/PickGame/PickGame";
import { getObjectLength } from "@/utils/objectUtils";
import { useForm } from "react-hook-form";
import { useAllPlayers } from "./context/useAllPlayers";
import { useCourts } from "./context/useCourts";
import usePickGameReducer from "./reducer/usePickGameReducer/usePickGameReducer";
import usePlayerSuggestions from "./usePlayerSuggestions";

export default function useSelectGame(
  courtId: number,
  makeSuggestion: boolean
) {
  const { allPlayers } = useAllPlayers();
  const { courtsState, courtsDispatch } = useCourts();

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
  };
}
