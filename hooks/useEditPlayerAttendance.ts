import { AllPlayer } from "@/types/player.types";
import { Dispatch, SetStateAction } from "react";

export default function useEditPlayerAttendance(playerId: number, isSessionPlayer: boolean, setPlayers: Dispatch<SetStateAction<AllPlayer[]>>){
  setPlayers((curr) =>
      curr.map((p) =>
        p.playerId === playerId ? { ...p, isSessionPlayer } : p
      )
    );
}