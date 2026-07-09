import { BiCodeAlt, BiServer, BiPaintRoll, BiTerminal } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa6";

export default function SkillPage() {
  const categories = [
    {
      id: 1,
      title: "Frontend & UI Development",
      icon: <BiCodeAlt className="text-xl text-neutral-800 dark:text-neutral-200" />,
      skills: [
        { name: "React / React 19", level: "30%" },
        { name: "Vite & Build Tools", level: "35%" },
        { name: "Tailwind CSS v4", level: "75%" },
        { name: "JavaScript (ES6+)", level: "70%" },
        { name: "HTML5 / Semantic markup", level: "85%" },
        { name: "CSS3 / Custom properties", level: "80%" },
      ]
    },
    {
      id: 2,
      title: "Backend & Systems",
      icon: <BiServer className="text-xl text-neutral-800 dark:text-neutral-200" />,
      skills: [
        { name: "Node.js / Express", level: "20%" },
        { name: "PHP (OOP & MVC)", level: "35%" },
        { name: "RESTful API Design", level: "15%" },
        { name: "Middleware & Auth (JWT)", level: "10%" },
        { name: "Asynchronous Workflows", level: "10%" },
      ]
    },
    {
      id: 3,
      title: "Database & DevOps",
      icon: <FaDatabase className="text-lg text-neutral-800 dark:text-neutral-200" />,
      skills: [
        { name: "MySQL / Relational Design", level: "75%" },
        { name: "Git & Version Control", level: "40%" },
        { name: "Vercel / Netlify Deployments", level: "35%" },
        { name: "AI-Assisted Dev Workflows", level: "10%" },
      ]
    },
    {
      id: 4,
      title: "Design Architecture",
      icon: <BiPaintRoll className="text-xl text-neutral-800 dark:text-neutral-200" />,
      skills: [
        { name: "Responsive Web Design", level: "85%" },
        { name: "BentoGrid Layout Design", level: "70%" },
        { name: "Minimalist Aesthetic Design", level: "75%" },
        { name: "UI/UX Prototyping (Figma)", level: "65%" },
      ]
    }
  ];

  const tools = ["VS Code", "Git / GitHub", "npm / Node Package Manager", "Chrome DevTools", "Postman", "Web3Forms", "Figma"];

  return (
    <main className="w-full flex justify-center items-center py-10 px-4 md:px-8 pb-32 text-neutral-800 dark:text-neutral-200 min-h-screen">
      <div className="max-w-4xl w-full flex flex-col gap-8">
        
        {/* Header Section */}
        <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm p-6 bg-white dark:bg-neutral-800/50 w-full text-center md:text-left">
          <h1 className="text-2xl font-bold font-poppins text-neutral-900 dark:text-neutral-100 flex items-center justify-center md:justify-start gap-2 mb-2">
            <BiCodeAlt /> Skills & Technologies
          </h1>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono leading-relaxed">
            A comprehensive mapping of my technical expertise, capabilities, and the software tools I use to build scalable, high-performance web applications.
          </p>
        </section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm p-6 bg-white dark:bg-neutral-800/50 flex flex-col hover:shadow-2xs transition-shadow duration-300"
            >
              <h2 className="text-md font-semibold font-poppins text-neutral-900 dark:text-neutral-100 flex items-center gap-2 mb-5 border-b border-neutral-200 dark:border-neutral-800 pb-2.5">
                {category.icon} {category.title}
              </h2>
              
              <div className="flex flex-col gap-4 grow">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-neutral-800 dark:text-neutral-300 font-poppins">{skill.name}</span>
                      <span className="font-mono text-neutral-400 dark:text-neutral-500 text-[10px]">{skill.level}</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-neutral-200/60 dark:bg-neutral-800/50/80 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-neutral-950 dark:bg-neutral-100 rounded-full transition-all duration-500"
                        style={{ width: skill.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Development Environment & Tools (desktop span-2) */}
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm p-6 bg-white dark:bg-neutral-800/50 md:col-span-2 w-full">
            <h2 className="text-md font-semibold font-poppins text-neutral-900 dark:text-neutral-100 flex items-center gap-2 mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2.5">
              <BiTerminal className="text-xl text-neutral-800 dark:text-neutral-200" /> Development Tools & Ecosystem
            </h2>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1.5 bg-neutral-50 border border-neutral-200 text-neutral-600 text-xs font-mono rounded-md hover:bg-neutral-900 hover:text-white hover:border-neutral-900 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-100 dark:hover:text-black dark:hover:border-neutral-100 transition-all duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
