import { useState } from "react";
import { HeroBanner, Products, Services, SideCart, WhyUs,Warranty } from "../components";
import { productsData } from "@/data";
import { AnimatedPages } from "../components";

function Home() {
  const [displayCart, setDisplayCart] = useState(false);

  function removeCart() {
    setDisplayCart(false);
  }

  let productsDisplay = productsData.slice(0, 8)

  return (
    <AnimatedPages>
      <main className="relative">
        <HeroBanner />
        <Services />
        <div className="bg-slate-100">
          <Products title={"Nos Produits "} productData={productsDisplay} />
        </div>
        <WhyUs />
        <Warranty />
        {displayCart ? (
          <SideCart
            handleClick={removeCart}
            className={
              "ease-in duration-500  h-screen w-96 bg-slate-50 fixed top-0 right-0 flex flex-col justify-between pb-6 border-l border-slate-400"
            }
          />
        ) : (
          <SideCart
            handleClick={removeCart}
            className={
              "ease-in duration-500 translate-x-full  h-screen w-96 bg-slate-50 fixed top-0 right-0 flex flex-col justify-between pb-6 border-l border-slate-400"
            }
          />
        )}
      </main>
    </AnimatedPages>
  );
}

export default Home;
