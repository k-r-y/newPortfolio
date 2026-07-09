import { FaArrowRightLong, FaGithub, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BiCode, BiLink, BiImage, BiFolder, BiUser } from "react-icons/bi";

import { useState } from "react";

import Bg from "./../assets/bg.webp";
import Aperture from "./../assets/aperture.webp";
import Pfp from "./../assets/pic.webp";
import ContactDetailsCard from "../components/ContactDetailsCard";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import StatsCard from "../components/StatsCard";
import ContactBg from "./../assets/contactBg.webp";

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

const stats = [
  {
    id: 1,
    Title: "Projects",
    Value: 3,
  },
  {
    id: 2,
    Title: "Technologies",
    Value: 2,
  },
  {
    id: 3,
    Title: "Reviews",
    Value: 4.5,
  },
];

const totalItems = stats.length;
const middle = Math.floor(totalItems / 2);

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

const projects = [
  {
    id: 1,
    Title: "Inventory Management System",
    ImgLink: Aperture,
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptatibus rerum consequatur nulla. In cupiditate a mollitia ea consequuntur et delectus eligendi eaque labore? Natus, rerum. Quos saepe ut mollitia.",
    ProjectLink: "www.youtube.com",
  },
  {
    id: 2,
    Title: "Inventory Management System",
    ImgLink: Bg,
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptatibus rerum consequatur nulla. In cupiditate a mollitia ea consequuntur et delectus eligendi eaque labore? Natus, rerum. Quos saepe ut mollitia.",
    ProjectLink: "youtube.com",
  },
  {
    id: 3,
    Title: "Inventory Management System",
    ImgLink: Bg,
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptatibus rerum consequatur nulla. In cupiditate a mollitia ea consequuntur et delectus eligendi eaque labore? Natus, rerum. Quos saepe ut mollitia.",
    ProjectLink: "https://youtube.com",
  },
  {
    id: 4,
    Title: "Inventory Management System",
    ImgLink: Bg,
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptatibus rerum consequatur nulla. In cupiditate a mollitia ea consequuntur et delectus eligendi eaque labore? Natus, rerum. Quos saepe ut mollitia.",
    ProjectLink: "youtube.com",
  },
];



export default function HomePage() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "f429c865-9ddb-42ed-8cf5-adad055a6f71");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setToastType("success");
        setToastMessage("Message sent successfully! I'll get back to you soon.");
        setShowToast(true);
        event.target.reset();
      } else {
        setToastType("error");
        setToastMessage(data.message || "Failed to send message. Please try again.");
        setShowToast(true);
      }
    } catch (error) {
      setToastType("error");
      setToastMessage("An error occurred. Please check your network connection.");
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  }; 
  return (
    <>
      <main className="w-full flex justify-center items-center pb-20">
        <div className="flex flex-col min-h-screen  justify-center items-center max-w-6xl px-1 py-5 gap-3 w-full">
          <div className="  flex flex-col lg:flex-row gap-3 justify-center items-start w-full">
            <section className="flex justify-center items-center gap-2 flex-col lg:w-4/12 w-full">
              {/****************************************************** PROFILE SECTION *******************************************/}
              <div className="border border-neutral-300 rounded-md shadow w-full p-2 bg-neutral-100">
                {/* Profile Pic */}
                <div className="relative h-44 mb-10">
                  <img
                    src={Bg}
                    alt=""
                    className=" object-cover h-full w-full rounded"
                  />

                  <div className="flex justify-start items-center gap-2 absolute top-36 left-3 w-full">
                    <div className="w-24 h-24 relative">
                      <img
                        src={Pfp}
                        alt=""
                        className="rounded-full object-cover aspect-square border-8 border-white"
                      />
                      <div className="rounded-full bg-green-500 border-4 border-white p-2 absolute bottom-1 right-2"></div>
                    </div>

                    {/* Name */}
                    <div className="mt-8 flex justify-start ">
                      <div>
                        <h2 className="font-bold font-poppins">
                          Prince Andrew Casiano
                        </h2>
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
                          <StatsCard
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
                    <a
                      href=""
                      className="btn border-2 border-black bg-black py-1 px-2 rounded-md w-full font-bold text-white font-poppins text-center"
                    >
                      Download CV
                    </a>

                    <a
                      href="#contact"
                      className="btn border-2 border-black bg-transparent py-1 px-2 rounded-md w-full font-bold text-black font-poppins text-center"
                    >
                      Let's Connect
                    </a>
                  </div>
                </div>

                <hr className="mx-16 my-5 text-neutral-400 " />

                <div className="mb-3 w-full p-2">
                  {contactDetails.length > 0 ? (
                    contactDetails.map((contact) => {
                      return (
                        <ContactDetailsCard
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
              <div className="border border-neutral-300  p-5 rounded-md shadow w-full bg-neutral-100">
                <div className="mb-3">
                  <h2 className=" flex items-center justify-start gap-1 text-md font-semibold font-poppins">
                    <BiImage />
                    Gallery
                  </h2>
                </div>
              </div>
            </section>

            {/****************************************************** ABOUT ME SECTION *******************************************/}

            <section className="flex justify-center items-center gap-2 flex-col lg:w-8/12 min-w-0 w-full">
              <div className="border border-neutral-300  p-5 rounded-md shadow w-full bg-neutral-100">
                {/* About */}
                <div className="mb-3 flex justify-between items-center x">
                  <h2 className="flex items-center justify-start gap-1 text-md font-semibold font-poppins">
                    <BiUser />
                    About
                  </h2>

                  <Link
                    to="/About"
                    className="flex justify-center items-center gap-1 group text-neutral-600 hover:text-neutral-900 text-xs"
                  >
                    <span>View More</span>
                    <FaArrowRightLong className="group-hover:translate-x-2 ease-in-out duration-300" />
                  </Link>

                  {/* <div className="flex justify-center items-center gap-1 group text-neutral-600 hover:text-neutral-900 text-xs">
                    <a href="" className="">
                      View More
                    </a>
                    <FaArrowRightLong className="group-hover:translate-x-2 ease-in-out duration-300" />
                  </div> */}
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
              <div className="border border-neutral-300  p-5 rounded-md shadow w-full bg-neutral-100">
                <div className="mb-3 flex justify-between items-center">
                  <h2 className=" flex items-center justify-start gap-1 text-md font-semibold font-poppins">
                    <BiCode />
                    Skills and Technologies
                  </h2>

                  <Link
                    to="/Skills"
                    className="flex justify-center items-center gap-1 group text-neutral-600 hover:text-neutral-900 text-xs"
                  >
                    <span>View More</span>
                    <FaArrowRightLong className="group-hover:translate-x-2 ease-in-out duration-300" />
                  </Link>
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

              {/* Projects */}
              <div className="border border-neutral-300  p-5 rounded-md shadow-sm w-full min-w-0 bg-neutral-100">
                <div className="mb-3 flex justify-between items-center">
                  <h2 className=" flex items-center justify-start gap-1 text-md font-semibold font-poppins">
                    <BiFolder />
                    Projects
                  </h2>

                  <Link
                    to="/Projects"
                    className="flex justify-center items-center gap-1 group text-neutral-600 hover:text-neutral-900 text-xs"
                  >
                    <span>View More</span>
                    <FaArrowRightLong className="group-hover:translate-x-2 ease-in-out duration-300" />
                  </Link>
                </div>

                <div className="flex snap-x justify-start scroll-auto items-center gap-5 overflow-x-scroll w-full flex-nowrap">
                  {projects.map((project) => {
                    return (
                      <ProjectCard
                        key={project.id}
                        Title={project.Title}
                        Description={project.Description}
                        ImgLink={project.ImgLink}
                        ProjectLink={project.ProjectLink}
                      />
                    );
                  })}
                </div>
              </div>
            </section>
          </div>

          {/****************************************************** CONTACT SECTION *******************************************/}
          <section className=" rounded-md shadow-sm p-3 w-full" id="contact">
            <div className="flex justify-center items-stretch gap-1 w-full flex-col md:flex-row ">
              <div className="flex justify-start items-start gap-5 flex-col  w-full rounded-sm md:w-4/12 overflow-hidden relative  ">
                <img
                  src={ContactBg}
                  loading="lazy"
                  className="h-50 md:h-120 object-cover w-full rounded-sm"
                  alt=""
                />

                <div className="flex flex-col justify-start items-start gap-3 absolute w-full bottom-0 p-3">
                  <h2 className="text-4xl font-bold">Get in touch</h2>
                  <p className="text-xs  text-neutral-600">
                    Have a project in mind, a question about my work, or an
                    opportunity to discuss? Fill out the form below or reach out
                    directly via email.
                  </p>
                </div>
              </div>

              <div className="w-full rounded-sm md:w-8/12 p-10">
                <form
                  action=""
                  className="flex flex-col justify-start items-start gap-10 w-full h-full"
                  onSubmit={onSubmit}
                >
                  <div className="flex justify-start items-center flex-col sm:flex-row  w-full gap-5">
                    <div className="w-full flex flex-col justify-start items-start gap-1">
                      <label htmlFor="" className="text-sm">
                        Name:
                      </label>
                      <input
                        type="text"
                        name="name"
                        id=""
                        disabled={isSubmitting}
                        className="text-sm border-b border-b-neutral-400 focus:border-b-neutral-700 focus:border-b-2  focus:outline-0 w-full px-5 py-1 disabled:opacity-50"
                        placeholder="Juan Dela Cruz"
                        required
                      />
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-1">
                      <label htmlFor="" className="text-sm">
                        Email:
                      </label>
                      <input
                        type="email"
                        name="email"
                        id=""
                        disabled={isSubmitting}
                        className="text-sm border-b border-b-neutral-400 focus:border-b-neutral-700 focus:border-b-2  focus:outline-0 w-full px-5 py-1 disabled:opacity-50"
                        placeholder="helloWorld@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col justify-start items-start gap-1">
                    <label htmlFor="" className="text-sm">
                      Message:
                    </label>
                    <textarea
                      name="message"
                      disabled={isSubmitting}
                      className="text-sm border-b border-b-neutral-400 focus:border-b-neutral-700 focus:border-b-2  focus:outline-0 w-full px-5 py-1 disabled:opacity-50"
                      placeholder="helloWorld"
                      id=""
                      rows={7}
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col items-start justify-start">
                      <h4 className="text-sm">Connect:</h4>
                      <div className="flex gap-2">
                        <a
                          href="https://github.com/k-r-y"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-105 duration-300 ease-in-out"
                        >
                          <FaGithub className="text-2xl" />
                        </a>
                        <a
                          href="https://instagram.com/kryyyyyyyyyyyy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-105 duration-300 ease-in-out"
                        >
                          <FaInstagram className="text-2xl" />
                        </a>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-black text-white py-3 px-8 text-sm shadow-md cursor-pointer hover:bg-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed transition duration-200 flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Feedback Modal */}
      {showToast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white border border-neutral-200 rounded-xl shadow-2xl p-6 max-w-sm w-full mx-auto transform transition-all flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in-95 duration-200">
            {toastType === "success" ? (
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 text-3xl font-semibold">
                ✓
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 text-3xl font-semibold">
                ✕
              </div>
            )}
            
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-neutral-900 font-poppins">
                {toastType === "success" ? "Message Sent!" : "Submission Failed"}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed px-2 font-mono">
                {toastMessage}
              </p>
            </div>
            
            <button
              onClick={() => setShowToast(false)}
              className="mt-2 w-full py-2.5 px-4 bg-black text-white hover:bg-neutral-800 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-md cursor-pointer font-poppins"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
