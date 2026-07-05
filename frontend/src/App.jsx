import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import { BiHomeAlt, BiUser, BiCode, BiFolder } from "react-icons/bi";


export default function App(){
  return(
    <>
    <HomePage />


    <nav className="flex justify-center items-center fixed z-10 bottom-5 inset-x-0">
      <ul className="flex justify-between items-center h-full rounded-full bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100 px-5 py-2 w-full max-w-80 bg-black/10">
        <li className="flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full py-1 w-full"><BiHomeAlt/><a className="text-xs hidden sm:block"  href="">Home</a></li>
        <li className="flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full w-full py-1"><BiUser/><a className="text-xs hidden sm:block" href="">About</a></li>
        <li className="flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full w-full py-1"><BiCode/><a className="text-xs hidden sm:block"  href="">Skill</a></li>
        <li className="flex flex-col justify-center items-center text-3xl gap-1 hover:bg-white/50 rounded-full  w-full py-1"><BiFolder/><a className="text-xs hidden sm:block"  href="">Project</a></li>
      </ul>
    </nav>
    </>
    
  )
}
 