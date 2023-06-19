
const Career = () => {
  return (
    <div className="w-full md:mt-[200px] mt-[100px] mb-[100px] text-white md:mx-56">
      <div
        className="mb-10 items-center justify-between md:flex"
      >
        <div>
          <h2 className="md:text-6xl text-4xl font-bold ">
            Experience <span className="text-3xl text-blue md:text-4xl">+</span>
          </h2>
        </div>
      </div>
      <div className="md:flex" data-aos="fade-right" data-aos-duration="1000">

      </div>
      <div className="flex flex-col w-full space-y-9" data-aos="fade-right" data-aos-duration="1000">
        <div >
          <div className="flex items-center">
            <span className="text-blue">|</span>
            <h5 className="pl-4 text-2xl font-bold">Web Developer</h5>
          </div>
          <div className="ml-12 md:ml-5">
            <p className="">Ganesha Student Innovation Summit</p>
            <p className="mt-2 text-dateGray">May 2023 - Present</p>
            <div className="mt-4">
              <p >
                Collaborate with multidisciplinary team of developers, designers, and stakeholders to create innovative web applications for the GSIS organization and Build and optimize APIs to facilitate seamless integration with front-end systems.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6 md:mb-0 " >
          <div className="flex items-center">
            <span className="text-blue">|</span>
            <h5 className="pl-4 text-2xl font-bold">Back End Engineer </h5>
          </div>
          <div className="ml-12 md:ml-5">
            <p className="">Parade Wisuda ITB</p>
            <p className="mt-2 text-dateGray">Jan 2023 - Apr 2023</p>
            <div className="mt-4">
              <p >
              Collaborate with a multidisciplinary team of developers, designers, and stakeholders to create showcase project of ITB graduates student.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6 md:mb-0 " >
          <div className="flex items-center">
            <span className="text-blue">|</span>
            <h5 className="pl-4 text-2xl font-bold">Controls Engineer</h5>
          </div>
          <div className="ml-12 md:ml-5">
            <p className="">Viva La Ganesha</p>
            <p className="mt-2 text-dateGray">Mar 2022 - Present</p>
            <div className="mt-4">
              <p >
                Collaborate with multidisciplinary team to build a hexapod robot
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6 md:mb-0 " >
          <div className="flex items-center">
            <span className="text-blue">|</span>
            <h5 className="pl-4 text-2xl font-bold">Computer Lab Assitant</h5>
          </div>
          <div className="ml-12 md:ml-5">
            <p className=""><a href="https://www.linkedin.com/company/comlabs-usdi-itb/" >Comlabs-USDI ITB</a></p>
            <p className="mt-2 text-dateGray">Sept 2022 - Dec 2022</p>
            <div className="mt-4">
              <p >
              Guide, assist, and score every test of first-year students on Introduction to Computing practice using Python programming language
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
