import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import "../app/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/index.js";
import { Home, Shop,Errors404 , SingleProduct,Cart } from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path : "/",
        element : <Home /> ,
      },
      {
        path : "/boutique" , 
        element : <Shop />  ,
      },
      {
        path: "/produits/:name",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
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

