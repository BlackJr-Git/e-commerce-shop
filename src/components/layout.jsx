import { Footer, ScrollToTop, SideCart } from "./index";
import { Outlet } from "react-router-dom/dist";
import Menu from "./header/menu";
import { useEffect, useState } from "react";
import { useStore } from "@/appStore";
import { Toaster } from "./ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/react";

function Layout() {
  const { updateUser , updateCart , updateOrder } = useStore();
  const [displayCart, setDisplayCart] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let initialData = "http://localhost:3000/api/users/1";
    async function fetchData() {
      try {
        const response = await fetch(initialData);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        updateUser(data);
        sessionStorage.setItem("currentUser", JSON.stringify(data)); 
        return data;
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        throw error;
      }
    }

    fetchData();
  }, [updateUser]);

  useEffect(() => {
    const cart = sessionStorage.getItem('cart');
    const order = sessionStorage.getItem('order');
    if (cart) {
      const parsedData = JSON.parse(cart);
      updateCart(parsedData);
    }

    if (order) {
      const parsedData = JSON.parse(order);
      updateOrder(parsedData);
    }
  }, [updateCart , updateOrder]); 

  function toggleCart() {
    setDisplayCart(!displayCart);
    setMobileMenuOpen(false);
  }

  function closeCart() {
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
      <SideCart
        handleClick={closeCart}
        className={`ease-in duration-500 z-[100] h-dvh  md:h-screen w-96 bg-slate-50 fixed top-0 right-0 flex flex-col justify-between pb-6 border-l border-slate-400 transform transition-transform ${
          displayCart ? "translate-x-0" : "translate-x-full"
        }`}
      />

      <Toaster />
      <Footer />
    </>
  );
}

export default Layout;
