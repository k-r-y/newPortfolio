

export default function SkillCard ({ Type, Skills }){
  return (
    <div className="flex flex-col justify-start items-start w-full gap-1">
      <h3 className="text-sm text-neutral-800 dark:text-neutral-500">{Type}</h3>
      <div className="flex gap-2 flex-wrap">
        {Skills.map((skill, index) => {
          return (
            <p key={index + 1} className="border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-500 text-xs rounded-md p-1.5 bg-neutral-50/50 dark:bg-neutral-950/20 font-mono">
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};