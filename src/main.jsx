import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import "../app/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/index.js";
import {
  Home,
  Shop,
  Errors404,
  SingleProduct,
  Cart,
  Checkout,
  Login,
  Services,
  APropos,
  Contact
} from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/boutique",
        element: <Shop />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <APropos />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/produits/:UGS",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Errors404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
