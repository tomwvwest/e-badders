"use client";
import { useAllPlayers } from "@/hooks/context/useAllPlayers";
import { filterSessionPlayers } from "@/utils/playerUtils";

export default function LeaderboardTable() {
  const columnNames = ["name", "games played", "club form"];
  const { allPlayers } = useAllPlayers();

  //should get sessionPlayers
  const sessionPlayers = filterSessionPlayers(allPlayers);

  return (
    <table className="">
      <thead>
        <tr className="border">
          {columnNames.map((n) => (
            <th className="border">{n}</th>
          ))}
        </tr>
      </thead>
      <tbody className="border">
        {sessionPlayers.map(p => (<tr>
          <td>{p.playerName}</td>
          <td>{p.clubForm}</td>
        </tr>))}
      </tbody>
    </table>
  );
}
