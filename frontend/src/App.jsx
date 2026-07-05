import HomePage from "./Pages/HomePage";
import { BiHomeAlt, BiUser, BiCode, BiFolder } from "react-icons/bi";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import SkillPage from "./Pages/SkillsPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>


        <main className="grow flex items-center justify-center p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Projects" element={<ProjectPage />} />
            <Route path="/Skills" element={<SkillPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <nav className="flex justify-center items-center fixed z-10 bottom-3 inset-x-0">
          <ul className="flex justify-between items-center h-full rounded-full bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100 px-2 gap-1 py-2 w-full max-w-85 bg-black/10">
            {/* <li className="flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full py-1 w-full"><BiHomeAlt/><a className="text-xs hidden sm:block"  href="">Home</a></li>
        <li className="flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full w-full py-1"><BiUser/><a className="text-xs hidden sm:block" href="">About</a></li>
        <li className="flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full w-full py-1"><BiCode/><a className="text-xs hidden sm:block"  href="">Skill</a></li>
        <li className="flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full  w-full py-1"><BiFolder/><a className="text-xs hidden sm:block"  href="">Project</a></li> */}
<li className="flex-1">
            
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full py-1 w-full ${isActive ? "bg-white/50" : ""} `
                }
              >  <BiHomeAlt />
                <span className="text-xs hidden sm:block ">Home</span>
              </NavLink>
            </li>

            <li className="flex-1">
            
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  ` flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full py-1 w-full ${isActive ? "bg-white/50" : ""} `
                }
              >  <BiUser />
                <span className="text-xs hidden sm:block ">About</span>
              </NavLink>
            </li>

            <li className="flex-1">
            
              <NavLink
                to="/Skills"
                className={({ isActive }) =>
                  ` flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full py-1 w-full ${isActive ? "bg-white/50" : ""} `
                }
              >  <BiCode />
                <span className="text-xs hidden sm:block ">Skills</span>
              </NavLink>
            </li>
           <li className="flex-1">
            
              <NavLink
                to="/Projects"
                className={({ isActive }) =>
                  ` flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full py-1 w-full ${isActive ? "bg-white/50" : ""} `
                }
              >  <BiFolder />
                <span className="text-xs hidden sm:block ">Projects</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Router>
    </>
  );
}
