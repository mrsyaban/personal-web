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

      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-14 w-[250px] md:w-full h-auto mx-auto relative">
        {projectData.map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(item)} // Open modal on click
            className={`${item.image} bg-cover rounded-lg aspect-[16/9] cursor-pointer`}
          >
            <div className="h-full bg-gradient-to-t from-black opacity-70 hover:opacity-90 flex pl-6 pb-10 flex-col justify-end">
              <div className="flex justify-between pr-6">
                <h1 className="md:text-2xl font-bold">
                  <span className="text-blue">| </span>
                  {item.title}
                </h1>
                <div className="pt-2 flex space-x-2">{item.tools}</div>
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
