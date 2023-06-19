import profpic from './../../assets/propil.svg';
import { FaFileAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="flex relative w-full">
        <div className="z-20 w-[250px] xl:w-[400px] absolute  text-white xl:mt-[180px] mr-0 mt-[60px] md:justify-start align-middle" >
          <h2 className="xl:text-3xl font-bold text-xl ">Hello, it's me</h2>
          <h1 className="font-bold sm:text-[65px] text-[40px] ">
            M<span className=" text-blue">.</span>R<span className=" text-blue">. </span> Sya'ban
          </h1>
          <p className="text-justify text-base w-[250px] xl:w-full pb-10 text-lightGray">
            An Undergraduate student in informatics engineering with a passion for
            entrepreneurship. Proficient in fullstack development, database
            management, and machine learning. Aiming to disrupt
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
      <div className='z-10 xl:w-[900px] w-[500px] justify-self-end sm:opacity-100 opacity-0'>
        <img 
          src={profpic} 
          className="ml-[50px] sm:ml-[250px] h-[570px] w-[400px]  xl:w-[900px] z-10 flex relative"
          style={{ clipPath: 'inset(10% 26% 0% 30%)' }} 
          alt="prof"/>
      </div>
    </div>
  );
};

export default AboutMe;
