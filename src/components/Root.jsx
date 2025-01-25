import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navber />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
