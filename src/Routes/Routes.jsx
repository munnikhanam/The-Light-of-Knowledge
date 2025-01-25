import { createBrowserRouter } from "react-router-dom";

import Root from "../components/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import AllBooks from "../pages/AllBooks";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
    ],
  },
]);
export default routes;
