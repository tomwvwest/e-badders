import { prisma } from "@/lib/db";
import { AllPlayer, CreatePlayer, Player } from "@/types/player.types";
import { PlayerSession } from "@/types/playerSession.types";

export async function createSessionPlayer(
  data: CreatePlayer,
  sessionId: number
): Promise<AllPlayer> {
  const player = await createPlayer(data);
  addPlayerToSession(player.playerId, sessionId);

  const allPlayer = player as AllPlayer;
  allPlayer.isSessionPlayer = true;

  return allPlayer;
}

export async function createPlayer(data: CreatePlayer): Promise<Player> {
  return prisma.player.create({ data });
}

export async function getUserPlayers(userId: number) {
  return prisma.player.findMany({
    where: {
      userId,
    },
  });
}

export async function getAllPlayers(userId: number, sessionId: number) {
  const players = await prisma.player.findMany({
    where: {
      userId: userId,
    },
    include: {
      sessions: {
        where: { sessionId },
      },
    },
  });

  const allPlayers: AllPlayer[] = players.map((p) => ({
    playerId: p.playerId,
    playerName: p.playerName,
    totalGamesPlayed: p.totalGamesPlayed,
    clubForm: p.clubForm,
    clubRanking: p.clubRanking,
    userId: p.userId,
    isSessionPlayer: !!p.sessions[0],
  }));

  return allPlayers;
}

export async function addPlayerToSession(
  playerId: number,
  sessionId: number
): Promise<AllPlayer> {
  await prisma.playerSession.create({
    data: {
      playerId: playerId,
      sessionId: sessionId,
    },
  });

  const player = await prisma.player.findUnique({
    where: {
      playerId: playerId,
    },
    include: {
      sessions: {
        where: { sessionId },
      },
    },
  });

  const allPlayer: AllPlayer = {
    playerId: player!.playerId,
    playerName: player!.playerName,
    totalGamesPlayed: player!.totalGamesPlayed,
    clubForm: player!.clubForm,
    clubRanking: player!.clubRanking,
    userId: player!.userId,
    isSessionPlayer: true,
  }
  return allPlayer;
}

export async function removeSessionPlayer(playerId: number, sessionId: number) {
  return prisma.playerSession.delete({
    where: {
      playerId_sessionId: {
        playerId: playerId,
        sessionId: sessionId,
      },
    },
  });
}
