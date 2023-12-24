import { Link } from 'react-router-dom';
import logo from './../../assets/logo.svg';
import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';

const NavBar: React.FC = () => {
  const scrollToTop = () => { 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  };

  const scrollToProjects = () => { 
    const value = document.getElementById('proj-section')?.offsetTop; 
    window.scrollTo({ 
      top: value? value-100 : 0,  
      behavior: 'smooth'
    }); 
  };

  return (
    <nav className="flex h-fit xl:w-[1100px] w-full lg:w-[750px] md:w-[550px] z-40 mx-auto fixed top-0 left-0 right-0 justify-between pt-5 pb-2 bg-black px-6 sm:px-0">
      <div className="flex self-start items-center gap-10">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            onClick={scrollToTop}
            className="w-[170px] h-auto cursor-pointer"
          />
        </Link>

        <div className="sm:flex text-navbarBlue font-semibold text-lg gap-5 hidden">
          <Link to="/" preventScrollReset={true} onClick={scrollToProjects} className='hover:text-blue hover:cursor-pointer'>
              Projects
          </Link>
          <Link to="/blog" className="hover:text-blue">
            Blog
          </Link>
        </div>
      </div>


      <div className="flex bg-transparent pt-2 space-x-3 h-auto text-navbarBlue">
        <a
          href="https://www.linkedin.com/in/mrsyaban/"
          rel="noreferrer"
          target="_blank"
          className="hover:text-blue"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com/mrsybn_/"
          rel="noreferrer"
          target="_blank"
          className="hover:text-blue"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://github.com/mrsyaban"
          rel="noreferrer"
          target="_blank"
          className="hover:text-blue"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
