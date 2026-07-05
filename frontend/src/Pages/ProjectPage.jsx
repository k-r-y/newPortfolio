import { FaArrowRightLong, FaRegUser } from "react-icons/fa6";
import ProjectCard from "./../components/ProjectCard";
import { BiFolder } from "react-icons/bi";

import Bg from "./../assets/bg.jpg";
import Aperture from "./../assets/aperture.png";
import Pfp from "./../assets/pic.jpg";

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

export default function ProjectPage() {
  return (
    <>
      <main className="flex justify-center items-center min-h-screen w-full pb-20">
        <section className="flex justify-center items-center max-w-300 w-full">
          <div className="border border-neutral-300  p-5 rounded-md shadow-sm w-full min-w-0">
            <div className="mb-3 flex justify-between items-center">
              <h2 className=" flex items-center justify-start gap-1 text-md font-semibold font-poppins">
                <BiFolder />
                Projects
              </h2>

              <div className="flex justify-center items-center gap-1 group text-neutral-600 hover:text-neutral-900 text-xs">
                <a href="" className="">
                  View More
                </a>
                <FaArrowRightLong className="group-hover:translate-x-2 ease-in-out duration-300" />
              </div>
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
      </main>
    </>
  );
}
