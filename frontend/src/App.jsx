import {
  FaCode,
  FaArrowRightLong,
  FaLink,
  FaRegImages,
  FaRegFolder,
  FaRegEnvelope,
  FaRegUser,
} from "react-icons/fa6";
import Pfp from "./assets/pic.jpg";
import Bg from "./assets/bg.jpg";
import Aperture from "./assets/aperture.png"

const contactDetails = [
  {
    id: 1,
    Title: "Email",
    Data: "casianoprince5@gmail.com",
  },
  {
    id: 2,
    Title: "School",
    Data: "Kolehiyo ng Lungsod ng Dasmariñas",
  },
  { id: 3, Title: "Location", Data: "Dasmariñas City, Cavite" },
];

const ContactCard = ({ Title, Data }) => {
  return (
    <div className="flex justify-start gap-2 items-center">
      <h1 className="font-semibold text-sm font-poppins">{Title}:</h1>
      <p className="text-xs text-light text-neutral-600">{Data}</p>
    </div>
  );
};

const stats = [
  {
    key: 1,
    Title: "Projects",
    Value: 3,
  },
  {
    key: 2,
    Title: "Technologies",
    Value: 2,
  },
  {
    key: 3,
    Title: "Reviews",
    Value: 4.5,
  },
];

const totalItems = stats.length;
const middle = Math.floor(totalItems / 2);

const StatCard = ({ Title, Value, isMid }) => {
  return (
    <div
      className={`flex justify-center items-center flex-col px-3 ${isMid ? "border-r border-l " : ""}`}
    >
      <h1 className="text-neutral-600 text-xs text-center ">{Title}</h1>
      <p className="font-bold text-xl">{Value}</p>
    </div>
  );
};

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

const SkillCard = ({ Type, Skills }) => {
  return (
    <div className="flex flex-col justify-start items-start w-full gap-1">
      <h1 className="text-sm">{Type}</h1>
      <div className="flex gap-2 flex-wrap">
        {Skills.map((skill, index) => {
          return (
            <p key={index + 1} className="border text-xs rounded-md p-1">
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    Title: "Inventory Management System",
    ImgLink: Aperture,
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptatibus rerum consequatur nulla. In cupiditate a mollitia ea consequuntur et delectus eligendi eaque labore? Natus, rerum. Quos saepe ut mollitia.",
      ProjectLink : "youtube.com"
  },
  {
    id: 1,
    Title: "Inventory Management System",
    ImgLink: Bg,
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptatibus rerum consequatur nulla. In cupiditate a mollitia ea consequuntur et delectus eligendi eaque labore? Natus, rerum. Quos saepe ut mollitia.",
      ProjectLink : "youtube.com"
  },
  {
    id: 1,
    Title: "Inventory Management System",
    ImgLink: Bg,
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptatibus rerum consequatur nulla. In cupiditate a mollitia ea consequuntur et delectus eligendi eaque labore? Natus, rerum. Quos saepe ut mollitia.",
      ProjectLink : "youtube.com"
  },
  {
    id: 1,
    Title: "Inventory Management System",
    ImgLink: Bg,
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptatibus rerum consequatur nulla. In cupiditate a mollitia ea consequuntur et delectus eligendi eaque labore? Natus, rerum. Quos saepe ut mollitia.",
    ProjectLink : "youtube.com"
  },
];

const ProjectCard = ({ Title, Description, ImgLink, ProjectLink }) => {
  return (
    <div className=" border rounded-lg relative p-2 gap-3 flex justify-center items-center flex-col pb-10 max-w-80 aspect-video mb-5 h-100">
      <div className="overflow-hidden w-full h-full rounded">
        <img
          src={ImgLink}
          alt=""
          className="w-full h-full object-cover hover:scale-125 cursor-pointer duration-300 ease-in-out rounded"
        />
      </div>

      <h1 className="font-semibold text-sm">{Title}</h1>

      <div>
        <p className="text-xs text-justify text-neutral-600">
         {Description}
        </p>
      </div>

      <div className="absolute -bottom-4  inset-x-0 flex justify-center items-center">
        <button className="py-2 px-5 border rounded bg-white">
          <a href={ProjectLink} className=" text-sm">
            View More
          </a>
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <main className="w-full flex justify-center items-center">
        <div className="flex flex-col min-vh-100  justify-center items-center max-w-300 px-2 py-5 gap-3">
          <div className="  flex flex-col lg:flex-row gap-3 justify-center items-start w-full">
            <section className="flex justify-center items-center gap-2 flex-col lg:max-w-4/12">
              {/****************************************************** PROFILE SECTION *******************************************/}
              <div className="border border-neutral-500 rounded-md shadow w-full p-2">
                {/* Profile Pic */}
                <div className="relative h-45 mb-10">
                  <img
                    src={Bg}
                    alt=""
                    className=" object-cover h-full w-full rounded"
                  />

                  <div className="flex justify-start items-center gap-2 absolute top-34 left-3 w-full">
                    <div className="w-25 h-25 relative">
                      <img
                        src={Pfp}
                        alt=""
                        className="rounded-full object-cover aspect-square border-5 border-white"
                      />
                      <div className="rounded-full bg-green-500 border-4 border-white p-2 absolute bottom-1 right-2"></div>
                    </div>

                    {/* Name */}
                    <div className="mt-8 flex justify">
                      <div>
                        <h1 className="font-bold font-poppins">
                          Prince Andrew Casiano
                        </h1>
                        <p className="font-light text-neutral-500 text-sm font-poppins">
                          Information System Student
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats and Description */}
                <div className="p-2 flex flex-col justify-start items-center gap-3">
                  <div className="mt-5">
                    <p className="font-light text-justify text-sm text-neutral-600">
                      Full-Stack Software Engineer & BSIS Student specializing
                      in building responsive, scalable web applications and
                      intuitive UI/UX design systems.
                    </p>
                  </div>

                  {/* Data */}
                  <div className="mt-4 w-full flex justify-center items-center gap-2">
                    {stats.length > 0 ? (
                      stats.map((stat, index) => {
                        const isMid = index === middle;

                        return (
                          <StatCard
                            key={stat.id}
                            Title={stat.Title}
                            Value={stat.Value}
                            isMid={isMid}
                          />
                        );
                      })
                    ) : (
                      <p className="text-center text-neutral-600">
                        No Statistics.
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2 w-full">
                    <button className="btn border-2 border-black bg-black py-1 px-2 rounded-md w-full">
                      <a href="" className="font-bold text-white font-poppins">
                        Download CV
                      </a>
                    </button>
                    <button className="btn border-2 border-black bg-transparent py-1 px-2 rounded-md w-full">
                      <a
                        href="#contact"
                        className="font-bold text-black font-poppins"
                      >
                        Let's Connect
                      </a>
                    </button>
                  </div>
                </div>

                <hr className="mx-15 my-5 text-neutral-400 " />

                <div className="p-2 mb-3 w-full">
                  <div className="mb-3">
                    <h1 className=" flex items-center justify-start gap-1 text-md font-semibold font-poppins">
                      <FaLink />
                      Additional Details
                    </h1>
                  </div>

                  {contactDetails.length > 0 ? (
                    contactDetails.map((contact) => {
                      return (
                        <ContactCard
                          key={contact.id}
                          Title={contact.Title}
                          Data={contact.Data}
                        />
                      );
                    })
                  ) : (
                    <p className="text-center text-neutral-600">
                      No Contact Details.
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Details */}

              {/* Gallery */}
              <div className="border border-neutral-500  p-5 rounded-md shadow w-full">
                <div className="mb-3">
                  <h1 className=" flex items-center justify-start gap-1 text-md font-semibold font-poppins">
                    <FaRegImages />
                    Gallery
                  </h1>
                </div>
              </div>
            </section>

            {/****************************************************** ABOUT ME SECTION *******************************************/}

            <section className="flex justify-center items-center gap-2 flex-col w-full">
              <div className="border border-neutral-500  p-5 rounded-md shadow w-full ">
                {/* About */}
                <div className="mb-3 flex justify-between items-center ">
                  <h1 className="flex items-center justify-start gap-1 text-md font-semibold font-poppins">
                    <FaRegUser />
                    About
                  </h1>

                  <div className="flex justify-center items-center gap-1 group text-neutral-600 hover:text-neutral-900 text-xs">
                    <a href="" className="">
                      View More
                    </a>
                    <FaArrowRightLong className="group-hover:translate-x-2 ease-in-out duration-300" />
                  </div>
                </div>

                <p className="text-sm text-neutral-600 text-justify font-mono">
                  I am a second-year Bachelor of Science in Information Systems
                  student with a strong focus on full-stack web development and
                  modern UI/UX architecture. I bridge the gap between robust
                  backend logic—like automated resource computation and
                  multi-role data management—and clean, minimalist frontend
                  design.
                </p>
              </div>

              {/* Skills */}
              <div className="border border-neutral-500  p-5 rounded-md shadow w-full ">
                <div className="mb-3 flex justify-between items-center">
                  <h1 className=" flex items-center justify-start gap-1 text-md font-semibold font-poppins">
                    <FaCode />
                    Skills and Technologies
                  </h1>

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
                        key={skill.key}
                        Type={skill.Type}
                        Skills={skill.Skills}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Projects */}
              <div className="border border-neutral-500  p-5 rounded-md shadow w-full ">
                <div className="mb-3 flex justify-between items-center">
                  <h1 className=" flex items-center justify-start gap-1 text-md font-semibold font-poppins">
                    <FaRegFolder />
                    Projects
                  </h1>

                  <div className="flex justify-center items-center gap-1 group text-neutral-600 hover:text-neutral-900 text-xs">
                    <a href="" className="">
                      View More
                    </a>
                    <FaArrowRightLong className="group-hover:translate-x-2 ease-in-out duration-300" />
                  </div>
                </div>

                <div className="flex justify-center items-center gap-5  flex-wrap">

                  {projects.map((project) =>{
                    return(
                      <ProjectCard
                      
                      id={project.id}
                      Title={project.Title}
                      Description={project.Description}
                      ImgLink={project.ImgLink}
                      ProjectLink={project.ProjectLink}
                      />
                    )
                  })}

                </div>
              </div>
            </section>
          </div>

          {/****************************************************** CONTACT SECTION *******************************************/}
          <section
            className="border border-neutral-500 p-5 rounded-md shadow w-full"
            id="contact"
          >
            <div className="mb-3">
              <h1 className=" flex items-center justify-start gap-1 text-md font-semibold font-poppins">
                <FaRegEnvelope />
                Contact
              </h1>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
