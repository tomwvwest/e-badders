"use client";

import { useForm } from "react-hook-form";
import PlayerSuggestions from "./PlayerSuggestions";
import usePickGameReducer from "@/hooks/reducer/usePickGameReducer";

type FormValues = {
  searchValue: string;
};

export default function PickGame() {
  const { register, handleSubmit } = useForm<FormValues>();
  const [state, dispatch] = usePickGameReducer();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  console.log(state);

  return (
    <>
      <div className="flex gap-4">
        {Array.from({ length: state.noOfCourts }, (_, i) => {
          const positionId = i + 1;
          const player = state.players[positionId];

          return (
            <p
              key={positionId}
              className={state.focusedInput === positionId ? "border" : ""}
            >
              {player ? player.name : "Empty"}
            </p>
          );
        })}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-6">
        <input
          {...register("searchValue")}
          placeholder="Search for a player..."
        />
        <button>Create Game</button>
      </form>
      <PlayerSuggestions state={state} dispatch={dispatch} />
    </>
  );
}
