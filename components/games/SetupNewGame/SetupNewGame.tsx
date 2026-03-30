"use client";

import { useState } from "react";
import PickGame from "./PickGame";

type stepType = "manual" | "suggest" | undefined;

export default function SetupNewGame({ courtId }: { courtId: number }) {
  const [step, setStep] = useState<stepType>(undefined);

  const resetStep = () => {
    handleStepSelection(undefined);
  };

  const handleStepSelection = (selected: stepType) => {
    setStep(selected);
  };

  return (
    <div className="grid grid-rows">
      {/* form for selecting 4 players */}
      <button onClick={() => handleStepSelection("manual")}>
        Select Players
      </button>
      {step === "manual" && (
        <>
          <PickGame courtId={courtId} />
          <button onClick={resetStep}>Cancel</button>
        </>
      )}

      {/* bring in suggestion thing - hard */}
      <button>Suggest Game</button>
    </div>
  );
}
