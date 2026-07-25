"use client";

import { Dispatch, SetStateAction, useState } from "react";
import PickGame from "./PickGame/PickGame";
import { GamePickType } from "../Court";
import { useSelectGameType } from "@/hooks/useSelectGame";

type Props = {
  pickType: GamePickType;
  setPickType: Dispatch<SetStateAction<GamePickType | undefined>>;
  selectGame: useSelectGameType;
};

export default function SetupNewGame({
  pickType,
  setPickType,
  selectGame
}: Props) {
  if (pickType) {
    return <PickGame selectGame={selectGame} />;
  }

  return (
    <div className="flex justify-center">
      <button onClick={() => setPickType("manual")}>Select Players</button>
      <button onClick={() => setPickType("suggest")}>Suggest Game</button>
    </div>
  );
}
