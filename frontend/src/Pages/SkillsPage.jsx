import { FaArrowRightLong, FaRegUser } from "react-icons/fa6";
import SkillCard from "./../components/SkillCard";
import { BiCode } from "react-icons/bi";

const techStack = [
  {
    id: 1,
    Type: "Backend & System",
    Skills: ["Node.js", "PHP", "RESTful APIs"],
  },
  {
    id: 2,
    Type: "Frontend & UI",
    Skills: [
      "Vite",
      "React",
      "Tailwind CSS",
      "CSS",
      "HTML",
      "Javascript (ES6+)",
    ],
  },
  {
    id: 3,
    Type: "Database & DevOps",
    Skills: ["Git", "MySQL", "AI-Assisted Workflow"],
  },
  {
    id: 4,
    Type: "Design Architecture",
    Skills: ["Minimalism", "BentoGrid", "UI/UX", "Responsive Web Design"],
  },
];

export default function SkillPage() {
  return (
    <>
      <main className="flex justify-center items-center min-h-screen w-full pb-20">
        <section className="flex justify-center items-center max-w-6xl">
          <div className="border border-neutral-300  p-5 rounded-md shadow w-full ">
            <div className="mb-3 flex justify-between items-center">
              <h2 className=" flex items-center justify-start gap-1 text-md font-semibold font-poppins">
                <BiCode />
                Skills and Technologies
              </h2>

              <div className="flex justify-center items-center gap-1 group text-neutral-600 hover:text-neutral-900 text-xs">
                <a href="" className="">
                  View More
                </a>
                <FaArrowRightLong className="group-hover:translate-x-2 ease-in-out duration-300" />
              </div>
            </div>

            <div className="flex gap-2 flex-col justify-center items-center w-full">
              {techStack.map((skill) => {
                return (
                  <SkillCard
                    key={skill.id}
                    Type={skill.Type}
                    Skills={skill.Skills}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
