import {
  BiHome,
  BiUser,
  BiSolidUser,
  BiCode,
  BiFolder,
  BiSolidHome,
  BiSolidFolder,
} from "react-icons/bi";
import { lazy, Suspense } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";

const HomePage = lazy(() => import("./Pages/Home"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const ProjectPage = lazy(() => import("./Pages/ProjectPage"));
const SkillPage = lazy(() => import("./Pages/SkillsPage"));

const LoadingSpinner = () => (
  <div className="min-h-screen w-full flex flex-col justify-center items-center gap-4 bg-neutral-50/50 backdrop-blur-xs">
    <div className="w-10 h-10 border-4 border-neutral-200 border-t-black rounded-full animate-spin"></div>
    <span className="text-sm font-poppins text-neutral-500 font-medium">Loading...</span>
  </div>
);

export default function App() {
  return (
    <>
      <Router>
        <main className="grow flex items-center justify-center p-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/About" element={<AboutPage />} />
              <Route path="/Projects" element={<ProjectPage />} />
              <Route path="/Skills" element={<SkillPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>

        <nav className="flex justify-center items-center fixed z-10 bottom-3 inset-x-0">
          <ul className="flex justify-between items-center h-full rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm border border-gray-100 px-2 gap-1 py-2 w-full max-w-85  bg-black/25">
            {/* <li className="flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full py-1 w-full"><BiHomeAlt/><a className="text-xs hidden sm:block"  href="">Home</a></li>
        <li className="flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full w-full py-1"><BiUser/><a className="text-xs hidden sm:block" href="">About</a></li>
        <li className="flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full w-full py-1"><BiCode/><a className="text-xs hidden sm:block"  href="">Skill</a></li>
        <li className="flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full  w-full py-1"><BiFolder/><a className="text-xs hidden sm:block"  href="">Project</a></li> */}
            <li className="flex-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full py-2 w-full ${isActive ? "bg-white/50" : ""} `
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <BiSolidHome /> : <BiHome />}
                    <span
                      className={`text-xs hidden sm:block  ${isActive ? "font-bold" : ""}`}
                    >
                      Home
                    </span>
                  </>
                )}
              </NavLink>
            </li>

            <li className="flex-1">
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  ` flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full py-2 w-full ${isActive ? "bg-white/50" : ""} `
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <BiSolidUser /> : <BiUser />}
                    <span
                      className={`text-xs hidden sm:block  ${isActive ? "font-bold" : ""}`}
                    >
                      About
                    </span>
                  </>
                )}
              </NavLink>
            </li>

            <li className="flex-1">
              <NavLink
                to="/Skills"
                className={({ isActive }) =>
                  ` flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full py-2 w-full ${isActive ? "bg-white/50" : ""} `
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <BiCode className="bg-black text-white rounded" />
                    ) : (
                      <BiCode />
                    )}
                    <span
                      className={`text-xs hidden sm:block  ${isActive ? "font-bold" : ""}`}
                    >
                      Skills
                    </span>
                  </>
                )}
              </NavLink>
            </li>

            <li className="flex-1">
              <NavLink
                to="/Projects"
                className={({ isActive }) =>
                  ` flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full py-2 w-full ${isActive ? "bg-white/50" : ""} `
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <BiSolidFolder /> : <BiFolder />}
                    <span
                      className={`text-xs hidden sm:block  ${isActive ? "font-bold" : ""}`}
                    >
                      Projects
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </Router>
    </>
  );
}
