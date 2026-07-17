import { Action } from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";
import { PickPlayersState } from "@/types/court.types";
import { ActionDispatch } from "react";
import PositionButton from "./PositionButton";

type Props = {
  gameState: PickPlayersState;
  gameDispatch: ActionDispatch<[action: Action]>;
};

export default function PositionPicker({ gameState, gameDispatch }: Props) {
  const { noOfPositions, filledPositions, focusedInput } = gameState;
  const positions = Array.from({ length: noOfPositions }, (_, i) => i + 1);

  return (
    <div className="flex gap-4">
      {positions.map((positionId) => (
        <PositionButton
          key={positionId}
          positionId={positionId}
          gameDispatch={gameDispatch}
          isFocused={focusedInput === positionId}
          playerName={filledPositions[positionId]?.name}
        />
      ))}
    </div>
  );
}
