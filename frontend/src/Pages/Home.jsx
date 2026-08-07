import { FaArrowRightLong, FaGithub, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BiCode, BiLink, BiImage, BiFolder, BiUser, BiChevronLeft, BiChevronRight, BiX } from "react-icons/bi";

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Bg from "./../assets/bg.webp";
import Pfp from "./../assets/pic.webp";
import ContactDetailsCard from "../components/ContactDetailsCard";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import StatsCard from "../components/StatsCard";
import MusicPlayer from "../components/MusicPlayer";
import ContactBg from "./../assets/contactBg.webp";

import { contactDetails, stats, techStack, galleryImages } from "../constants/data";
import { useGithubProjects } from "../hooks/useGithubProjects";

const totalItems = stats.length;
const middle = Math.floor(totalItems / 2);

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export default function HomePage() {
  const { projects: projectList } = useGithubProjects();

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting: formSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setToastType("success");
        setToastMessage("Message sent successfully! I'll get back to you soon.");
        setShowToast(true);
        reset();
      } else {
        setToastType("error");
        setToastMessage(result.message || "Failed to send message. Please try again.");
        setShowToast(true);
      }
    } catch (err) {
      console.error(err);
      setToastType("error");
      setToastMessage("An error occurred. Please check your network connection.");
      setShowToast(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Prince Andrew Casiano | Portfolio</title>
        <meta name="description" content="Portfolio of Prince Andrew Casiano, a Full-Stack Software Engineer & BSIS Student specializing in building responsive, scalable web applications and intuitive UI/UX design systems." />
      </Helmet>
      <main className="w-full flex justify-center items-center pb-20  text-neutral-850 dark:text-neutral-200 ">
        <div className="flex flex-col min-h-screen  justify-center items-center max-w-6xl px-1 py-5 gap-3 w-full">
          <div className="  flex flex-col lg:flex-row gap-3 justify-center items-start w-full">
            <section className="flex justify-center items-center gap-2 flex-col lg:w-4/12 w-full">
              {/****************************************************** PROFILE SECTION *******************************************/}
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm w-full p-2 bg-white dark:bg-neutral-800/50">
                {/* Profile Pic */}
                <div className="relative h-44 mb-10">
                  <img
                    src={Bg}
                    alt=""
                    className=" object-cover h-full w-full rounded border border-neutral-200 dark:border-neutral-800"
                  />

                  <div className="flex justify-start items-center gap-2 absolute top-36 left-3 w-full">
                    <div className="w-24 h-24 relative">
                      <img
                        src={Pfp}
                        alt=""
                        className="rounded-full object-cover aspect-square border-5 border-neutral-200 dark:border-neutral-900/70 shadow-sm"
                      />
                      <div className="rounded-full bg-green-500 border-5 border-neutral-200 dark:border-neutral-800 p-1.5 absolute bottom-1 right-2 "></div>
                    </div>

                    {/* Name */}
                    <div className="mt-8 flex justify-start ">
                      <div>
                        <h1 className="font-bold font-poppins text-neutral-900 dark:text-neutral-100 text-lg">
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
                    <p className="font-light text-justify text-sm text-neutral-600 dark:text-neutral-400 font-mono">
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
                      <p className="text-center text-neutral-500 font-mono text-xs">
                        No Statistics.
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2 w-full mt-2">
                    <a
                      href=""
                      className="btn border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 py-1.5 px-3 rounded-md w-full font-semibold font-poppins text-xs text-center transition-colors duration-200 shadow-2xs"
                    >
                      Download CV
                    </a>

                    <a
                      href="#contact"
                      className="btn border border-neutral-900 dark:border-neutral-700 bg-neutral-950 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-black py-1.5 px-3 rounded-md w-full font-semibold font-poppins text-xs text-center transition-colors duration-200 shadow-2xs"
                    >
                      Let's Connect
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Details */}

              <div className="border border-neutral-200 dark:border-neutral-800 p-5 rounded-lg shadow-sm w-full bg-white dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200">
                <div className="mb-3.5">
                  <h2 className="flex items-center justify-start gap-1 text-md font-semibold font-poppins text-neutral-900 dark:text-neutral-100">
                    <BiLink className="text-lg" />
                    Personal Details
                  </h2>
                </div>
                <div className="flex flex-col gap-3">
                  {contactDetails.length > 0 ? (
                    contactDetails.map((contact) => (
                      <ContactDetailsCard
                        key={contact.id}
                        Title={contact.Title}
                        Data={contact.Data}
                      />
                    ))
                  ) : (
                    <p className="text-center text-neutral-500 font-mono text-xs">
                      No Details.
                    </p>
                  )}
                </div>
              </div>

              {/* Music Player */}
              <MusicPlayer />

              {/* Gallery */}
              <div className="border border-neutral-200 dark:border-neutral-800  p-5 rounded-lg shadow-sm w-full bg-white dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200">
                <div className="mb-3">
                  <h2 className=" flex items-center justify-start gap-1 text-md font-semibold font-poppins text-neutral-900 dark:text-neutral-100">
                    <BiImage />
                    Gallery
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {galleryImages.slice(0, 6).map((img, index) => {
                    const isLast = index === 5 && galleryImages.length > 6;
                    const remainingCount = galleryImages.length - 5;

                    return (
                      <div 
                        key={img.id} 
                        onClick={() => setLightboxIndex(index)}
                        className="group relative aspect-square overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 cursor-pointer"
                      >
                        <img 
                          src={img.src} 
                          alt={img.title} 
                          loading="lazy" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350 ease-in-out" 
                        />
                        {isLast ? (
                          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white backdrop-blur-2xs">
                            <span className="text-base font-bold font-mono">+{remainingCount}</span>
                            <span className="text-[9px] font-poppins font-medium tracking-wider uppercase mt-0.5">More</span>
                          </div>
                        ) : (
                          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-2 text-center text-white">
                            <span className="text-[9px] font-poppins font-semibold tracking-wider uppercase">
                              {img.title}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Personal Details Card */}
              
            </section>

            {/****************************************************** ABOUT ME SECTION *******************************************/}

            <section className="flex justify-center items-center gap-2 flex-col lg:w-8/12 min-w-0 w-full">
              <div className="border border-neutral-200 dark:border-neutral-800  p-5 rounded-lg shadow-sm w-full bg-white dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200">
                {/* About */}
                <div className="mb-3 flex justify-between items-center x">
                  <h2 className="flex items-center justify-start gap-1 text-md font-semibold font-poppins text-neutral-900 dark:text-neutral-100">
                    <BiUser />
                    About
                  </h2>

                  <Link
                    to="/About"
                    className="flex justify-center items-center gap-1 group text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 text-xs font-mono"
                  >
                    <span>View More</span>
                    <FaArrowRightLong className="group-hover:translate-x-2 ease-in-out duration-300" />
                  </Link>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 text-justify font-mono leading-relaxed">
                  I am a second-year Bachelor of Science in Information Systems
                  student with a strong focus on full-stack web development and
                  modern UI/UX architecture. I bridge the gap between robust
                  backend logic—like automated resource computation and
                  multi-role data management—and clean, minimalist frontend
                  design.
                </p>
              </div>

              {/* Skills */}
              <div className="border border-neutral-200 dark:border-neutral-800  p-5 rounded-lg shadow-sm w-full bg-white dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200">
                <div className="mb-3 flex justify-between items-center">
                  <h2 className=" flex items-center justify-start gap-1 text-md font-semibold font-poppins text-neutral-900 dark:text-neutral-100">
                    <BiCode />
                    Skills and Technologies
                  </h2>

                  <Link
                    to="/Skills"
                    className="flex justify-center items-center gap-1 group text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 text-xs font-mono"
                  >
                    <span>View More</span>
                    <FaArrowRightLong className="group-hover:translate-x-2 ease-in-out duration-300" />
                  </Link>
                </div>

                <div className="flex gap-3 flex-col justify-center items-center w-full">
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
              <div className="border border-neutral-200 dark:border-neutral-800  p-5 rounded-lg shadow-sm w-full min-w-0 bg-white dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200">
                <div className="mb-3 flex justify-between items-center">
                  <h2 className=" flex items-center justify-start gap-1 text-md font-semibold font-poppins text-neutral-900 dark:text-neutral-100">
                    <BiFolder />
                    Projects
                  </h2>

                  <Link
                    to="/Projects"
                    className="flex justify-center items-center gap-1 group text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 text-xs font-mono"
                  >
                    <span>View More</span>
                    <FaArrowRightLong className="group-hover:translate-x-2 ease-in-out duration-300" />
                  </Link>
                </div>

                <div className="flex snap-x justify-start scroll-auto items-center gap-5 overflow-x-scroll w-full flex-nowrap">
                  {projectList.map((project) => {
                    return (
                       <ProjectCard
                         key={project.id}
                         Title={project.Title}
                         Description={project.Description}
                         ImgLink={project.ImgLink}
                         ProjectLink={project.ProjectLink}
                         Tech={project.Tech}
                         Views={project.Views}
                         Stars={project.Stars}
                         Updated={project.Updated}
                         DemoLink={project.DemoLink}
                       />
                    );
                  })}
                </div>
              </div>
            </section>
          </div>

          {/****************************************************** CONTACT SECTION *******************************************/}
          <section className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3 w-full bg-white dark:bg-neutral-800/50 mt-4 text-neutral-850 dark:text-neutral-200 shadow-sm" id="contact">
            <div className="flex justify-center items-stretch gap-1 w-full flex-col md:flex-row ">
              <div className="flex justify-start items-start gap-5 flex-col  w-full rounded-sm md:w-4/12 overflow-hidden relative border border-neutral-200 dark:border-neutral-800">
                <img
                  src={ContactBg}
                  loading="lazy"
                  className="h-50 md:h-120 object-cover w-full rounded-sm opacity-90"
                  alt=""
                />

                <div className="flex flex-col justify-start items-start gap-3 absolute w-full bottom-0 p-4 bg-gradient-to-t from-white/90 dark:from-neutral-950 to-transparent">
                  <h2 className="text-4xl font-bold text-neutral-950 dark:text-white">Get in touch</h2>
                  <p className="text-xs  text-neutral-600 dark:text-neutral-300 font-mono">
                    Have a project in mind, a question about my work, or an
                    opportunity to discuss? Fill out the form below or reach out
                    directly via email.
                  </p>
                </div>
              </div>

              <div className="w-full rounded-sm md:w-8/12 p-8">
                <form
                  action=""
                  className="flex flex-col justify-start items-start gap-8 w-full h-full"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex justify-start items-center flex-col sm:flex-row  w-full gap-5">
                    <div className="w-full flex flex-col justify-start items-start gap-1.5">
                      <label htmlFor="" className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                        Name:
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        disabled={formSubmitting}
                        className="text-xs bg-transparent border-b border-b-neutral-200 dark:border-b-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-700 focus:border-b-neutral-950 dark:focus:border-b-neutral-500 focus:outline-0 w-full px-4 py-2 disabled:opacity-50 transition-all duration-200 font-mono"
                        placeholder="Juan Dela Cruz"
                      />
                      {errors.name && <span className="text-red-500 text-[10px] font-mono">{errors.name.message}</span>}
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-1.5">
                      <label htmlFor="" className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                        Email:
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        disabled={formSubmitting}
                        className="text-xs bg-transparent border-b border-b-neutral-200 dark:border-b-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-700 focus:border-b-neutral-950 dark:focus:border-b-neutral-500 focus:outline-0 w-full px-4 py-2 disabled:opacity-50 transition-all duration-200 font-mono"
                        placeholder="helloWorld@email.com"
                      />
                      {errors.email && <span className="text-red-500 text-[10px] font-mono">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="w-full flex flex-col justify-start items-start gap-1.5">
                    <label htmlFor="" className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      Message:
                    </label>
                    <textarea
                      {...register("message")}
                      disabled={formSubmitting}
                      className="text-xs bg-transparent border-b border-b-neutral-200 dark:border-b-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-700 focus:border-b-neutral-950 dark:focus:border-b-neutral-500 focus:outline-0 w-full px-4 py-2 disabled:opacity-50 transition-all duration-200 font-mono"
                      placeholder="Your message details here..."
                      rows={6}
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-[10px] font-mono">{errors.message.message}</span>}
                  </div>

                  <div className="flex justify-between items-center w-full mt-4">
                    <div className="flex flex-col items-start justify-start gap-1">
                      <h4 className="text-xs font-mono text-neutral-500 dark:text-neutral-400">Connect:</h4>
                      <div className="flex gap-2">
                        <a
                          href="https://github.com/k-r-y"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                        >
                          <FaGithub className="text-2xl" />
                        </a>
                        <a
                          href="https://instagram.com/kryyyyyyyyyyyy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                        >
                          <FaInstagram className="text-2xl" />
                        </a>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 py-3 px-8 text-xs font-semibold rounded shadow-sm disabled:bg-neutral-300 dark:disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed transition duration-200 flex items-center gap-2 cursor-pointer font-poppins"
                    >
                      {formSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-black dark:text-white" fill="none" viewBox="0 0 24 24">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 dark:bg-black/60 backdrop-blur-xs transition-all duration-300">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-2xl p-6 max-w-sm w-full mx-auto transform transition-all flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in-95 duration-200 text-neutral-900 dark:text-neutral-100">
            {toastType === "success" ? (
              <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-3xl font-semibold">
                ✓
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-100 dark:border-rose-900 flex items-center justify-center text-rose-600 dark:text-rose-450 text-3xl font-semibold">
                ✕
              </div>
            )}
            
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 font-poppins">
                {toastType === "success" ? "Message Sent!" : "Submission Failed"}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-450 leading-relaxed px-2 font-mono mt-1">
                {toastMessage}
              </p>
            </div>
            
            <button
              onClick={() => setShowToast(false)}
              className="mt-2 w-full py-2.5 px-4 bg-neutral-950 hover:bg-neutral-850 dark:bg-neutral-950 dark:border dark:border-neutral-800 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 text-white dark:text-neutral-200 rounded-lg text-xs font-semibold transition-colors duration-200 shadow-md cursor-pointer font-poppins"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300 p-4 animate-in fade-in duration-200">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 text-3xl cursor-pointer transition-colors"
            title="Close Lightbox"
          >
            <BiX />
          </button>

          {/* Centered Gallery View */}
          <div className="relative w-full max-w-4xl max-h-[80vh] flex items-center justify-center select-none">
            {/* Left navigation arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
              }}
              className="absolute left-2 md:left-4 z-10 text-white/75 hover:text-white bg-neutral-900/50 hover:bg-neutral-800/60 p-2 rounded-full text-3xl cursor-pointer transition-colors"
              title="Previous Image"
            >
              <BiChevronLeft />
            </button>

            {/* Main Image */}
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-neutral-800"
            />

            {/* Right navigation arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-2 md:right-4 z-10 text-white/75 hover:text-white bg-neutral-900/50 hover:bg-neutral-800/60 p-2 rounded-full text-3xl cursor-pointer transition-colors"
              title="Next Image"
            >
              <BiChevronRight />
            </button>
          </div>

          {/* Text Captions */}
          <div className="mt-4 text-center text-white flex flex-col gap-1">
            <h3 className="font-poppins font-semibold text-sm">
              {galleryImages[lightboxIndex].title}
            </h3>
            <span className="text-[10px] text-neutral-400 font-mono">
              Image {lightboxIndex + 1} of {galleryImages.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
