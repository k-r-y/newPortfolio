

export default function StatsCard  ({ Title, Value, isMid }) {
  return (
    <div
      className={`flex justify-center items-center flex-col px-3 ${isMid ? "border-r border-l " : ""}`}
    >
      <h2 className="text-neutral-600 text-xs text-center ">{Title}</h2>
      <p className="font-bold text-xl">{Value}</p>
    </div>
  );
};
