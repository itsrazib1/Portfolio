import { createBrowserRouter } from "react-router-dom";
import Home from "./Homee/Home/Home";
import Banner from "./Homee/Banner/Banner";
import About from "./Homee/About/About";
import Project from "./Homee/Project/Project";
import Contract from "./Homee/Contract/Contract";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/project",
        element: <Project></Project>,
      },
      {
        path: "/contract",
        element: <Contract></Contract> ,
      },
    ],
  },
]);
export default router;
