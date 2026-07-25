"use client";

import { Dispatch, SetStateAction, useState } from "react";
import PickGame from "./PickGame/PickGame";
import { GamePickType } from "../Court";
import { useSelectGameType } from "@/hooks/useSelectGame";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";

type Props = {
  pickType: GamePickType;
  setPickType: Dispatch<SetStateAction<GamePickType | undefined>>;
  selectGame: useSelectGameType;
};

export default function SetupNewGame({
  pickType,
  setPickType,
  selectGame,
}: Props) {
  if (pickType) {
    return <PickGame selectGame={selectGame} />;
  }

  return (
    <div className="h-full flex justify-center items-center gap-4">
      <PrimaryButton
        text="Select Players"
        onClick={() => setPickType("manual")}
      />
      <PrimaryButton
        text="Suggest Game"
        onClick={() => setPickType("suggest")}
      />
    </div>
  );
}
