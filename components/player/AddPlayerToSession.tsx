"use client";

import {
  addSessionPlayerAction,
  createSessionPlayerAction,
} from "@/app/actions/player.actions";
import { AllPlayer, CreatePlayer } from "@/types/player.types";
import { Dispatch, SetStateAction, useContext, useRef, useState } from "react";
import AddExistingPlayer from "./AddExistingPlayer";
import useEditPlayerAttendance from "@/hooks/useEditPlayerAttendance";
import NewPlayerForm from "./NewPlayerForm";
import { AllPlayerContext } from "@/contexts/AllPlayersContext";
import { useAllPlayers } from "@/hooks/context/useAllPlayers";

export default function AddPlayerToSession({
  sessionId,
}: {
  sessionId: number;
}) {
  const { setAllPlayers } = useAllPlayers();
  const [showForm, setShowForm] = useState<boolean>(false);

  const names = [
    "Tom",
    "Alex",
    "Jamie",
    "Chris",
    "Sam",
    "Jordan",
    "Liam",
    "Noah",
    "Oliver",
    "James",
    "Lucas",
    "Ethan",
    "Mason",
    "Logan",
    "Leo",
    "Jack",
    "Harry",
    "Oscar",
    "Theo",
    "Max",
    "Charlie",
    "Freddie",
    "Archie",
    "Henry",
    "Jacob",
    "Arthur",
  ];
  const newName = () => {
    return names[Math.floor(Math.random() * names.length)];
  };
  const randomPlayer: CreatePlayer = {
    playerName: newName(),
    totalGamesPlayed: 5,
    clubForm: 1,
    userId: 1,
  };

  const addPlayer = async (playerId?: number, player?: CreatePlayer) => {
    if (playerId === undefined && player === undefined) return;
    const isNewPlayer = !playerId;

    if (isNewPlayer) {
      const newPlayer = await createSessionPlayerAction(player!, sessionId);
      setAllPlayers((curr) => [...curr, newPlayer]);
    } else {
      await addSessionPlayerAction(playerId, sessionId);
      useEditPlayerAttendance(playerId, true, setAllPlayers);
    }
  };

  return showForm ? (
    <>
      <button onClick={() => addPlayer(undefined, randomPlayer)}>
        add a random person
      </button>
      <button onClick={() => setShowForm((x) => !x)}>Cancel</button>

      <NewPlayerForm addPlayer={addPlayer} />
      <AddExistingPlayer addPlayer={addPlayer} />
    </>
  ) : (
    <button onClick={() => setShowForm((x) => !x)}>Click to add player</button>
  );
}
