import { Action } from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";
import { PickPlayersState } from "@/types/court.types";
import { ActionDispatch } from "react";

type Props = {
  gameState: PickPlayersState;
  gameDispatch: ActionDispatch<[action: Action]>;
};

export default function PositionPicker({
  gameState,
  gameDispatch,
}: Props) {
  const { noOfPositions, filledPositions, focusedInput } = gameState;

  return (
    <div className="flex gap-4">
      {Array.from({ length: noOfPositions }, (_, i) => {
        const positionId = i + 1;
        const player = filledPositions[positionId];

        return (
          <button
            key={positionId}
            onClick={() =>
              gameDispatch({
                type: "focusPosition",
                positionId,
              })
            }
            className={focusedInput === positionId ? "border" : ""}
          >
            {player?.name ?? "Empty"}
          </button>
        );
      })}
    </div>
  );
}