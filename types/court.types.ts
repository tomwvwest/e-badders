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