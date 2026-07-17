"use server";

import { prisma } from "@/lib/db";

export async function getUserPlayersAction(userId: number) {
  return prisma.player.findMany({
    where: {
      userId: userId,
    },
  });
}
