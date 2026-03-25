"use client";

import { useForm } from "react-hook-form";
import PlayerSuggestions from "./PlayerSuggestions";

type FormValues = {
  player1Id: string;
  player2Id: string;
  player3Id?: string;
  player4Id?: string;
};

export default function PickGame() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("player1Id")} placeholder="Add player 1"></input>
        <input {...register("player2Id")} placeholder="Add player 2"></input>
        <input {...register("player3Id")} placeholder="Add player 3"></input>
        <input {...register("player4Id")} placeholder="Add player 4"></input>
        <button>Create Game</button>
      </form>
      {/* <PlayerSuggestions /> */}
    </>
  );
}
