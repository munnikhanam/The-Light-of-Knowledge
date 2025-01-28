import { createBrowserRouter } from "react-router-dom";

import Root from "../components/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import AllBooks from "../pages/AllBooks";
import BookDetails from "../components/BookDetails";
import ListedBooks from "../components/ListedBooks";

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
        path: "books/:bookId",
        element: <BookDetails />,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
    ],
  },
]);
export default routes;
