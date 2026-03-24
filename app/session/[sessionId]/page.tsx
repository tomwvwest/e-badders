import AddPlayerToSession from "@/components/player/AddPlayerToSession";
import PlayerSessionBase from "@/components/player/PlayerSessionBase";
import { createPlayer, getAllPlayers } from "@/services/player.service";
import { getSessionById, getSessionPlayers } from "@/services/session.service";
import { AllPlayer } from "@/types/player.types";
import { PlayerSession } from "@/types/playerSession.types";
import { Session } from "@/types/session.types";

type Props = {
  params: Promise<{ sessionId: string }>;
};

export default async function SessionPage({ params }: Props) {
  const sessionId = parseInt((await params).sessionId);
  const userId = 1;

  const allPlayers: AllPlayer[] = await getAllPlayers(userId, sessionId);
  const currentSession: Session = await getSessionById(sessionId);

  return (
    <>
      {/* <p>{currentSession?.sessionId}</p>
      <p>{currentSession?.userId}</p> */}
      <p>Started at: {currentSession?.startDate.toUTCString()}</p>

      {/* add player to session */}
      <PlayerSessionBase
        allPlayers={allPlayers}
        sessionId={sessionId}
      />

      {/* add game to session */}
    </>
  );
}
