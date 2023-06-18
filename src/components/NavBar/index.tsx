import logo from './../../assets/logo.svg';
import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';

const NavBar: React.FC = () => {
  return (
    <div className="w-full  z-40 h-[70px] relative ">
      <div className="flex w-[900px] fixed justify-between py-6 bg-gradient-to-b from-black ">

        <img src={logo} alt="logo" className='w-[200px] h-auto'/>
        
        <div className='bg-transparent space-x-3 h-auto'>
          <button className=''>
            <FaLinkedin size={30}/>
          </button>
          <button>
            <FaInstagram size={30}/>
          </button>
          <button>
            <FaGithub size={30}/>
          </button>
        </div>

      </div>
    </div>
  );
};

export default NavBar;
