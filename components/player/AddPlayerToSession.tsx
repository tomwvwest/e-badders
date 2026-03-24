"use client";

import {
  addSessionPlayerAction,
  createSessionPlayerAction,
  getUserPlayersAction,
} from "@/app/actions/player.actions";
import { AllPlayer, CreatePlayer, Player } from "@/types/player.types";
import { PlayerSession } from "@/types/playerSession.types";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import AddExistingPlayer from "./AddExistingPlayer";
import useEditPlayerAttendance from "@/hooks/useEditPlayerAttendance";

export default function AddPlayerToSession({
  currentPlayers,
  setSessionPlayers,
  sessionId,
}: {
  currentPlayers: AllPlayer[];
  setSessionPlayers: Dispatch<SetStateAction<AllPlayer[]>>;
  sessionId: number;
}) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const nameCount = useRef(0);
  const newName = () => {
    const name = "Tom" + nameCount.current;
    nameCount.current++;
    return name;
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
      setSessionPlayers((curr) => [...curr, newPlayer]);
    } else {
      await addSessionPlayerAction(playerId, sessionId);
      useEditPlayerAttendance(playerId, true, setSessionPlayers);
    }
  };

  const getUserPlayers = () => {
    setShowForm((x) => !x);
  };

  return showForm ? (
    <button onClick={getUserPlayers}>Click to add player</button>
  ) : (
    <>
      <button onClick={() => addPlayer(undefined, randomPlayer)}>
        add a new person
      </button>
      <button onClick={() => setShowForm((x) => !x)}>Cancel</button>
      <AddExistingPlayer
        currentPlayers={currentPlayers}
        addPlayer={addPlayer}
      />
    </>
  );
}
