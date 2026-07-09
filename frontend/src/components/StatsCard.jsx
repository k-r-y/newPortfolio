

export default function StatsCard  ({ Title, Value, isMid }) {
  return (
    <div
      className={`flex justify-center items-center flex-col px-3 ${isMid ? "border-r border-l border-neutral-200 dark:border-neutral-800" : ""}`}
    >
      <h3 className="text-neutral-500 dark:text-neutral-450 text-xs text-center ">{Title}</h3>
      <p className="font-bold text-xl text-neutral-900 dark:text-neutral-100">{Value}</p>
    </div>
  );
};
