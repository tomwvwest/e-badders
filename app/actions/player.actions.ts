"use server";

import { prisma } from "@/lib/db";
import {
  addPlayerToSession,
  createSessionPlayer,
} from "@/services/player.service";
import { Player, CreatePlayer } from "@/types/player.types";

export async function addSessionPlayerAction(
  playerId: number,
  sessionId: number
) {
  return addPlayerToSession(playerId, sessionId);
}

export async function createSessionPlayerAction(
  player: CreatePlayer,
  sessionId: number
) {
  return createSessionPlayer(player, sessionId);
}

export async function removeSessionPlayerAction(
  playerId: number,
  sessionId: number
) {
  return prisma.playerSession.delete({
    where: {
      playerId_sessionId: {
        playerId: playerId,
        sessionId: sessionId,
      },
    },
  });
}

export async function getUserPlayersAction(userId: number) {
  return prisma.player.findMany({
    where: {
      userId: userId,
    },
  });
}
