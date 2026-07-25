import { Dispatch, SetStateAction } from "react";
import { GamePickType } from "../Court";
import CourtHeaderButtons from "./CourtHeaderButtons";

type CourtHeaderProps = {
  courtId: number;
  canCreate: boolean;
  handleCreateGame: () => void;
  pickType: GamePickType;
  setPickType: Dispatch<SetStateAction<GamePickType>>;
};

export default function CourtHeader({
  courtId,
  canCreate,
  handleCreateGame,
  pickType,
  setPickType,
}: CourtHeaderProps) {
  const resetStep = () => setPickType(undefined);

  return (
    <div className="p-2 border-b flex justify-between bg-white">
      <p>Court {courtId}</p>
      {pickType && (
        <CourtHeaderButtons
          handleCreateGame={handleCreateGame}
          canCreate={canCreate}
          onCancel={resetStep}
        />
      )}
    </div>
  );
}
