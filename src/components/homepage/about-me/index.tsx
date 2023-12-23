import profpic from './../../../assets/propil.svg';
import { FaFileAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="flex h-max w-full lg:flex-row flex-col-reverse pt-20 xl:pt-44 lg:pt-36">
      <div className="flex flex-col w-full lg:w-[500px] xl:w-[600px] text-white pt-10  md:justify-start align-middle" >
        <h2 className="xl:text-3xl font-bold text-xl ">Hello, it's me</h2>
        <h1 className="font-bold xl:text-[65px] sm:text-[55px] text-[40px] ">
          M<span className=" text-blue">.</span>R<span className=" text-blue">.</span> Sya'ban
        </h1>
        <p className="text-justify text-base w-full pb-10 text-lightGray">
          <span className='font-semibold text-lightBlue'>Muhammad Rizky Sya'ban</span> is an Undergraduate student in informatics engineering at &nbsp;
          <a href="https://www.itb.ac.id/" className='font-semibold text-lightBlue hover:text-slate-300'>Bandung Institute of Technology</a>  with a passion for
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
          <button className="flex hover:pl-5 bottom-0 items-center gap-14 border-b border-solid border-blue text-[16px] pb-2 md:gap-32 ">
            <p>
              G E T  &nbsp;  C V  &nbsp;
              <span className='text-slate-400'>(PDF)</span>
            </p>
            <FaFileAlt size={16} />
          </button>
        </a>
      </div>
      <div className='flex lg:flex-col items-center h-fit justify-center'>
        <img 
          src={profpic} 
          className="object-contain w-fit scale-75 lg:scale-100 xl:scale-125 lg:pl-10 xl:pl-32"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default AboutMe;
