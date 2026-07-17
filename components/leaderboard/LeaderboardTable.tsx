"use client";
import { useAllPlayers } from "@/hooks/context/useAllPlayers";
import { filterSessionPlayers } from "@/utils/playerUtils";

export default function LeaderboardTable() {
  const columnNames = ["name", "games played", "club form"];
  const { allPlayers } = useAllPlayers();
  const sessionPlayers = filterSessionPlayers(allPlayers);

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
            <td>{p.playerName}</td>
            <td>{p.clubForm}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
