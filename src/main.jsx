import { createRoot } from "react-dom/client";

import "./index.css";

import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
