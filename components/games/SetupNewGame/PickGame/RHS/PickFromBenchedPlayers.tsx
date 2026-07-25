import { register } from "next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup";
import PickSearchPlayer from "./PickSearchPlayer";
import PlayerSuggestions from "./PlayerSuggestions";
import { CourtPlayer, FocusedInput } from "@/types/court.types";
import { FormValues } from "../PickGame";
import { UseFormRegister } from "react-hook-form";
import { ActionDispatch } from "react";
import { Action } from "@/hooks/reducer/usePickGameReducer/usePickGameReducer";

type PickFromBenchedPlayersProps = {
  register: UseFormRegister<FormValues>;
  namesToShow: CourtPlayer[];
  focusedInput: FocusedInput;
  gameDispatch: ActionDispatch<[action: Action]>;
};

export default function PickFromBenchedPlayers({
  register,
  namesToShow,
  focusedInput,
  gameDispatch,
}: PickFromBenchedPlayersProps) {
  return (
    <div className="flex min-h-0 flex-col ">
      <PickSearchPlayer register={register} />

      <PlayerSuggestions
        benchedPlayers={namesToShow}
        focusedInput={focusedInput}
        gameDispatch={gameDispatch}
      />
    </div>
  );
}
