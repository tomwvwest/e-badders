"use client";

import { useState } from "react";
import SetupNewGame from "./SetupNewGame/SetupNewGame";

export default function Court({ courtNumber }: { courtNumber: number }) {
  const [gameStarted, setGameStarted] = useState<Boolean>(false);

  return (
    <div className="border">
      <p>Court {courtNumber}</p>
      {!gameStarted && <SetupNewGame />}
    </div>
  );
}
