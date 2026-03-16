import { prisma } from "../lib/db";

export const sessionRepository = {
  async findById(sessionId: number) {
    return prisma.session.findUniqueOrThrow({
      where: { sessionId },
    });
  },
};