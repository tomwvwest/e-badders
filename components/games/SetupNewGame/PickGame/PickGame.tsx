"use client";

import { useForm } from "react-hook-form";
import PositionPicker from "./LHS/PositionPicker";
import PickFromBenchedPlayers from "./RHS/PickFromBenchedPlayers";
import  { useSelectGameType } from "@/hooks/useSelectGame";

export type FormValues = {
  searchValue: string;
};

export default function PickGame({
  selectGame,
}: {
  selectGame: useSelectGameType;
}) {
  const { gameState, gameDispatch, register, namesToShow } = selectGame;

  return (
    <div className="grid grid-cols-2 h-full divide-x">
      {/* LHS */}
      <PositionPicker gameState={gameState} gameDispatch={gameDispatch} />

      {/* RHS */}
      <PickFromBenchedPlayers
        register={register}
        namesToShow={namesToShow}
        focusedInput={gameState.focusedInput}
        gameDispatch={gameDispatch}
      />
    </div>
  );
}
