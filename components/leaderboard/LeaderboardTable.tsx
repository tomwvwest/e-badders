"use client";
import { GetSessionPlayers } from "@/services/sessionPlayer/getSessionPlayers.service";

export default function LeaderboardTable({
  sessionPlayers,
}: {
  sessionPlayers: GetSessionPlayers;
}) {
  const columnNames = [
    "name",
    "games played",
    "games won",
    "games lost",
    "win streak",
    "longest win streak",
  ];

  return (
    <table className="">
      <thead>
        <tr className="border">
          {columnNames.map((n) => (
            <th key={`${n}_Col`} className="border">
              {n}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="border">
        {sessionPlayers.map((p) => (
          <tr key={`row${p.playerId}`}>
            <td>{p.Player.playerName}</td>
            <td>{p.totalGamesPlayed}</td>
            <td>{p.gamesWon}</td>
            <td>{p.gamesLost}</td>
            <td>{p.winStreak}</td>
            <td>{p.longestWinStreak}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
