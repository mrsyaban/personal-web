import logo from './../../assets/logo.svg';
import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';

const NavBar: React.FC = () => {
  return (
    <div className="w-full  z-40 h-[70px] relative ">
      <div className="flex w-[900px] fixed justify-between py-6 bg-gradient-to-b from-black ">

        <a href='https://mrsyaban.vercel.app/'>
          <img src={logo} alt="logo" className='w-[200px] h-auto opacity-70 hover:opacity-100 cursor-pointer'/>
        </a>
        
        <div className='flex bg-transparent pt-2 space-x-3 h-auto text-blue'>
          <a href='https://www.linkedin.com/in/mrsyaban/' rel="noreferrer" target="_blank" className='opacity-70 hover:opacity-100'>
              <FaLinkedin size={30}/>
          </a>
          <a href='https://www.instagram.com/mrsybn_/' rel="noreferrer" target="_blank" className='opacity-70 hover:opacity-100'>

            <FaInstagram size={30}/>
          </a>
          <a href='https://github.com/mrsyaban' rel="noreferrer" target="_blank" className='opacity-70 hover:opacity-100'>
            <FaGithub size={30}/>
          </a>
        </div>

      </div>
    </div>
  );
};

export default NavBar;
