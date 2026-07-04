import { FaRegUser, FaArrowRightLong, FaLink, FaRegEnvelope } from "react-icons/fa6";
import Pfp from "./assets/pic.jpg";
import Bg from "./assets/bg.jpg";

function App() {

  let num = 56;


  return (
    <>
      <main className=" flex justify-center items-center min-h-screen">
        <div className="max-w-300  flex flex-col lg:flex-row gap-3 justify-center items-start  min-h-screen px-2 py-5">
          <section className="flex justify-center items-center gap-2 flex-col lg:max-w-4/12">


{/****************************************************** PROFILE SECTION *******************************************/}
            <div className="border border-neutral-500 rounded-md shadow w-full">

              {/* Profile Pic */}
              <div className="relative bg-neutral-500 h-45 mb-13">
                <img src={Bg} alt="" className=" object-cover h-full w-full" />

                <div className="flex justify-start items-center gap-2 absolute top-37 left-5 w-full">
                  <div className="w-25 h-25 relative">
                    <img
                      src={Pfp}
                      alt=""
                      className="rounded-full object-cover aspect-square border-4 border-white"
                    />
                    <div className="rounded-full bg-green-500 border-4 border-white p-2 absolute bottom-1 right-2"></div>
                  </div>

                  {/* Name */}
                  <div className="mt-7 flex justify">
                    <div>
                      <h1 className="font-bold">Prince Andrew Casiano</h1>
                    <p className="font-light text-neutral-500 text-sm">Information System Student</p>
                    </div>

                    
                    
                  </div>
                </div>
              </div>



              {/* Stats and Description */}
              <div className="p-5 flex flex-col justify-start items-center gap-3">
                <div className="">
                  <p className="font-light text-sm text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis nesciunt cum placeat natus libero ab, numquam at
                    officia alias harum quis ad, voluptatem doloremque.
                    Dignissimos fuga laboriosam tempore quod quidem!
                  </p>
                </div>


                {/* Data */}
                <div className="mt-2 w-full flex justify-center items-center gap-5">


                <div className="flex justify-center items-center flex-col px-5">
                  <h1 className="text-neutral-600">Project</h1>
                  <p className="font-bold text-xl">100</p>
                </div>

                <div className="flex justify-center items-center flex-col border-r border-l px-5 border-neutral-400 ">
                  <h1 className="text-neutral-600">Project</h1>
                  <p className="font-bold text-xl">100</p>
                </div>

                <div className="flex justify-center items-center flex-col px-5">
                  <h1 className="text-neutral-600">Project</h1>
                  <p className="font-bold text-xl">100</p>
                </div>
                  
                </div>

                <div className="flex gap-2 w-full">
                  <button className="btn border-2 border-black bg-black py-1 px-2 rounded-sm w-full"><a href="" className="font-bold text-white">Download CV</a></button>
                  <button className="btn border-2 border-black bg-transparent py-1 px-2 rounded-sm w-full"><a href="" className="font-bold text-black">Download CV</a></button>

                </div>
              </div>
            </div>



          {/* Contact Details */}
            <div className="border border-neutral-500  p-5 rounded-md shadow w-full">
              <div className="flex justify-start items-center gap-1 mb-5">
                 
                <h1 className=" flex items-center justify-center gap-1 text-xl font-semibold">
                <FaLink />
                  Additional Details
                </h1>

               
              </div>

              <div>
                {/* <div className="flex justify-start gap-2 items-center">
                  <FaRegEnvelope className="text-xl" />
                  casianoprince5@gmail.com
                </div>

                <div className="flex justify-start gap-2 items-center">
                  <FaRegEnvelope className="text-xl" />
                  casianoprince5@gmail.com
                </div>

                <div className="flex justify-start gap-2 items-center mb-10">
                  <FaRegEnvelope className="text-xl" />
                  casianoprince5@gmail.com
                </div> */}



                <div className="flex justify-start gap-2 items-center">
                  
                  <h1>Email:</h1>
                  <p>casianoprince5@gmail.com</p>
                </div>

                <div className="flex justify-start gap-2 items-center">
                  
                  <h1>Email:</h1>
                  <p>casianoprince5@gmail.com</p>
                </div>

                <div className="flex justify-start gap-2 items-center">
                  
                  <h1>Email:</h1>
                  <p>casianoprince5@gmail.com</p>
                </div>
              </div>
            </div>
          </section>




          {/****************************************************** ABOUT ME SECTION *******************************************/}


          <section className="flex justify-center items-center gap-2 flex-col">
            <div className="border border-neutral-500  p-5 rounded-md shadow">
              <div className="flex justify-between items-center ">
                <h1 className="flex justify-center items-bottom gap-1  text-xl font-semibold">
                  {" "}
                  <FaRegUser /> About
                </h1>

                <div>
                  <a
                    href=""
                    className="flex justify-center items-center gap-1 group text-neutral-500 text-sm hover:text-neutral-900"
                  >
                    View More{" "}
                    <FaArrowRightLong className="group-hover:translate-x-1 ease-out duration-300" />
                  </a>
                </div>
              </div>

              <div>
                <p className="text-neutral-500 font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae eaque animi dolor est blanditiis atque magnam pariatur
                  expedita repellat, saepe accusantium et officiis totam eius,
                  minus, veritatis natus voluptates sit!
                </p>
              </div>
            </div>

            {/* ABOUT ME SECTION */}
            <div className="border border-neutral-500  p-5 rounded-md shadow">
              <div className="flex justify-between items-center ">
                <h1 className="flex justify-center items-bottom gap-1  text-xl font-semibold">
                  
                  <FaRegUser /> About
                </h1>

                <div>
                  <a
                    href=""
                    className="flex justify-center items-center gap-1 group text-neutral-500 text-sm hover:text-neutral-900"
                  >
                    View More{" "}
                    <FaArrowRightLong className="group-hover:translate-x-1 ease-out duration-300" />
                  </a>
                </div>
              </div>

              <div>
                <p className="text-neutral-500 font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae eaque animi dolor est blanditiis atque magnam pariatur
                  expedita repellat, saepe accusantium et officiis totam eius,
                  minus, veritatis natus voluptates sit!
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
