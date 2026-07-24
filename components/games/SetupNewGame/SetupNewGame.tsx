"use client";

import { useState } from "react";
import PickGame from "./PickGame/PickGame";

type Step = "manual" | "suggest";

export default function SetupNewGame({ courtId }: { courtId: number }) {
  const [step, setStep] = useState<Step>();
  const resetPickGame = () => setStep(undefined);

  if (step) {
    return (
      <>
        <PickGame
          courtId={courtId}
          makeSuggestion={step === "suggest"}
        />
        <button onClick={resetPickGame}>
          Cancel
        </button>
      </>
    );
  }

  return (
    <div className="flex">
      <button onClick={() => setStep("manual")}>
        Select Players
      </button>
      <button onClick={() => setStep("suggest")}>
        Suggest Game
      </button>
    </div>
  );
}
