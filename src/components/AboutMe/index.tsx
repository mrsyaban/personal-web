const AboutMe = () => {
  return (
    <div className="mt-32 w-full md:mt-20">
      <div
        className="space-y-6 text-white"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold">Hello, it's me</h2>
        <h1 className="text-4xl font-bold md:text-5xl">
          Muhammad Rizky Sya'ban<span className="text-blue  text-7xl">.</span>
        </h1>
        <p className="text-justify text-base text-lightGray">
          An Undergraduate student in informatics engineering with a passion for
          entrepreneurship seeking opportunities to bring technical skills and
          innovative ideas to a startup. Proficient in programming, database
          management, web development, and project management. Aiming to disrupt
          industries and bring new solutions to market through creative
          problem-solving and teamwork.
        </p>
        <button className="actionBtn  border-b border-solid border-blue pr-4 pb-2">
          SCROLL FOR MORE
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
