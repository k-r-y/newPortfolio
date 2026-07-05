

export default function SkillCard ({ Type, Skills }){
  return (
    <div className="flex flex-col justify-start items-start w-full gap-1">
      <h2 className="text-sm">{Type}</h2>
      <div className="flex gap-2 flex-wrap">
        {Skills.map((skill, index) => {
          return (
            <p key={index + 1} className="border border-neutral-200 text-xs rounded-md p-1">
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};