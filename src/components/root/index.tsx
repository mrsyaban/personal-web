import { Outlet } from "react-router-dom";
import NavBar from "../NavBar"
import Footer from "../footer";

const Root = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Root