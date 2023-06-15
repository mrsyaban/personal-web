
import { FaFileAlt } from "react-icons/fa";

const Career = () => {
  

  return (
    <div className="w-full mt-[200px] text-white md:mx-56">
      <div
        className="mb-10 items-center justify-between md:flex"
      >
        <div>
          <h2 className="text-6xl font-bold ">
            Career <span className="text-3xl text-blue md:text-4xl">+</span>
          </h2>
        </div>
        <div className="flex justify-center">
          <button className="actionBtn mt-4 mb-4 flex items-center gap-14 border-b border-solid border-blue pb-2 md:mt-0 md:mb-0 md:gap-32">
            Get CV
            <FaFileAlt size={16} />
          </button>
        </div>
      </div>
      <div className="md:flex" data-aos="fade-right" data-aos-duration="1000">

      </div>
    </div>
  );
};

export default Career;
