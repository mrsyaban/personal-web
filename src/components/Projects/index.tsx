import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
        <div className="w-full my-20  text-white">
        <div
          style={{ height: "100%" }}
          className={` z-10 flex flex-col justify-between text-2xl md:absolute md:mx-56`}
        >
          <div>
            <h2 className="text-6xl font-bold ">
              Recent
              <br />
              Projects <span className="text-4xl text-blue">+</span>
            </h2>
          </div>
  
        </div>
        <Carousel responsive={responsive}>
        <div className="mx-10 items-center md:mx-56 md:flex">
          <div className="card cursor-pointer rounded-xl md:pr-4">
            <div className="cardTitle animated animatedFadeInUp fadeInUp absolute ml-4">
              <h1 className="mt-80 text-2xl font-bold">
                <span className="text-blue">| </span>
                WeMaMobile
              </h1>
            </div>
            <img
              src="../../assets/gambar.png"
              alt=""
              className="relative -z-10 block rounded-xl"
            />
          </div>

          <div>
            <div className="card cursor-pointer rounded-xl py-4">
              <div className="cardTitle animated animatedFadeInUp fadeInUp absolute ml-4">
                <h1 className="mt-80 text-2xl font-bold">
                  <span className="text-blue">| </span>UAE
                </h1>
              </div>
              <img
                src="../../assets/gambar.png"
                alt=""
                className="relative -z-10 block rounded-xl"
              />
            </div>

            <div className="card cursor-pointer rounded-xl">
              <div className="cardTitle animated animatedFadeInUp fadeInUp absolute ml-4">
                <h1 className="mt-80 text-2xl font-bold">
                  <span className="text-blue">| </span>Xchangewise
                </h1>
              </div>
              <img
                src="../../assets/gambar.png"
                alt=""
                className="relative -z-10 block rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="mx-10 items-center md:mx-56 md:flex">
          <div className="card cursor-pointer rounded-xl md:pr-4">
            <div className="cardTitle animated animatedFadeInUp fadeInUp absolute ml-4">
              <h1 className="mt-80 text-2xl font-bold">
                <span className="text-blue">| </span>
                Kisi Security
              </h1>
            </div>
            <img
              src="../../assets/gambar.png"
              alt=""
              className="relative -z-10 block rounded-xl"
            />
          </div>

          <div>
            <div className="card cursor-pointer rounded-xl py-4">
              <div className="cardTitle animated animatedFadeInUp fadeInUp absolute ml-4">
                <h1 className="mt-80 text-2xl font-bold">
                  <span className="text-blue">| </span>FBN
                </h1>
              </div>
              <img
                src="../../assets/gambar.png"
                alt=""
                className="relative -z-10 block rounded-xl"
              />
            </div>

            <div className="card cursor-pointer rounded-xl">
              <div className="cardTitle animated animatedFadeInUp fadeInUp absolute ml-4">
                <h1 className="mt-80 text-2xl font-bold">
                  <span className="text-blue">| </span>VizarHomes
                </h1>
              </div>
              <img
                src="../../assets/gambar.png"
                alt=""
                className="relative -z-10 block rounded-xl"
              />
            </div>
          </div>
        </div>
      </Carousel>
       </div>
    )

};

export default Projects;
