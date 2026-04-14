import { Game } from "@/lib/generated/prisma/client"

export type CreateGame = Omit<Game, "gameId">