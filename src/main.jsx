import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueil from "./component/Accueil.jsx";
import Articles from "./menuDeNavigation/Accueil/Articles.jsx";
import About from "./menuDeNavigation/Accueil/About.jsx";
import Contact from "./menuDeNavigation/Accueil/Contact.jsx";
import Cart from "./menuDeNavigation/Accueil/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/article",
        element: <Articles />,
      },
      {
        path: "/apropos",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
