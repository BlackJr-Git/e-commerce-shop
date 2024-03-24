import { Footer,ScrollToTop,SideCart  } from "./index";
import { Outlet } from "react-router-dom/dist";
import Menu from "./header/menu";
import { useEffect, useState } from "react";
import { useStore } from "@/appStore";
// import user from "@/data/users";
import { Toaster } from "./ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/react"

function Layout() {
  const { updateUser } = useStore();
  const [displayCart, setDisplayCart] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const [user, setUser] = useState({})



  useEffect(() => {

    let initialData = "http://localhost:3000/api/users/1"
    async function fetchData() {
      try {
        const response = await fetch(initialData);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`) ;
        }
    
        const data = await response.json();
        setUser(data)
        return data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error) ;
        throw error; 
      }
    }

    fetchData()
    updateUser(user);
  }, [updateUser,user]);
  



  function toggleCart() {
    setDisplayCart(!displayCart);
    setMobileMenuOpen(false);
  }

  function removeCart() {
    setDisplayCart(false);
  }

  return (
    <>
      <ScrollToTop />
      <SpeedInsights />
      <Menu
        handleClick={toggleCart}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Outlet />
      {displayCart ? (
        <SideCart
          handleClick={removeCart}
          className={
            "ease-in duration-500 z-[100]  md:h-screen h-dvh w-96 bg-slate-50 fixed top-0 right-0 flex flex-col justify-between pb-6 border-l border-slate-400"
          }
        />
      ) : (
        <SideCart
          handleClick={removeCart}
          className={
            "ease-in duration-500 z-[100] translate-x-full h-dvh  md:h-screen w-96 bg-slate-50 fixed top-0 right-0 flex flex-col justify-between pb-6 border-l border-slate-400"
          }
        />
      )}
      <Toaster />
      <Footer />
    </>
  );
}

export default Layout;
