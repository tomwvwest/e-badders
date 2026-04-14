"use client";
import { useState } from "react";
import LeaderboardTable from "./LeaderboardTable";

export default function LeaderboardBase() {
  const [showLeaderboard, setShowLeaderboard] = useState<boolean>(false);

  return (
    <div className="border bg-green-200">
      {!showLeaderboard ? (
        <button onClick={() => setShowLeaderboard(true)}>
          show Session Leaderboard
        </button>
      ) : (
        <>
          <h1>Session Leaderboard</h1>
          <button onClick={() => setShowLeaderboard(false)}>Hide</button>
          <LeaderboardTable />
        </>
      )}
    </div>
  );
}
