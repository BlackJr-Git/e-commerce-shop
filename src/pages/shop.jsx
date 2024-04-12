import {
  ShopHeader,
  ProductFilter,
  Products,
  AnimatedPages,
  Loading,
} from "../components";
import { productsData } from "@/data";
import { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetch-data";

function Shop() {
  const [products, setProducts] = useState(productsData);
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const productsDataURI = "http://localhost:3000/api/products?number=12";

  useEffect(() => {
    const loadProductsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(productsDataURI);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsFailed(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadProductsData();
  }, []);
  function searchProduct(data) {
    console.log(data.search);
    setProducts(
      productsData.filter((product) =>
        product.name.toLowerCase().includes(data.search.toLowerCase())
      )
    );
  }

  return (
    <AnimatedPages>
      <main className="max-w-7xl xl:max-w-screen-2xl m-auto md:flex items-start gap-6 mb-20 mt-7 relative">
        <div className="bg-slate-200 w-1/6 h-screen rounded-2xl hidden md:block ">
          <ProductFilter />
        </div>
        <div className="md:w-5/6 m-auto w-full mx-1">
          <ShopHeader searchProduct={searchProduct}></ShopHeader>

          {isLoading ? (
            <Loading />
          ) : (
            <Products productData={products.products} />
          )}
        </div>
      </main>
    </AnimatedPages>
  );
}

export default Shop;
