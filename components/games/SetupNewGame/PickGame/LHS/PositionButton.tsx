import { Action } from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";
import { ActionDispatch } from "react";

export default function PositionButton({
  positionId,
  gameDispatch,
  isFocused,
  playerName,
}: {
  positionId: number;
  gameDispatch: ActionDispatch<[action: Action]>;
  isFocused: boolean;
  playerName: string | undefined;
}) {
  const handleOnClick = () =>
    gameDispatch({
      type: "focusPosition",
      positionId,
    });

  return (
    <div className="flex justify-center items-center">
      <button
        key={positionId}
        onClick={handleOnClick}
        className={`rounded-md w-3/5 p-0.5 bg-white ${
          isFocused ? "border" : ""
        }`}
      >
        P{positionId}: {playerName ?? "Empty"}
      </button>
    </div>
  );
}
