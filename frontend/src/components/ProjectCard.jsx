

export default function ProjectCard ({ Title, Description, ImgLink, ProjectLink }) {
  return (
    // Added: shrink-0, w-80 (fixed width), and snap-start for scroll snapping
    <div className="shrink-0 w-80 snap-start border border-neutral-300 rounded-lg p-3 flex flex-col justify-between h-full bg-white hover:shadow-md transition-shadow duration-300">
      <div>
        <div className="overflow-hidden w-full h-40 rounded-md mb-3 bg-neutral-100">
          <img
            src={ImgLink}
            alt={Title}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <h3 className="font-semibold text-sm font-poppins text-neutral-900 mb-1">{Title}</h3>
        <p className="text-xs text-neutral-600 line-clamp-3 mb-4 font-normal leading-relaxed">
          {Description}
        </p>
      </div>

      <div className="mt-auto pt-2 flex justify-center">
        <a
          href={ProjectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center py-1.5 px-4 border border-neutral-300 rounded-md bg-neutral-50 hover:bg-neutral-900 hover:text-white text-xs font-medium transition-colors duration-200"
        >
          View More
        </a>
      </div>
    </div>
  );
};