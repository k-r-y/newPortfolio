import { useState, useEffect, Fragment } from "react";
import { BiFolder, BiStar, BiShow, BiLinkExternal, BiChevronDown, BiChevronUp, BiFile } from "react-icons/bi";

import Bg from "./../assets/bg.webp";
import Aperture from "./../assets/aperture.webp";

export default function ProjectPage() {
  const [projectList, setProjectList] = useState([
    {
      id: 1,
      repoName: "grade",
      Title: "Grade Portal System",
      ImgLink: Aperture,
      Description: "A web-based grading system that automates academic workflows for Kolehiyo ng Lungsod ng Dasmariñas. Allows teachers to manage classes and transmute grades to the 1.0–5.0 scale, while students view performance records.",
      ProjectLink: "https://github.com/k-r-y/grade",
      Tech: ["PHP", "MySQL", "Bootstrap", "CSS"],
      Category: "Fullstack",
      Views: "0",
      Stars: "0",
      Updated: "Jul 2026",
    },
    {
      id: 2,
      repoName: "yazzie-2.0",
      Title: "Yazzie Catering OMS",
      ImgLink: Bg,
      Description: "A web-based order management system designed for catering businesses to streamline event bookings, manage client relationships, process payments, and coordinate job assignments with role-based scoped access.",
      ProjectLink: "https://github.com/k-r-y/yazzie-2.0",
      Tech: ["PHP", "HTML5", "CSS3", "Bootstrap", "JavaScript"],
      Category: "Fullstack",
      Views: "0",
      Stars: "0",
      Updated: "Jun 2026",
    },
    {
      id: 3,
      repoName: "randomGenerator",
      Title: "Random Generator Utility",
      ImgLink: Bg,
      Description: "A fast, interactive application for generating random values with visual feedback. Built with React 19, TypeScript, and Tailwind CSS, complete with celebratory confetti animations.",
      ProjectLink: "https://github.com/k-r-y/randomGenerator",
      Tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      Category: "Frontend",
      Views: "0",
      Stars: "0",
      Updated: "Jul 2026",
    },
    {
      id: 4,
      repoName: "apertureProject",
      Title: "Aperture Appointment System",
      ImgLink: Aperture,
      Description: "A web-based booking and management platform for photography and videography studios. Streamlines online package booking, consultation scheduling, invoicing, and image gallery uploads.",
      ProjectLink: "https://github.com/k-r-y/apertureProject",
      Tech: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
      Category: "Fullstack",
      Views: "0",
      Stars: "0",
      Updated: "Jul 2026",
    },
  ]);

  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Fullstack", "Frontend", "Backend"];
  
  // Track which project's README drawer is open
  const [expandedRepo, setExpandedRepo] = useState(null);
  
  // Store fetched README contents, pre-seeded with local content as fallback
  const [readmes, setReadmes] = useState({
    grade: `KLD Grade System

Streamlined grade management and class coordination for Kolehiyo ng Lungsod ng Dasmariñas.

Key Features:
- Grade Management: Automated calculations with Excel ingestion and manual overrides.
- Role-Based Access: Separate portals for admins, teachers, and students.
- Instant Transmutation: Raw scores automatically converted to the 1.0–5.0 grading scale.
- Real-Time Analytics: Monitor academic performance trends.
- Secure Authentication: Email verification with OTP.

Tech Stack:
- Backend: PHP 8.0+
- Database: MySQL / MariaDB
- Frontend: HTML5, CSS3 (Verdant Design System), Bootstrap 5
- Email: PHPMailer + Gmail SMTP
- Excel Parsing: SheetJS`,
    
    "yazzie-2.0": `Yazzie Catering OMS

Order management system for catering operations with booking, payments, and staff coordination.

Key Features:
- Booking Management: Pax-based pricing tiers and dynamic quotations.
- Payment Processing: Deposit tracking with audit trails.
- Role-Based Access: Super admin, admin, frontdesk, and staff roles.
- Comprehensive Audit Log: History of financial and booking changes.

Tech Stack:
- Backend: PHP 8.0+ (procedural, no framework)
- Database: MySQL 8.0+
- Frontend: HTML5, CSS3, Bootstrap 5, Vanilla JavaScript
- Email: PHPMailer + Gmail SMTP`,
    
    randomGenerator: `Random Generator

A React-based random value generator with celebratory animations and a polished user interface.

Key Features:
- Random Generation: Instantly generate random values with a single click.
- Confetti Animations: Canvas-based confetti effects.
- Responsive Design: Fully responsive UI built with Tailwind CSS.
- Type Safe: TypeScript support throughout the codebase.

Tech Stack:
- Frontend: React 19, TypeScript
- Styling: Tailwind CSS 4, Lucide React Icons
- Build Tool: Vite 8`,
    
    apertureProject: `Aperture Studio Management System

A web-based booking and management platform for photography and videography studios.

Key Features:
- Online Booking: Select packages, add-ons, and dates with real-time price calculation.
- Admin Dashboard: Overview of bookings, revenue, and activity metrics.
- Event Calendar: Visual schedule of upcoming and completed events.
- Invoicing: Generate PDF invoices.

Tech Stack:
- Backend: PHP
- Database: MySQL
- Frontend: HTML, CSS, JavaScript`
  });
  const [readmeLoading, setReadmeLoading] = useState({});

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const updated = await Promise.all(
          projectList.map(async (project) => {
            try {
              const res = await fetch(`https://api.github.com/repos/k-r-y/${project.repoName}`);
              if (!res.ok) return project;
              const data = await res.json();
              
              const date = new Date(data.updated_at);
              const formattedDate = date.toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              });

              return {
                ...project,
                Description: data.description || project.Description,
                ProjectLink: data.html_url || project.ProjectLink,
                Stars: String(data.stargazers_count),
                Views: String(data.forks_count),
                Updated: formattedDate,
              };
            } catch (err) {
              return project;
            }
          })
        );
        setProjectList(updated);
      } catch (e) {
        console.error("Failed to fetch github repos", e);
      }
    };
    fetchGithubData();
  }, []);

  // Fetch README content on demand when a drawer is expanded
  const handleToggleReadme = async (repoName) => {
    if (expandedRepo === repoName) {
      setExpandedRepo(null);
      return;
    }
    
    setExpandedRepo(repoName);
    
    // If we've already fetched it online, don't fetch again
    // (Note: we check if the string contains more than our seed data or matches the seed)
    // To be simple, we only fetch if we don't have it or if it is our default short seed
    // We can fetch to get the full formatted file if they click it
    setReadmeLoading(prev => ({ ...prev, [repoName]: true }));
    try {
      const res = await fetch(`https://api.github.com/repos/k-r-y/${repoName}/readme`);
      if (!res.ok) throw new Error("No README found");
      const data = await res.json();
      
      // Decode base64 content safely
      const decoded = atob(data.content.replace(/\s/g, ''));
      setReadmes(prev => ({ ...prev, [repoName]: decoded }));
    } catch (err) {
      // Fallback is already inside state, so do nothing (it will show the seeded details)
      console.log("Using pre-seeded fallback README content");
    } finally {
      setReadmeLoading(prev => ({ ...prev, [repoName]: false }));
    }
  };

  const filteredProjects = activeCategory === "All"
    ? projectList
    : projectList.filter(project => project.Category === activeCategory);

  return (
    <main className="w-full flex justify-center items-center py-10 px-4 md:px-8 pb-32 bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 min-h-screen">
      <div className="max-w-5xl w-full flex flex-col gap-8">
        
        {/* Header Section */}
        <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm p-6 bg-white dark:bg-neutral-900/70 w-full text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold font-poppins text-neutral-900 dark:text-neutral-100 flex items-center justify-center md:justify-start gap-2 mb-2">
              <BiFolder /> Project Registry
            </h1>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono leading-relaxed">
              A tabular listing of my software products, listing features, technical architectures, and developer statistics.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 shrink-0 bg-neutral-100/80 dark:bg-neutral-950/60 p-1 border border-neutral-200 dark:border-neutral-800 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 text-xs font-mono rounded-md font-semibold transition-all duration-255 cursor-pointer ${
                  activeCategory === category
                    ? "bg-neutral-950 dark:bg-white text-white dark:text-black shadow-xs"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-900/60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Table Display */}
        {filteredProjects.length > 0 ? (
          <div className="w-full overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm bg-white dark:bg-neutral-900/70 animate-in fade-in duration-200">
            {/* Desktop Table */}
            <table className="w-full border-collapse text-left hidden md:table">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 text-neutral-450 dark:text-neutral-500 text-[10px] font-mono uppercase tracking-wider">
                  <th className="p-4 font-semibold w-1/4">Project</th>
                  <th className="p-4 font-semibold w-5/12">Description / Explanation</th>
                  <th className="p-4 font-semibold w-1/5">Tech Stack</th>
                  <th className="p-4 font-semibold text-right">Metrics & Link</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {filteredProjects.map((project) => {
                  const isExpanded = expandedRepo === project.repoName;
                  return (
                    <Fragment key={project.id}>
                      <tr className="hover:bg-neutral-50/30 dark:hover:bg-neutral-900/10 transition-colors duration-150 border-b border-neutral-200/60 dark:border-neutral-800/40 last:border-b-0">
                        {/* Title and Category */}
                        <td className="p-4 align-top">
                          <div className="flex flex-col gap-1.5">
                            <span className=" text-neutral-900 dark:text-neutral-100 font-poppins text-sm font-semibold">
                              {project.Title}
                            </span>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200 dark:bg-neutral-950 dark:border-neutral-800 rounded text-[9px] font-mono text-neutral-600 dark:text-neutral-450 uppercase">
                                {project.Category}
                              </span>
                              <span className="text-[9px] text-neutral-400 font-mono">
                                {project.Updated}
                              </span>
                            </div>
                            
                            {/* Readme toggle button */}
                            <button
                              onClick={() => handleToggleReadme(project.repoName)}
                              className="mt-3.5 flex items-center gap-1 text-[10px] font-mono font-bold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer w-max"
                            >
                              <BiFile /> {isExpanded ? "Hide README.md" : "Show README.md"}
                              {isExpanded ? <BiChevronUp className="text-sm" /> : <BiChevronDown className="text-sm" />}
                            </button>
                          </div>
                        </td>

                        {/* Description */}
                        <td className="p-4 align-top leading-relaxed text-neutral-600 dark:text-neutral-400 font-mono text-justify">
                          {project.Description}
                        </td>

                        {/* Tech Stack */}
                        <td className="p-4 align-top">
                          <div className="flex flex-wrap gap-1">
                            {project.Tech.map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-0.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-500 text-[9px] font-mono rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </td>

                        {/* Metrics and External Link */}
                        <td className="p-4 align-top text-right">
                          <div className="flex flex-col items-end gap-3">
                            <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-450 dark:text-neutral-500">
                              <span className="flex items-center gap-1" title="Forks">
                                <BiShow className="text-xs" /> {project.Views}
                              </span>
                              <span className="flex items-center gap-1" title="Stars">
                                <BiStar className="text-xs" /> {project.Stars}
                              </span>
                            </div>
                            <a
                              href={project.ProjectLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded font-semibold font-poppins text-[10px] transition duration-200 cursor-pointer w-max shadow-2xs"
                            >
                              View Repository <BiLinkExternal />
                            </a>
                          </div>
                        </td>
                      </tr>
                      
                      {/* Expanded README Drawer Row */}
                      {isExpanded && (
                        <tr>
                          <td colSpan={4} className="p-4 bg-neutral-50/50 dark:bg-neutral-950/20 border-b border-neutral-200 dark:border-neutral-800/85">
                            <div className="flex flex-col gap-2.5 animate-in slide-in-from-top-1.5 duration-200">
                              <div className="flex items-center gap-1.5 text-[9px] font-mono text-neutral-450 dark:text-neutral-500 border-b border-neutral-200 dark:border-neutral-800 pb-1.5">
                                <BiFile /> {project.repoName}/README.md
                              </div>
                              {readmeLoading[project.repoName] ? (
                                <div className="py-4 flex items-center justify-center gap-2 text-neutral-500 font-mono text-[10px]">
                                  <div className="w-3.5 h-3.5 border-2 border-neutral-300 dark:border-neutral-700 border-t-neutral-800 dark:border-t-white rounded-full animate-spin"></div>
                                  Fetching file content...
                                </div>
                              ) : (
                                <pre className="font-mono text-[10px] leading-relaxed text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-950/60 p-4 border border-neutral-200/60 dark:border-neutral-850 rounded-lg overflow-auto max-h-72 whitespace-pre-wrap text-justify">
                                  {readmes[project.repoName]}
                                </pre>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>

            {/* Mobile Cards Stack */}
            <div className="block md:hidden divide-y divide-neutral-200 dark:divide-neutral-800 text-xs">
              {filteredProjects.map((project) => {
                const isExpanded = expandedRepo === project.repoName;
                return (
                  <div key={project.id} className="p-5 flex flex-col gap-4">
                    {/* Top line with title and category */}
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex flex-col gap-1">
                        <span className=" text-neutral-900 dark:text-neutral-100 font-poppins text-sm font-semibold">
                          {project.Title}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 bg-neutral-100 border border-neutral-200 dark:bg-neutral-950 dark:border-neutral-800 rounded text-[9px] font-mono text-neutral-600 dark:text-neutral-450 uppercase">
                            {project.Category}
                          </span>
                          <span className="text-[9px] text-neutral-400 font-mono">
                            {project.Updated}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 font-mono text-justify">
                      {project.Description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1">
                      {project.Tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-neutral-50/50 dark:bg-neutral-950/20 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-500 text-[9px] font-mono rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer stats & button */}
                    <div className="flex justify-between items-center gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800/40">
                      <div className="flex items-center gap-2.5 font-mono text-[9px] text-neutral-450 dark:text-neutral-500">
                        <span className="flex items-center gap-0.5" title="Forks">
                          <BiShow /> {project.Views}
                        </span>
                        <span className="flex items-center gap-0.5" title="Stars">
                          <BiStar /> {project.Stars}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleToggleReadme(project.repoName)}
                          className="px-2 py-1.5 border border-neutral-350 dark:border-neutral-750 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded font-mono font-bold text-[9px] text-neutral-600 dark:text-neutral-400 transition cursor-pointer"
                        >
                          {isExpanded ? "Close Info" : "Readme"}
                        </button>
                        <a
                          href={project.ProjectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2.5 py-1.5 bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded font-semibold font-poppins text-[10px] transition duration-200 cursor-pointer shadow-2xs"
                        >
                          Code <BiLinkExternal />
                        </a>
                      </div>
                    </div>
                    
                    {/* Mobile Expanded README Drawer */}
                    {isExpanded && (
                      <div className="mt-2 p-3 bg-neutral-50/50 dark:bg-neutral-950/20 border border-neutral-200 dark:border-neutral-800/80 rounded-lg flex flex-col gap-2 animate-in slide-in-from-top-1.5 duration-200">
                        <div className="flex items-center gap-1 text-[9px] font-mono text-neutral-450 dark:text-neutral-500 border-b border-neutral-200 dark:border-neutral-800 pb-1">
                          <BiFile /> README.md
                        </div>
                        {readmeLoading[project.repoName] ? (
                          <div className="py-3 flex items-center justify-center gap-2 text-neutral-500 font-mono text-[9px]">
                            <div className="w-3.5 h-3.5 border-2 border-neutral-300 dark:border-neutral-700 border-t-neutral-800 dark:border-t-white rounded-full animate-spin"></div>
                            Fetching...
                          </div>
                        ) : (
                          <pre className="font-mono text-[9px] leading-relaxed text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-950/60 p-2.5 border border-neutral-200/60 dark:border-neutral-850 rounded overflow-auto max-h-56 whitespace-pre-wrap text-justify">
                            {readmes[project.repoName]}
                          </pre>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-10 bg-white dark:bg-neutral-900/30 text-center w-full">
            <span className="text-sm font-poppins text-neutral-500 dark:text-neutral-450">No projects found in this category.</span>
          </div>
        )}

      </div>
    </main>
  );
}
