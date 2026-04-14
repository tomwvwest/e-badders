import { prisma } from "@/lib/db";
import { Player } from "@/lib/generated/prisma/client";
import { AllPlayer, CreatePlayer,  } from "@/types/player.types";

export async function createSessionPlayer(
  data: CreatePlayer,
  sessionId: number
): Promise<AllPlayer> {
  const player = await createPlayer(data);
  addPlayerToSession(player.playerId, sessionId);

  return {
    ...player,
    isSessionPlayer: true
  };
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

export async function getAllPlayers(
  userId: number,
  sessionId: number
): Promise<AllPlayer[]> {
  const players = await prisma.player.findMany({
    where: { userId },
    include: {
      sessions: {
        where: { sessionId },
      },
    },
  });

  return players.map(p => ({
    ...p,
    isSessionPlayer: p.sessions.length > 0
  }))
}

export async function addPlayerToSession(
  playerId: number,
  sessionId: number
): Promise<AllPlayer> {
  const player = await prisma.player.findUnique({
    where: {
      playerId: playerId,
    },
  });

  if (!player) {
    throw new Error("Player not found");
  }

  await prisma.playerSession.create({
    data: {
      playerId: playerId,
      sessionId: sessionId,
    },
  });

  return {
    ...player,
    isSessionPlayer: true,
  };
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
