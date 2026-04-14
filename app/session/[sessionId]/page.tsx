import GameBase from "@/components/games/GameBase";
import LeaderboardBase from "@/components/leaderboard/LeaderboardBase";
import PlayerBase from "@/components/player/PlayerBase";
import SessionBase from "@/components/session/SessionBase";
import { getAllPlayers } from "@/services/player.service";
import { getSessionById } from "@/services/session.service";
import { AllPlayer } from "@/types/player.types";
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
    <div className="grid grid-rows-3 gap-4">
      <div className="border">
        <p>Started at: {currentSession?.startDate.toUTCString()}</p>

        <SessionBase allPlayersRes={allPlayers}>
          <GameBase />

          <LeaderboardBase />

          <PlayerBase sessionId={sessionId} />
        </SessionBase>
      </div>
    </div>
  );
}
