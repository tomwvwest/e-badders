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
  noOfCourts: 4;
  players: Record<number , CourtPlayer | null>
  focusedInput: number | null;
};
