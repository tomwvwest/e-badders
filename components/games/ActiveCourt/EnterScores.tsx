"use client";
import { useCourts } from "@/hooks/context/useCourts";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  team1Score: number;
  team2Score: number;
};

export default function EnterScores({ courtId }: { courtId: number }) {
  const { courtDispatch } = useCourts();
  const [showScores, setShowScores] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const { team1Score, team2Score } = data;
    console.log(team1Score, team2Score);
    courtDispatch({
      type: "endGame",
      courtId,
      score: { team1Score, team2Score },
    });
  };

  return !showScores ? (
    <button onClick={() => setShowScores(true)}>Enter Scores</button>
  ) : (
    <>
      <p>Scores</p>
      <input
        placeholder="Team 1"
        {...register("team1Score", {
          required: "Score is required",
        })}
      ></input>
      <input
        placeholder="Team 2"
        {...register("team2Score", {
          required: "Score is required",
        })}
      ></input>
      <button onClick={handleSubmit(onSubmit)}>Submit</button>

      <button onClick={() => setShowScores(false)}>Cancel</button>
    </>
  );
}
