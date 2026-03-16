import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";
import { env } from "prisma/config";

const connectionString = env("DIRECT_URL");
const adapter = new PrismaPg({ connectionString });
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

async function testConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Connected to DB: " + connectionString);
  } catch (e) {
    console.error("❌ DB Connection Failed:", e);
  }
}

// testConnection();
