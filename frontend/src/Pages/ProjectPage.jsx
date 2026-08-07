import { useState, Fragment } from "react";
import { BiFolder, BiStar, BiShow, BiLinkExternal, BiChevronDown, BiChevronUp, BiFile } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { fallbackReadmes } from "../constants/data";
import { useGithubProjects } from "../hooks/useGithubProjects";

export default function ProjectPage() {
  const { projects: projectList } = useGithubProjects();
  
  // Track which project's README drawer is open
  const [expandedRepo, setExpandedRepo] = useState(null);
  
  // Store fetched README contents
  const [readmes, setReadmes] = useState({});
  const [readmeLoading, setReadmeLoading] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Fullstack", "Frontend", "Backend"];
  
  const fetchReadme = async (repoName) => {
    if (readmes[repoName]) return; // Already fetched
    
    setReadmeLoading(prev => ({ ...prev, [repoName]: true }));
    
    try {
      // Try main branch first
      let res = await fetch(`https://raw.githubusercontent.com/k-r-y/${repoName}/main/README.md`);
      if (!res.ok) {
        // Fallback to master branch
        res = await fetch(`https://raw.githubusercontent.com/k-r-y/${repoName}/master/README.md`);
      }
      
      if (res.ok) {
        const text = await res.text();
        setReadmes(prev => ({ ...prev, [repoName]: text }));
      } else {
        setReadmes(prev => ({ ...prev, [repoName]: fallbackReadmes[repoName] || "No README.md found for this repository." }));
      }
    } catch (err) {
      console.error(err);
      setReadmes(prev => ({ ...prev, [repoName]: fallbackReadmes[repoName] || "Failed to fetch README." }));
    } finally {
      setReadmeLoading(prev => ({ ...prev, [repoName]: false }));
    }
  };

  // Simple toggle for README drawer
  const handleToggleReadme = (repoName) => {
    if (expandedRepo === repoName) {
      setExpandedRepo(null);
    } else {
      setExpandedRepo(repoName);
      fetchReadme(repoName);
    }
  };

  const filteredProjects = activeCategory === "All"
    ? projectList
    : projectList.filter(project => project.Category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Projects | Prince Andrew Casiano</title>
        <meta name="description" content="Browse the portfolio projects built by Prince Andrew Casiano, including the Grade Portal System, Yazzie Catering OMS, Aperture Studio Booking, and custom React utilities." />
      </Helmet>
      <main className="w-full flex justify-center items-center py-10 px-4 md:px-8 pb-32  text-neutral-800 dark:text-neutral-200 min-h-screen">
        <div className="max-w-5xl w-full flex flex-col gap-8">
        
        {/* Header Section */}
        <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm p-6 bg-white dark:bg-neutral-800/50 w-full text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
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
          <div className="w-full overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm bg-white dark:bg-neutral-800/50 animate-in fade-in duration-200">
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
                            <div className="flex gap-2">
                              {project.DemoLink && (
                                <a
                                  href={project.DemoLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-dark border hover:scale-105 rounded font-semibold font-poppins text-[10px] transition duration-200 cursor-pointer w-max shadow-2xs"
                                >
                                  Live Demo <BiLinkExternal />
                                </a>
                              )}
                              <a
                                href={project.ProjectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded font-semibold font-poppins text-[10px] transition duration-200 cursor-pointer w-max shadow-2xs"
                              >
                                View Repository <BiLinkExternal />
                              </a>
                            </div>
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
                                  <div className="markdown-body font-mono text-[10px] leading-relaxed text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-950/60 p-4 border border-neutral-200/60 dark:border-neutral-850 rounded-lg overflow-auto max-h-72 whitespace-pre-wrap text-justify">
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                      {readmes[project.repoName]}
                                    </ReactMarkdown>
                                  </div>
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
                        <div className="flex items-center gap-1.5">
                          {project.DemoLink && (
                            <a
                              href={project.DemoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 px-2.5 py-1.5 bg-black text-white hover:bg-black dark:bg-black dark:hover:bg-black rounded font-semibold font-poppins text-[10px] transition duration-200 cursor-pointer shadow-2xs"
                            >
                              Demo <BiLinkExternal />
                            </a>
                          )}
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
                          <div className="markdown-body font-mono text-[9px] leading-relaxed text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-950/60 p-2.5 border border-neutral-200/60 dark:border-neutral-850 rounded overflow-auto max-h-56 whitespace-pre-wrap text-justify">
                            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                              {readmes[project.repoName]}
                            </ReactMarkdown>
                          </div>
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
    </>
  );
}
