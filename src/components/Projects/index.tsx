
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
    return (
        <div className="w-full mt-20  text-white">
        <div
          className="z-10 flex flex-col items-start text-2xl"
        >
          <h2 className="text-6xl font-bold ">
            Recent
            <br />
            Projects <span className="text-4xl text-blue">+</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-11 gap-y-14 w-[945px] h-[450px] mx-auto relative ">
  
                <div className="h-[200px] w-[450px] mx-auto">
                      <h1 className="text-2xl font-bold">
                        <span className="text-blue">| </span>
                        WeMaMobile
                      </h1>
                </div>
            </div>
       </div>
    )

};

export default Projects;
