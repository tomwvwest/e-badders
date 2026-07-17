import { prisma } from "@/lib/db";

export type GetSessionPlayers = Awaited<ReturnType<typeof getSessionPlayers>>;
export async function getSessionPlayers(sessionId: number) {
  return prisma.sessionPlayer.findMany({
    where: {
      sessionId,
    },
    include: {
      Player: true,
    },
  });
}
