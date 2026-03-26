import { CourtPlayer, FocusedInput, PickPlayersState } from "@/types/court.types";
import getObjectLength from "@/utils/objectUtils";

export function getNextFocusedInput(state: PickPlayersState): FocusedInput {
  const { filledPositions: players, focusedInput, noOfPositions } = state;

  if (focusedInput === null) return null;
  if (allPositionsFull(players, noOfPositions)) return null;
  return getNextEmptyPosition(state);
}

function getNextEmptyPosition(state: PickPlayersState): FocusedInput {
  const { filledPositions: players, focusedInput, noOfPositions } = state;
  for (let step = 1; step <= noOfPositions; step++) {
    const nextInputIndex = focusedInput! - 1 + step;
    const position = (nextInputIndex % noOfPositions) + 1;

    if (!players[position]) return position;
  }

  return null;
}

function allPositionsFull(
  players: Record<number, CourtPlayer | null>,
  noOfPositions: number
): boolean {
  return noOfPositions === getObjectLength(players);
}

export function getNewAndExistingPlayers(state: PickPlayersState, playerId: number) {
  const { benchedPlayers, filledPositions, focusedInput } = state;
  const courtPlayer: CourtPlayer | undefined = benchedPlayers.find(
    (p) => p.playerId === playerId
  );
  const existingPlayer = filledPositions[focusedInput!];
  return { existingPlayer, courtPlayer };
}

export function updateBenchPlayers(
  benchedPlayers: CourtPlayer[],
  existingPlayer: CourtPlayer | null,
  playerId: number
) {
  let updatedBenchedPlayers = benchedPlayers.filter(
    (p) => p.playerId !== playerId
  );

  if (existingPlayer) {
    updatedBenchedPlayers = [...updatedBenchedPlayers, existingPlayer];
  }

  return updatedBenchedPlayers;
}