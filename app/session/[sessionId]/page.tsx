import { getSessionById } from "@/services/session.service";
import { env } from "prisma/config";

type Props = {
  params: Promise<{ sessionId: string }>;
};

export default async function SessionPage({ params }: Props) {
  const { sessionId } = await params;
  getSessionById(parseInt(sessionId)).then((data) => console.log(data));

  return <div>hello p:{sessionId}</div>;
}
