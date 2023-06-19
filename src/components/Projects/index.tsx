import { FaReact, FaPython } from "react-icons/fa";
import {
  SiNextdotjs, 
  SiSqlite, 
  SiTailwindcss, 
  SiOpencv,
  SiNumpy,
  SiChakraui,
  SiDotnet,
  SiAxios
} from "react-icons/si";

import {TbBrandCSharp} from "react-icons/tb"

const Projects = () => {
    return (
        <div className="w-full md:mt-[150px] text-white items-start">
          <div
            className="z-10 mb-[40px] flex flex-col items-start md:text-2xl"
          >
            <h2 className="md:text-6xl text-5xl font-bold ">
              Recent
              <br />
              Projects <span className="text-blue">+</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-14 w-[250px] md:w-full h-auto mx-auto relative ">
            <a
              href="https://github.com/mrsyaban/ChatGPT-Lite" 
              rel="noreferrer" 
              target="_blank"
              className="bg-[url('./assets/images/chatgptlite.png')] bg-cover rounded-lg aspect-[16/9]"
            >
              <div className='h-full bg-gradient-to-t from-black opacity-70 hover:opacity-90 flex pl-6 pb-10 flex-col justify-end'>
                <div className="flex justify-between pr-6">
                  <h1 className="md:text-2xl font-bold ">
                    <span className="text-blue">| </span>
                    ChatGPT Lite
                  </h1>
                  <div className="pt-2 flex space-x-2">
                    <SiNextdotjs size={25}/>
                    <SiTailwindcss size={25}/>
                    <SiAxios size={25}/>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/mrsyaban/EigenFace-Recognition" 
              rel="noreferrer" 
              target="_blank"
              className="bg-[url('./assets/images/face_recognition.png')] bg-cover rounded-lg aspect-[16/9]"
            >
              <div className='h-full bg-gradient-to-t from-black opacity-70 hover:opacity-90 flex pl-6 pb-10 flex-col justify-end'>
                <div className="flex justify-between pr-6">
                  <h1 className="md:text-2xl font-bold">
                    <span className="text-blue">| </span>
                    Face Recognition App
                  </h1>
                  <div className="pt-2 flex space-x-2">
                    <FaPython size={25}/>
                    <SiOpencv size={25}/>
                    <SiNumpy size={25}/>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/mrsyaban/home-electricity-app" 
              rel="noreferrer" 
              target="_blank"
              className="bg-[url('./assets/images/home_electricity.png')] bg-cover rounded-lg aspect-[16/9]"
            >
              <div className='h-full bg-gradient-to-t from-black opacity-70 hover:opacity-90 flex pl-6 pb-10 flex-col justify-end'>
                <div className="flex justify-between pr-6">
                  <h1 className="md:text-2xl font-bold">
                    <span className="text-blue">| </span>
                    Home Electricity App
                  </h1>
                  <div className="pt-2 flex space-x-2">
                    <FaPython size={25}/>
                    <SiSqlite size={25}/>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/mrsyaban/Shortest-route-finder" 
              rel="noreferrer" 
              target="_blank"
              className="bg-[url('./assets/images/shortest_route.png')] bg-cover rounded-lg aspect-[16/9]"
            >
              <div className='h-full bg-gradient-to-t from-black opacity-70 hover:opacity-90 flex pl-6 pb-10 flex-col justify-end'>
                <div className="flex justify-between pr-6">
                  <h1 className="md:text-2xl font-bold">
                    <span className="text-blue">| </span>
                    Shortest Route Finder
                  </h1>
                  <div className="pt-2 flex space-x-2">
                    <FaReact size={25}/>
                    <SiChakraui size={25}/>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/mrsyaban/Maze-Treasure-Hunt" 
              rel="noreferrer" 
              target="_blank"
              className="bg-[url('./assets/images/maze.png')] bg-cover rounded-lg aspect-[16/9]"
            >
              <div className='h-full bg-gradient-to-t from-black opacity-70 hover:opacity-90 flex pl-6 pb-10 flex-col justify-end'>
                <div className="flex justify-between pr-6">
                  <h1 className="md:text-2xl font-bold">
                    <span className="text-blue">| </span>
                    BFS DFS Treasure Hunt
                  </h1>
                  <div className="pt-2 flex space-x-2">
                    <SiDotnet size={25}/>
                    <TbBrandCSharp size={25}/>
                  </div>
                </div>
              </div>
            </a>
            
          </div>
       </div>
    )

};

export default Projects;
