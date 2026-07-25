import { Action } from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";
import { PickPlayersState } from "@/types/court.types";
import { ActionDispatch } from "react";
import PositionView from "./PositionButton";

type Props = {
  gameState: PickPlayersState;
  gameDispatch: ActionDispatch<[action: Action]>;
};

export default function PositionPicker({ gameState, gameDispatch }: Props) {
  const { noOfPositions, filledPositions, focusedInput } = gameState;
  const positions = Array.from({ length: noOfPositions }, (_, i) => i + 1);

  const positionButtons = positions.map((positionId) => (
    <PositionView
      key={positionId}
      positionId={positionId}
      gameDispatch={gameDispatch}
      isFocused={focusedInput === positionId}
      playerName={filledPositions[positionId]?.name}
    />
  ));
  const upperPositions = positionButtons.slice(0, 2);
  const lowerPositions = positionButtons.slice(2, 4);

  return (
    <div className="grid p-1 grid-rows">
      {upperPositions}

      <div className="flex justify-center items-center">vs</div>

      {lowerPositions}
    </div>
  );
}
