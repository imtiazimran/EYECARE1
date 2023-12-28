import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ABOUT from "./Components/About.jsx";
import CONTACT from "./Components/Contact.jsx";
import { Bell } from "./Components/Bell/bell.jsx";
import { CART } from "./Components/Cart/cart.jsx";
import WISHLIST from "./Components/Wishlist/wishList.jsx";

import PROFILE from "./Components/PROFILE/Profile.jsx";

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
  {},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
