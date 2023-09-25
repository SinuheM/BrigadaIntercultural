import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/pages/Home";
import Art from "./components/pages/Art";
import Creation from "./components/pages/Creation";
import Impact from "./components/pages/Impact";
import NotFound from "./components/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/arte",
    element: <Art />,
  },
  {
    path: "/creacion",
    element: <Creation />,
  },
  {
    path: "/impacto",
    element: <Impact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
