import {
  BiHome,
  BiUser,
  BiSolidUser,
  BiCode,
  BiFolder,
  BiSolidHome,
  BiSolidFolder,
  BiSun,
  BiMoon,
} from "react-icons/bi";
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const HomePage = lazy(() => import("./Pages/Home"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const ProjectPage = lazy(() => import("./Pages/ProjectPage"));
const SkillPage = lazy(() => import("./Pages/SkillsPage"));

const LoadingSpinner = () => (
  <div className="min-h-screen w-full flex flex-col justify-center items-center gap-4 bg-neutral-50/50 dark:bg-neutral-950/50 backdrop-blur-xs">
    <div className="w-10 h-10 border-4 border-neutral-200 dark:border-neutral-800 border-t-black dark:border-t-white rounded-full animate-spin"></div>
    <span className="text-sm font-poppins text-neutral-500 dark:text-neutral-450 font-medium">Loading...</span>
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      {/* Background wireframe layout gridlines (Z-0) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Vertical lines */}
        <div className="absolute left-[6%] md:left-[12%] top-0 bottom-0 w-[1px] bg-neutral-200 dark:bg-neutral-800/40"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-neutral-200/50 dark:bg-neutral-800/20 hidden lg:block"></div>
        <div className="absolute right-[6%] md:right-[12%] top-0 bottom-0 w-[1px] bg-neutral-200 dark:bg-neutral-800/40"></div>
        
        {/* Horizontal lines */}
        <div className="absolute top-[80px] left-0 right-0 h-[1px] bg-neutral-200 dark:bg-neutral-800/40"></div>
        <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-neutral-200/50 dark:bg-neutral-800/20"></div>
        <div className="absolute top-[75%] left-0 right-0 h-[1px] bg-neutral-200/50 dark:bg-neutral-800/20"></div>
      </div>

      {/* Theme Toggle Button - Floating at Top Left */}
      <div className="fixed top-4 left-4 md:top-6 md:left-8 z-50">
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center p-2.5 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-350 hover:text-neutral-900 dark:hover:text-neutral-100 hover:shadow-2xs dark:hover:bg-neutral-850 transition-all duration-200 cursor-pointer"
          title="Toggle Theme"
        >
          {theme === "dark" ? (
            <BiSun className="text-lg" />
          ) : (
            <BiMoon className="text-lg" />
          )}
        </button>
      </div>

      <main className="grow flex items-center justify-center p-1 relative z-10">
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

      {/* Bottom Navigation Bar */}
      <nav className="flex justify-center items-center fixed z-20 bottom-3 inset-x-0">
        <ul className="flex justify-between items-center h-full rounded-full bg-white/70 dark:bg-neutral-900/65 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 px-2 gap-1 py-1.5 w-full max-w-85 shadow-md dark:shadow-2xl text-neutral-500 dark:text-neutral-400">
          <li className="flex-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` flex flex-col justify-center items-center text-2xl gap-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-full py-1.5 w-full transition-all duration-200 ${
                  isActive ? "bg-neutral-100 text-neutral-950 dark:bg-neutral-800 dark:text-white font-medium" : ""
                } `
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? <BiSolidHome /> : <BiHome />}
                  <span className="text-[10px] hidden sm:block">Home</span>
                </>
              )}
            </NavLink>
          </li>

          <li className="flex-1">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                ` flex flex-col justify-center items-center text-2xl gap-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-full py-1.5 w-full transition-all duration-200 ${
                  isActive ? "bg-neutral-100 text-neutral-950 dark:bg-neutral-800 dark:text-white font-medium" : ""
                } `
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? <BiSolidUser /> : <BiUser />}
                  <span className="text-[10px] hidden sm:block">About</span>
                </>
              )}
            </NavLink>
          </li>

          <li className="flex-1">
            <NavLink
              to="/Skills"
              className={({ isActive }) =>
                ` flex flex-col justify-center items-center text-2xl gap-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-full py-1.5 w-full transition-all duration-200 ${
                  isActive ? "bg-neutral-100 text-neutral-950 dark:bg-neutral-800 dark:text-white font-medium" : ""
                } `
              }
            >
              <BiCode />
              <span className="text-[10px] hidden sm:block">Skills</span>
            </NavLink>
          </li>

          <li className="flex-1">
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                ` flex flex-col justify-center items-center text-2xl gap-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-full py-1.5 w-full transition-all duration-200 ${
                  isActive ? "bg-neutral-100 text-neutral-950 dark:bg-neutral-800 dark:text-white font-medium" : ""
                } `
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? <BiSolidFolder /> : <BiFolder />}
                  <span className="text-[10px] hidden sm:block">Projects</span>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </Router>
  );
}
