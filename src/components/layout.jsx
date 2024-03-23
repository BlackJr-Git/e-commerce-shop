import { Footer } from "./index";
import { Outlet } from "react-router-dom/dist";
import Menu from "./header/menu";
import { SideCart } from "./index";
import { useEffect, useState } from "react";
import { useStore } from "@/appStore";
import user from "@/data/users";
import { Toaster } from "./ui/toaster";
import { ScrollToTop } from "./index";
import { SpeedInsights } from "@vercel/speed-insights/react"

function Layout() {
  const [displayCart, setDisplayCart] = useState(false);
  const { updateUser } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    updateUser(user);
    // console.log(currentUser);
  }, [updateUser]);

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
