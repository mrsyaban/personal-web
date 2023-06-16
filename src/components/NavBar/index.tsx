import logo from './../../assets/logo.svg';


const NavBar: React.FC = () => {
  return (
    <div className="w-full h-[200px] relative ">
      <div className="z-10 h-[175px] text-black w-full fixed py-6 bg-gradient-to-b from-black ">
        <img src={logo} alt="logo" style={{ width: '200px', height: 'auto' }} />
        
      </div>
    </div>
  );
};

export default NavBar;
