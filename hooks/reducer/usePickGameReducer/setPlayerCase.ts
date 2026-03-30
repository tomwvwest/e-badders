import { PickPlayersState } from "@/types/court.types";
import {
  getNewAndExistingPlayers,
  getNextFocusedInput,
  updateBenchPlayers,
} from "./utils";

export default function setPlayerCase(
  playerState: PickPlayersState,
  action: {
    type: "setPlayer";
    playerId: number;
  }
) {
  const { filledPositions, focusedInput, benchedPlayers } = playerState;
  const { playerId } = action;

  if (focusedInput === null) return playerState;
  const { existingPlayer, courtPlayer } = getNewAndExistingPlayers(
    playerState,
    playerId
  );
  if (!courtPlayer) return playerState;

  const updatedPlayers = {
    ...filledPositions,
    [focusedInput]: courtPlayer,
  };

  const updatedFocusInput = getNextFocusedInput({
    ...playerState,
    filledPositions: updatedPlayers,
  });

  const updatedBenchedPlayers = updateBenchPlayers(
    benchedPlayers,
    existingPlayer,
    action.playerId
  );

  return {
    ...playerState,
    filledPositions: updatedPlayers,
    focusedInput: updatedFocusInput,
    benchedPlayers: updatedBenchedPlayers,
  };
}
