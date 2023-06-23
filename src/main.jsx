import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Component/Router";
import VideoBackground from "./Component/VideoBackground";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div  className="text-gray-300 ">
    <VideoBackground />
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
