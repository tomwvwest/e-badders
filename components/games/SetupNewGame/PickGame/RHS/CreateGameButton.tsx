export default function CreateGameButton({
  canCreate,
  onClick,
}: {
  canCreate: boolean;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick}>
      {canCreate && ">> "}Create Game{canCreate && " <<"}
    </button>
  );
}
