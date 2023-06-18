import logo from './../../assets/logo.svg';
import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';

const NavBar: React.FC = () => {
  return (
    <div className="w-full  z-40 h-[70px] relative ">
      <div className="flex w-[900px] fixed justify-between py-6 bg-gradient-to-b from-black ">

        <img src={logo} alt="logo" className='w-[200px] h-auto'/>
        
        <div className='flex bg-transparent pt-1 space-x-3 h-auto'>
          <a href='https://www.linkedin.com/in/mrsyaban/' rel="noreferrer" target="_blank">
              <FaLinkedin size={30}/>
          </a>
          <a href='https://www.instagram.com/mrsybn_/' rel="noreferrer" target="_blank">

            <FaInstagram size={30}/>
          </a>
          <a href='https://github.com/mrsyaban' rel="noreferrer" target="_blank">
            <FaGithub size={30}/>
          </a>
        </div>

      </div>
    </div>
  );
};

export default NavBar;
