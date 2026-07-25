import PrimaryButton from "@/components/common/buttons/PrimaryButton";

type CourtHeaderButtonsProps = {
  canCreate: boolean;
  handleCreateGame: () => void;
  onCancel: () => void;
};

export default function CourtHeaderButtons({
  canCreate,
  handleCreateGame,
  onCancel,
}: CourtHeaderButtonsProps) {
  const sharedClasses = "rounded-md px-1 border transition";

  const createClasses =
    `${canCreate ? "bg-green-200" : "opacity-40"}` + " " + sharedClasses;
  const cancelClasses = "ml-1.5" + " " + sharedClasses;

  return (
    <div className="">
      <PrimaryButton
        text="Create Game"
        onClick={handleCreateGame}
        padding={[1, 0]}
        extraClasses={`${!canCreate && "opacity-40"}`}
        bgColour={`${canCreate && "bg-green-200"}`}
      />
      <PrimaryButton
        text="Cancel"
        onClick={onCancel}
        padding={[1, 0]}
        extraClasses="ml-1.5"
      />
    </div>
  );
}
