import profpic from './../../assets/propil.svg';
import { FaFileAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="flex relative  w-full">
        <div className="z-20 w-[600px] absolute space-y-6 text-white mt-[220px] mr-0" >
          <h2 className="text-3xl font-bold">Hello, it's me</h2>
          <h1 className="text-4xl font-bold md:text-5xl">
            Muhammad Rizky Sya'ban<span className="text-blue  text-7xl">.</span>
          </h1>
          <p className="text-justify text-base pb-2 text-lightGray">
            An Undergraduate student in informatics engineering with a passion for
            entrepreneurship seeking opportunities to bring technical skills and
            innovative ideas to a startup. Proficient in programming, database
            management, web development, and project management. Aiming to disrupt
            industries and bring new solutions to market through creative
            problem-solving and teamwork.
          </p>
          <a 
            className="flex  justify-start " 
            href="https://drive.google.com/file/d/1Gt97yl9q1s_LqC0LzyK4s9re9a92_TqV/view?usp=drive_link" 
            rel="noreferrer" 
            target="_blank"
            
          >
            <button className="hover:pl-[19px] mt-4 mb-4 flex items-center gap-14 border-b border-solid border-blue text-[16px] pb-2 md:mt-0 md:mb-0 md:gap-32 ">
              G E T  &nbsp;  C V
              <FaFileAlt size={16} />
            </button>
          </a>
        </div>
      <div className='z-10 flex relative w-full content-end'>
        <img 
          src={profpic} 
          className="ml-[400px] h-[600px] w-[900px]"
          style={{ clipPath: 'inset(0% 26% 0% 30%)' }} 
          alt="prof"/>
      </div>
    </div>
  );
};

export default AboutMe;
