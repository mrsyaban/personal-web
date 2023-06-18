
const Projects = () => {
    return (
        <div className="w-full mt-[150px] text-white items-start">
          <div
            className="z-10 mb-[100px] flex flex-col items-start text-2xl"
          >
            <h2 className="text-6xl font-bold ">
              Recent
              <br />
              Projects <span className="text-4xl text-blue">+</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-11 gap-y-14 w-[500px] md:w-[1050px] h-[450px] mx-auto relative ">
            <a
              href="https://github.com/mrsyaban/ChatGPT-Lite" 
              rel="noreferrer" 
              target="_blank"
            >
              
              <div className="mx-auto" 
                    style={{
                      backgroundImage: "url('/src/assets/images/test.png')",
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}>
                  <h1 className="text-2xl font-bold">
                    <span className="text-blue">| </span>
                    ChatGPT Lite
                  </h1>
              </div>
            </a>
            <div className="h-[200px] w-[450px] mx-auto">
              <h1 className="text-2xl font-bold">
                <span className="text-blue">| </span>
                Shortest Route Finder
              </h1>
            </div>
            <div className="h-[200px] w-[450px] mx-auto">
              <h1 className="text-2xl font-bold">
                <span className="text-blue">| </span>
                Face Recognition
              </h1>
            </div>
            <div className="h-[200px] w-[450px] mx-auto">
              <h1 className="text-2xl font-bold">
                <span className="text-blue">| </span>
                Maze Treasure Hunt
              </h1>
            </div>
            <div className="h-[200px] w-[450px] mx-auto">
              <h1 className="text-2xl font-bold">
                <span className="text-blue">| </span>
                Point Of Sales App
              </h1>
            </div>
          </div>
       </div>
    )

};

export default Projects;
