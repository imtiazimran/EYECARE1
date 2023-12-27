import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ABOUT from "./Components/About.jsx";
import CONTACT from "./Components/Contact.jsx";
import { Bell } from "./Components/bell.jsx";
import { CART } from "./Components/cart.jsx";
import { WISHLIST } from "./Components/cart.jsx";
import { PROFILE } from "./Components/cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <ABOUT />,
  },
  {
    path: "contact",
    element: <CONTACT />,
  },
  {
    path: "bell",
    element: <Bell />,
  },
  {
    path: "cart",
    element: <CART />,
  },
  {
    path: "wishList",
    element: <WISHLIST />,
  },
  {
    path: "userProfile",
    element: <PROFILE />,
  },
  {
    path: "contact",
    element: <CONTACT />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
