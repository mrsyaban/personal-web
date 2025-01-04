import React, { useRef, useEffect } from 'react';

const ProjectDetails = ({
  closeModal,
  modalData
}: {
  closeModal: any;
  modalData: any;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-darkGray flex flex-col md:flex-row gap-16 h-fit text-white rounded-lg w-[90%] md:w-[60%] p-6 relative"
      >
        {/* Image container */}
        <div className="w-full md:w-[50%] flex-shrink-0">
          <div
            className={`${modalData.image} bg-cover bg-center rounded-lg`}
            style={{
              paddingBottom: '56.25%', // 16:9 aspect ratio
              backgroundImage: `url(${modalData.image})`
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <h1 className="text-2xl font-bold mb-2">{modalData.title}</h1>
          <div className="mt-2 flex-1 overflow-y-auto">
            <ul className="list-disc list-outside pl-6 text-lg">
              {modalData.desc.map((item: any, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap items-center py-4 mt-8 gap-0">
            {modalData.toolsPatch.map((tool: any, index: any) => (
              <div key={index} className="flex items-center">
                <img src={tool} alt="" className="w-auto h-6" />
              </div>
            ))}
          </div>

          <div className="flex space-x-4 self-start justify-self-end">
            <a
              href={modalData.url}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:opacity-70 bg-blue rounded-sm px-4 py-1 font-bold"
            >
              Documentation
            </a>
            <a
              href={modalData.url}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:opacity-70 bg-blue rounded-sm px-4 py-1 font-bold"
            >
              Repository
            </a>
          </div>
        </div>
        <button
          onClick={closeModal}
          className="absolute top-2 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
