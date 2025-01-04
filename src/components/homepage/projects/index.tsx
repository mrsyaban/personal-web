import { useState } from "react";
import { projectData } from "../../../database/data";
import ProjectDetails from "./project-details";

const Projects = () => {
  const [modalData, setModalData] = useState<any>(null); // State for modal data
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const openModal = (item:any) => {
    setModalData(item); // Set modal data
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setModalData(null); // Clear modal data
  };

  return (
    <div className="w-full text-white items-start" id="proj-section">
      <div className="z-10 mb-[40px] flex flex-col items-start md:text-2xl">
        <h2 className="md:text-6xl text-5xl font-bold">
          Recent
          <br />
          Projects <span className="text-blue">+</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-14 w-full h-auto relative">
        {projectData.map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(item)} // Open modal on click
            className={`${item.image} bg-cover rounded-lg aspect-[16/9] cursor-pointer hover:scale-105` }
          >
            <div className="h-full bg-gradient-to-t from-black opacity-100 flex flex-col justify-end w-full outline-2 ">
              <div className="flex justify-between pr-6 pl-2 sm:pl-6 pb-4 sm:pb-10">
                <h1 className="text-lg md:text-2xl font-bold">
                  <span className="text-blue">| </span>
                  {item.title}
                </h1>
                <div className="flex gap-x-2 flex-row items-center">{item.tools}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && modalData && (
        <ProjectDetails closeModal={closeModal} modalData={modalData}/>
      )}
    </div>
  );
};

export default Projects;
