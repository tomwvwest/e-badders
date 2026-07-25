import { Dispatch, SetStateAction } from "react";
import { GamePickType } from "./Court";

type CourtHeaderProps = {
  courtId: number;
  handleCreateGame: () => void;
  pickType: GamePickType;
  setPickType: Dispatch<SetStateAction<GamePickType>>;
};

export default function CourtHeader({
  courtId,
  pickType,
  setPickType,
  handleCreateGame,
}: CourtHeaderProps) {
  const resetStep = () => setPickType(undefined);

  return (
    <div className="p-2 border-b flex">
      <p>Court {courtId}</p>
      {pickType && (
        <div className="">
          <button onClick={handleCreateGame}>Create Game</button>
          <button onClick={resetStep}>Cancel</button>
        </div>
      )}
    </div>
  );
}
