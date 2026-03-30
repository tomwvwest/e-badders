export type CourtState = {
  courtId: number;
  players: Record<number , CourtPlayer | null>;
  secondsPlayed: number;
};
export type ActiveCourts = Record<number, CourtState>;

export type CourtPlayer = {
  playerId: number;
  name: string;
};

export type PickPlayersState = {
  noOfPositions: 4;
  filledPositions: Record<number , CourtPlayer | null>
  benchedPlayers: CourtPlayer[],
  focusedInput: FocusedInput;
};

export type FocusedInput = number | null;
