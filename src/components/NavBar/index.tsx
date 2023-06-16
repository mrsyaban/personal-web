import logo from './../../assets/logo.svg';


const NavBar: React.FC = () => {
  return (
    <div className="w-full z-40 h-[70px] relative ">
      <div className="h-[200px] text-black w-full fixed py-6 bg-gradient-to-b from-black ">
      <a href="13521119@std.stei.itb.ac.id">

        <img src={logo} alt="logo" style={{ width: '200px', height: 'auto' }} />
      </a>
      </div>
    </div>
  );
};

export default NavBar;
