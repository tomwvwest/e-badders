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
  return (
    <button
      key={positionId}
      onClick={() =>
        gameDispatch({
          type: "focusPosition",
          positionId,
        })
      }
      className={isFocused ? "border" : ""}
    >
      {playerName ?? "Empty"}
    </button>
  );
}
