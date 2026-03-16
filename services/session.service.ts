import { prisma } from "@/lib/db";
import { sessionRepository } from "@/repositories/session.repository";

export async function getSessionById(sessionId: number) {
  const session = await sessionRepository.findById(sessionId);

  return session;
}