import Court from "./Court";

export default function SessionCourts({
  numberOfCourts,
}: {
  numberOfCourts: number;
}) {
  return (
    <div className="grid grid-cols-3 h-70">
      {Array.from({ length: numberOfCourts }, (_, i) => {
        const courtId = i + 1;

        return <Court key={courtId} courtId={courtId} />;
      })}
    </div>
  );
}
