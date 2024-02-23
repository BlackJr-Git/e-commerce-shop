import { Footer } from "./index";
import { Outlet } from "react-router-dom/dist";
import Menu from "./menu";
import { SideCart } from "./index";
import { useEffect, useState } from "react";
import { useStore } from "@/appStore";
import user from "@/data/users";
import { Toaster } from "./ui/toaster";
import { ScrollToTop } from "./index";

function Layout() {
  const [ displayCart, setDisplayCart ] = useState(false) ;
  const { currentUser , updateUser } = useStore();

  useEffect(() => {
    updateUser(user)
    // console.log(currentUser); 
  },[updateUser, currentUser]); 
  
  function toggleCart() {
    setDisplayCart(!displayCart)
  }

  function removeCart() {
    setDisplayCart(false)
  }

  return (
    <>
      <ScrollToTop />
      <Menu handleClick={toggleCart} />
        <Outlet />
        {displayCart 
        ? <SideCart handleClick={removeCart} className={"ease-in duration-500 z-50  h-screen w-96 bg-slate-50 fixed top-0 right-0 flex flex-col justify-between pb-6 border-l border-slate-400"} /> 
        : <SideCart handleClick={removeCart} className={"ease-in duration-500 z-50 translate-x-full  h-screen w-96 bg-slate-50 fixed top-0 right-0 flex flex-col justify-between pb-6 border-l border-slate-400"}/> 
        }
        <Toaster />
      <Footer />
    </>
  );
}

export default Layout ;
