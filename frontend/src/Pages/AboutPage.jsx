import { useEffect } from "react";
import { FaRegUser } from "react-icons/fa6";
import { BiBookOpen, BiAward, BiHeart, BiBriefcase } from "react-icons/bi";
import Pfp from "./../assets/pic.webp";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About | Prince Andrew Casiano";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Learn about Prince Andrew Casiano's academic journey at Kolehiyo ng Lungsod ng Dasmariñas, certification goals, soft skills, and personal interests in web design and system architecture."
      );
    }
  }, []);

  const education = [
    {
      id: 1,
      institution: "Kolehiyo ng Lungsod ng Dasmariñas",
      degree: "Bachelor of Science in Information Systems",
      period: "2024 - Present",
      description: "Focusing on enterprise architectures, database systems, software engineering methodologies, and human-computer interaction.",
    },
    {
      id: 2,
      institution: "Dr. Jose P. Rizal Senior High School",
      degree: "Computer System Servicing Strand",
      period: "2022 - 2024",
      description: "Laid down the foundations of computer related things mainly about hardwares and servers.",
    }
  ];

  const certifications = [
    // {
    //   id: 1,
    //   title: "Responsive Web Design",
    //   issuer: "FreeCodeCamp",
    //   date: "Jan 2025",
    // },
    // {
    //   id: 2,
    //   title: "JavaScript Algorithms & Data Structures",
    //   issuer: "FreeCodeCamp",
    //   date: "Feb 2025",
    // },
    // {
    //   id: 3,
    //   title: "Front-End Development Libraries",
    //   issuer: "Coursera / Meta",
    //   date: "May 2025",
    // }
  ];

  const softSkills = ["Analytical Thinking", "Communication", "Problem Solving", "Adaptability", "Collaboration", "Continuous Learning"];
  
  const interests = ["UI/UX Design", "AI workflows", "Open Source", "Photography", "System Architecture"];

  return (
    <main className="w-full flex justify-center items-center py-10 px-4 md:px-8 pb-32 text-neutral-800 dark:text-neutral-200 min-h-screen">
      <div className="max-w-4xl w-full flex flex-col gap-8">
        
        {/* Profile Intro Section */}
        <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm p-6 md:p-8 bg-white dark:bg-neutral-800/50 flex flex-col md:flex-row gap-6 items-center md:items-start w-full">
          <div className="w-24 h-24 md:w-32 md:h-32 relative shrink-0">
            <img
              src={Pfp}
              alt="Prince Andrew Casiano Profile avatar"
              className="rounded-full object-cover aspect-square border border-neutral-200 dark:border-neutral-800 shadow-sm"
            />
            <div className="rounded-full bg-green-500 border border-neutral-200 dark:border-neutral-800 p-1.5 absolute bottom-1 right-1 animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-3 text-center md:text-left">
            <div>
              <h1 className="text-2xl font-bold font-poppins text-neutral-900 dark:text-neutral-100 flex items-center justify-center md:justify-start gap-2">
                <FaRegUser className="text-xl" /> About Me
              </h1>
              <p className="text-sm font-light text-neutral-500 dark:text-neutral-500 font-poppins mt-1">
                Full-Stack Software Engineer & BSIS Student
              </p>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify font-mono">
              I am a second-year Bachelor of Science in Information Systems student with a strong focus on full-stack web development and modern UI/UX architecture. I bridge the gap between robust backend logic—like automated resource computation and multi-role data management—and clean, minimalist frontend design.
            </p>
          </div>
        </section>

        {/* Education & Experience Section */}
        <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm p-6 md:p-8 bg-white dark:bg-neutral-800/50 w-full">
          <h2 className="text-lg font-semibold font-poppins text-neutral-900 dark:text-neutral-100 flex items-center gap-2 mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
            <BiBookOpen className="text-xl text-neutral-800 dark:text-neutral-200" /> Education & Journey
          </h2>
          <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 pl-6 flex flex-col gap-8">
            {education.map((edu) => (
              <div key={edu.id} className="relative">
                {/* Node dot */}
                <div className="absolute -left-8.5 top-1.5 bg-neutral-800 border-4 border-white dark:bg-neutral-200 dark:border-neutral-950 rounded-full w-4.5 h-4.5"></div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <h3 className="font-bold text-sm font-poppins text-neutral-900 dark:text-neutral-100">{edu.degree}</h3>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 bg-neutral-100 border border-neutral-200 dark:bg-neutral-950 dark:border-neutral-800 rounded text-neutral-600 dark:text-neutral-450 shrink-0 w-max">{edu.period}</span>
                  </div>
                  <h4 className="text-xs font-medium text-neutral-600 dark:text-neutral-500 font-poppins">{edu.institution}</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono mt-1">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications and Tags Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* Certifications */}
          <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm p-6 bg-white dark:bg-neutral-800/50 flex flex-col">
            <h2 className="text-lg font-semibold font-poppins text-neutral-900 dark:text-neutral-100 flex items-center gap-2 mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              <BiAward className="text-xl text-neutral-800 dark:text-neutral-200" /> Certifications
            </h2>
            <div className="flex flex-col gap-3.5 grow justify-start">
              {certifications.length > 0 ? (certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between items-center border-b border-neutral-200/50 dark:border-neutral-800/40 pb-2 last:border-b-0">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold font-poppins text-neutral-900 dark:text-neutral-100">{cert.title}</span>
                    <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-500">{cert.issuer}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 border border-neutral-200 dark:bg-neutral-950 dark:border-neutral-800 rounded text-neutral-600 dark:text-neutral-450">{cert.date}</span>
                </div>
              ))) : (
                <h4 className="h-full text-center flex justify-center items-center text-sm font-mono px-2 py-0.5 text-neutral-500">No Certifications.</h4>
              ) }
            </div>
          </section>

          {/* Interests & Skills */}
          <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm p-6 bg-white dark:bg-neutral-800/50 flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-semibold font-poppins text-neutral-900 dark:text-neutral-100 flex items-center gap-2 mb-3 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <BiBriefcase className="text-xl text-neutral-800 dark:text-neutral-200" /> Professional Skills
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {softSkills.map((skill, index) => (
                  <span key={index} className="px-2.5 py-1 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-[10px] font-mono rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold font-poppins text-neutral-900 dark:text-neutral-100 flex items-center gap-2 mb-3 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <BiHeart className="text-xl text-neutral-800 dark:text-neutral-200" /> Hobbies & Interests
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {interests.map((interest, index) => (
                  <span key={index} className="px-2.5 py-1 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-[10px] font-mono rounded">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </section>
          
        </div>

      </div>
    </main>
  );
}
