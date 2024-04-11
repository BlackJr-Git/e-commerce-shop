import { useState, useEffect } from "react";
import {
  HeroBanner,
  Products,
  Services,
  SideCart,
  WhyUs,
  Warranty,
  Loading,
} from "../components";
// import { productsData } from "@/data";
import { AnimatedPages } from "../components";
import { fetchData } from "@/utils/fetch-data";

function Home() {
  const [displayCart, setDisplayCart] = useState(false);
  const [productsData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const productsDataURI = "http://localhost:3000/api/products?number=8";

  function removeCart() {
    setDisplayCart(false);
  }

  useEffect(() => {
    const loadProductsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(productsDataURI);
        setProductData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsFailed(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadProductsData();
  }, []);

  useEffect(() => {
    console.log("productsData :", productsData.products);
  }, [productsData]);

  // let productsDisplay = productsData.products
  // console.log(productsDisplay);

  return (
    <AnimatedPages>
      <main className="relative">
        <HeroBanner />
        <Services />
        <div className="bg-slate-100">
          {isLoading ? (
            <Loading />
          ) : (
            <Products
              title={"Nos Produits "}
              productData={productsData.products}
            />
          )}
        </div>
        <WhyUs />
        <Warranty />
        <SideCart
          handleClick={removeCart}
          className={`ease-in duration-500 ${
            displayCart ? "" : "translate-x-full"
          } h-screen w-96 bg-slate-50 fixed top-0 right-0 flex flex-col justify-between pb-6 border-l border-slate-400`}
        />
      </main>
    </AnimatedPages>
  );
}

export default Home;
