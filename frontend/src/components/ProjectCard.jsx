export default function ProjectCard({
  Title,
  Description,
  ImgLink,
  ProjectLink,
  Tech = [],
  Views = "0",
  Stars = "0",
  Updated = "N/A"
}) {
  // Ensure link starts with http:// or https:// to prevent broken relative navigation
  const sanitizedLink = ProjectLink && (ProjectLink.startsWith("http://") || ProjectLink.startsWith("https://"))
    ? ProjectLink
    : `https://${ProjectLink}`;

  return (
    <div className="shrink-0 w-80 snap-start border border-neutral-200 dark:border-neutral-800 rounded-lg flex flex-col justify-between h-full bg-white dark:bg-neutral-800/50 hover:border-neutral-350 dark:hover:border-neutral-700/80 shadow-2xs hover:shadow-xs transition-all duration-250 overflow-hidden text-neutral-800 dark:text-neutral-200">
      <div>
        {/* Image Container with bottom border */}
        <div className="overflow-hidden w-full h-40 bg-neutral-100 dark:bg-neutral-850 border-b border-neutral-200 dark:border-b-neutral-800/80">
          <img
            src={ImgLink}
            alt={Title}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
        
        {/* Header Details */}
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-semibold text-sm font-poppins text-neutral-900 dark:text-neutral-100 leading-tight">
            {Title}
          </h3>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-3 font-normal leading-relaxed font-mono">
            {Description}
          </p>

          {/* Render Tech Badges - Monochromatic Outline style */}
          {Tech.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2 mb-1">
              {Tech.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-[9px] border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 font-mono px-2 py-0.5 rounded-full hover:bg-neutral-950 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-black hover:border-neutral-950 dark:hover:border-neutral-100 transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Details: Stats & Action Button */}
      <div className="mt-auto flex flex-col">
        {/* Project Metrics Block - Aura style grid lines */}
        <div className="grid grid-cols-3 border-t border-b border-neutral-200 dark:border-t-neutral-800/80 dark:border-b-neutral-800/80 text-center font-mono bg-neutral-50/50 dark:bg-neutral-900/10">
          <div className="flex flex-col p-2 border-r border-neutral-200 dark:border-r-neutral-800/80 justify-center">
            <span className="text-[8px] font-semibold text-neutral-450 dark:text-neutral-500 uppercase tracking-wider font-poppins">Views</span>
            <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">{Views}</span>
          </div>
          <div className="flex flex-col p-2 border-r border-neutral-200 dark:border-r-neutral-800/80 justify-center">
            <span className="text-[8px] font-semibold text-neutral-450 dark:text-neutral-500 uppercase tracking-wider font-poppins ">Stars</span>
            <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">{Stars}</span>
          </div>
          <div className="flex flex-col p-2 justify-center">
            <span className="text-[8px] font-semibold text-neutral-450 dark:text-neutral-500 uppercase tracking-wider font-poppins ">Updated</span>
            <span className="text-[9px] font-bold text-neutral-600 dark:text-neutral-300 mt-1 truncate px-1">{Updated}</span>
          </div>
        </div>

        {/* View More Link Button */}
        <div className="p-3 bg-neutral-50/50 dark:bg-neutral-950/20 flex justify-center">
          <a
            href={sanitizedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2 px-4 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-neutral-950 dark:hover:border-white text-xs font-semibold font-poppins transition-colors duration-250 cursor-pointer shadow-2xs"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
}