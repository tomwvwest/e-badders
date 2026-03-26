export type CourtState = {
  courtId: number;
  playerIds: {
    player1Id: number;
    player2Id: number;
    player3Id?: number;
    player4Id?: number;
  };
  secondsPlayed: number;
};
export type ActiveCourts = CourtState[];

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
