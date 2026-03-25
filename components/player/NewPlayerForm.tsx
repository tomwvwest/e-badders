"use client";

import { CreatePlayer } from "@/types/player.types";
import { useForm } from "react-hook-form";

type FormValues = {
  playerName: string;
};

export default function NewPlayerForm({
  addPlayer,
}: {
  addPlayer: (playerId?: number, player?: CreatePlayer) => Promise<void>;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const { playerName } = data;
    const createPlayer: CreatePlayer = {
      playerName,
      userId: 1,
      totalGamesPlayed: 0,
      clubForm: 0
    };

    addPlayer(undefined, createPlayer);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Name..."
        {...register("playerName", {
          required: "Name is required",
          minLength: { value: 2, message: "Name too short" },
        })}
      ></input>
      <button type="submit" disabled={isSubmitting}>
        Add Player
      </button>
    </form>
  );
}
