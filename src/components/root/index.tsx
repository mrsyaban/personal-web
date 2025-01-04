import { Outlet } from "react-router-dom";
import NavBar from "../NavBar"
import Footer from "../footer";

const Root = () => {
  return (
    <div className="w-[90%] md:w-[500px] lg:w-[700px] xl:w-[1050px] mx-auto bg-black">
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Root