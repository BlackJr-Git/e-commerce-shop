import { Footer } from "./index";
import { Outlet } from "react-router-dom/dist";
import Menu from "./menu";
import { SideCart } from "./index";
import { useState } from "react";

function Layout() {
  const [ displayCart, setDisplayCart ] = useState(false)
  
  function toggleCart() {
    setDisplayCart(!displayCart)
  }

  function removeCart() {
    setDisplayCart(false)
  }

  return (
    <>
      <Menu handleClick={toggleCart} />
        <Outlet />
        {displayCart 
        ? <SideCart handleClick={removeCart} className={"ease-in duration-500  h-screen w-96 bg-slate-50 fixed top-0 right-0 flex flex-col justify-between pb-6 border-l border-slate-400"} /> 
        : <SideCart handleClick={removeCart} className={"ease-in duration-500 translate-x-full  h-screen w-96 bg-slate-50 fixed top-0 right-0 flex flex-col justify-between pb-6 border-l border-slate-400"}/> 
        }
      <Footer />
    </>
  );
}

export default Layout ;
