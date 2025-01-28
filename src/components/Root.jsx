import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navber />
      <div>
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
