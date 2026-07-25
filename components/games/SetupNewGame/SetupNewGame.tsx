"use client";

import { Dispatch, SetStateAction, useState } from "react";
import PickGame from "./PickGame/PickGame";
import { GamePickType } from "../Court";

type Props = {
  courtId: number;
  pickType: GamePickType;
  setPickType: Dispatch<SetStateAction<GamePickType | undefined>>;
};

export default function SetupNewGame({
  courtId,
  pickType,
  setPickType,
}: Props) {
  if (pickType) {
    return <PickGame courtId={courtId} makeSuggestion={pickType === "suggest"} />;
  }

  return (
    <div className="flex justify-center">
      <button onClick={() => setPickType("manual")}>Select Players</button>
      <button onClick={() => setPickType("suggest")}>Suggest Game</button>
    </div>
  );
}
