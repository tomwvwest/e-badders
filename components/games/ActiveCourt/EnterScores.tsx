"use client";
import { addGameToSessionAction } from "@/app/actions/game.actions";
import { useCourts } from "@/hooks/context/useCourts";
import { assertPlayers } from "@/hooks/reducer/useCourtReducer/useCourtUtils";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  team1Score: number;
  team2Score: number;
};

export default function EnterScores({ courtId }: { courtId: number }) {
  const sessionId = Number(useParams().sessionId);
  const { courtsState, courtsDispatch } = useCourts();
  const [showScores, setShowScores] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (score: FormValues) => {
    const { players, secondsPlayed } = courtsState[courtId];
    assertPlayers(players);

    await addGameToSessionAction(sessionId, players, secondsPlayed, score);

    courtsDispatch({
      type: "endGame",
      courtId,
      score,
    });
  };

  return !showScores ? (
    <button onClick={() => setShowScores(true)}>Enter Scores</button>
  ) : (
    <>
      <p>Scores</p>
      <input
        type="number"
        placeholder="Team 1"
        {...register("team1Score", {
          required: "Score is required",
          valueAsNumber: true,
        })}
      ></input>
      <input
        type="number"
        placeholder="Team 2"
        {...register("team2Score", {
          required: "Score is required",
          valueAsNumber: true,
        })}
      ></input>
      <button onClick={handleSubmit(onSubmit)}>Submit</button>

      <button onClick={() => setShowScores(false)}>Cancel</button>
    </>
  );
}
