"use client";
import convertSecondsToTimer from "@/utils/timeUtils";

export default function CourtTimer({ seconds }: { seconds: number }) {
  const timerString = convertSecondsToTimer(seconds);

  return <p>{timerString}</p>;
}
