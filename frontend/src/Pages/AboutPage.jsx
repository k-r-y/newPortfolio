import { FaArrowRightLong, FaRegUser } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <>
      <main className="flex justify-center items-center min-h-screen w-full">
        <section className="flex justify-center items-center max-w-300">
          <div className="border border-neutral-300  p-5 rounded-md shadow w-full ">
            {/* About */}
            <div className="mb-3 flex justify-between items-center ">
              <h2 className="flex items-center justify-start gap-1 text-md font-semibold font-poppins">
                <FaRegUser />
                About
              </h2>

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
              modern UI/UX architecture. I bridge the gap between robust backend
              logic—like automated resource computation and multi-role data
              management—and clean, minimalist frontend design.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
